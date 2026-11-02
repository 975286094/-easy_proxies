/*
 * OfficeAce2API for Loon
 * 把 https://api.openai.com/v1/* 反代到自建 officeace2api 网关
 *
 * 配置（插件 #!input 或 script 行 argument="target=...&key=..."）：
 *   target : officeace2api 地址，默认 http://192.168.50.229:7864
 *   key    : officeace2api 的 apiKeys 值（config.json）
 *
 * 注意：手机需与电脑同一局域网，或手机系统挂 Tailscale 后把 target 改成 Tailscale 地址。
 */

const DEF_TARGET = "http://192.168.50.229:7864";

function readConf(name, def) {
  let v = "";
  try { v = $persistentStore.read(name); } catch (e) {}
  if (!v && typeof $argument !== "undefined" && $argument) {
    const a = String($argument);
    const m = a.match(new RegExp("(?:^|[&,])" + name + "=([^&,]*)"));
    if (m) v = decodeURIComponent(m[1]);
    else {
      try { const o = JSON.parse(a); if (o[name]) v = o[name]; } catch (e) {}
    }
  }
  return (!v) ? def : v;
}

const target = String(readConf("target", DEF_TARGET)).replace(/\/+$/, "");
const key = String(readConf("key", ""));

const mm = $request.url.match(/^https?:\/\/[^\/]+(\/.*)?$/);
const path = (mm && mm[1]) ? mm[1] : "/";

const headers = {};
const src = $request.headers || {};
for (const k in src) {
  if (/^(host|origin|referer|authorization|content-length)$/i.test(k)) continue;
  headers[k] = src[k];
}
if (key) headers["Authorization"] = "Bearer " + key;

$done({ url: target + path, headers: headers });
