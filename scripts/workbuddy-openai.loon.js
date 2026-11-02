/*
 * WorkBuddy OpenAI 反代 · Loon 脚本
 * 作用：把客户端发往 https://api.openai.com/v1/* 的 OpenAI 兼容请求，
 *       改写到自建 WorkBuddy2API 网关（默认 http://192.168.50.229:7863），
 *       并注入网关 api_key。
 *
 * 配置（二选一）：
 *   1) Loon 插件 #!input：target / key（推荐，添加插件时填写）
 *   2) 脚本行 argument="target=http://192.168.50.229:7863&key=xxxx"
 *
 * 说明：
 *   - target 填局域网 http://192.168.50.229:7863，或 Tailscale http://100.109.132.123:7863
 *   - key 填 WorkBuddy2API config.json 里的 api_key
 *   - 本脚本只改请求 URL/头，响应（含 SSE 流式）由 Loon 原样透传
 */

var DEFAULT_TARGET = "http://192.168.50.229:7863";

function readConf(name, def) {
  var v = "";
  try {
    if (typeof $persistentStore !== "undefined" && $persistentStore) {
      v = $persistentStore.read(name) || "";
    }
  } catch (e) {}
  if (!v && typeof $argument !== "undefined" && $argument) {
    var s = String($argument);
    var m = s.match(new RegExp("(?:^|&)" + name + "=([^&]*)"));
    if (m) {
      try { v = decodeURIComponent(m[1]); } catch (e2) { v = m[1]; }
    } else {
      try {
        var o = JSON.parse(s);
        if (o && o[name] !== undefined && o[name] !== null) v = String(o[name]);
      } catch (e3) {}
    }
  }
  return (v === undefined || v === null || v === "") ? def : v;
}

var target = String(readConf("target", DEFAULT_TARGET)).replace(/\/+$/, "");
var key = String(readConf("key", ""));

// 从原始 URL 取 path + query
var mt = String($request.url).match(/^https?:\/\/[^\/]+(\/.*)?$/);
var path = (mt && mt[1]) ? mt[1] : "/";

// 复制原请求头，剔除会冲突的
var headers = {};
var src = $request.headers || {};
for (var k in src) {
  if (/^(host|origin|referer|authorization)$/i.test(k)) continue;
  headers[k] = src[k];
}
if (key) headers["Authorization"] = "Bearer " + key;

$done({ url: target + path, headers: headers });
