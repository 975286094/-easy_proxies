# Surge 模块集

本目录存放 Surge 模块（`.sgmodule`），均由 Quantumult X / Loon 插件转换而来。

raw 前缀：`https://raw.githubusercontent.com/975286094/-easy_proxies/main/`

---

## 模块索引

| 模块 | 用途 | 脚本来源 | 维护方式 |
| --- | --- | --- | --- |
| `KuWoTask.sgmodule` | 酷我音乐自动签到 / 领金币 / 抽奖 | `ios151/Rewrite`（原作者） | 跟随原作者更新 |
| `KuWoTask_SelfHosted.sgmodule` | 同上 | 本仓库 `scripts/kuwotask.js` | **自托管**，冻结版本 |
| `bdyy.sgmodule` | 波点音乐 会员调试 / 去广告 / 下载歌曲 | `WeiGiegie/666`（原作者） | 跟随原作者更新 |
| `bdyy_SelfHosted.sgmodule` | 同上 | 本仓库 `scripts/bdyy.js` | **自托管**，冻结版本 |
| `BlockAdvertisers.sgmodule` | 广告平台拦截器（全平台去广告基础规则，198 条） | **无脚本**，纯规则 | 静态，天然不依赖上游 |
| `KuWoTask_Test.sgmodule` | 同 KuWoTask，cron 改为每分钟 | — | ⚠️ 临时排障用，验证后请删除 |
| `小浣熊OpenAI反代.sgmodule` | 商汤小浣熊 → OpenAI 兼容 API（真流式）+ 每日签到 | `LinkPass888/Surge`（原作者） | 跟随原作者更新 |
| `小浣熊OpenAI反代.loon.plugin` | 同上，**Loon 版**（脚本已适配 Loon） | 本仓库 `scripts/raccoon-openai.loon.js` | **自托管适配版** |

### 导入链接

- [KuWoTask（原版）](surge:///install-module?url=https://raw.githubusercontent.com/975286094/-easy_proxies/main/modules/KuWoTask.sgmodule&name=KuWoTask)
- [KuWoTask（自主版）](surge:///install-module?url=https://raw.githubusercontent.com/975286094/-easy_proxies/main/modules/KuWoTask_SelfHosted.sgmodule&name=KuWoTask_SelfHosted)
- [bdyy 波点音乐（原版）](surge:///install-module?url=https://raw.githubusercontent.com/975286094/-easy_proxies/main/modules/bdyy.sgmodule&name=bdyy)
- [bdyy 波点音乐（自主版）](surge:///install-module?url=https://raw.githubusercontent.com/975286094/-easy_proxies/main/modules/bdyy_SelfHosted.sgmodule&name=bdyy_SelfHosted)
- [BlockAdvertisers 广告平台拦截器](surge:///install-module?url=https://raw.githubusercontent.com/975286094/-easy_proxies/main/modules/BlockAdvertisers.sgmodule&name=BlockAdvertisers)
- [小浣熊 OpenAI 反代（原版）](surge:///install-module?url=https://raw.githubusercontent.com/975286094/-easy_proxies/main/modules/%E5%B0%8F%E6%B5%A3%E7%86%8AOpenAI%E5%8F%8D%E4%BB%A3.sgmodule&name=%E5%B0%8F%E6%B5%A3%E7%86%8AOpenAI%E5%8F%8D%E4%BB%A3)
- [小浣熊 OpenAI 反代（Loon 版）](loon://import?plugin=https%3A%2F%2Fraw.githubusercontent.com%2F975286094%2F-easy_proxies%2Fmain%2Fmodules%2F%25E5%25B0%258F%25E6%25B5%25A3%25E7%2586%258AOpenAI%25E5%258F%258D%25E4%25BB%25A3.loon.plugin)

> GitHub 页面内的 `surge://` 链接需在 Surge 已安装的设备上点击；也可复制 raw URL 到 Surge → 模块 → `+` 手动导入。

---

## 原版 vs 自主版

两者功能完全相同，只有脚本来源不同：

| | 原版 | 自主版 |
| --- | --- | --- |
| 脚本地址 | 原作者 GitHub | 本仓库 `scripts/` |
| 上游更新 | 自动获得 | 收不到，需手动同步 |
| 作者删库 | ❌ 模块失效 | ✅ 不受影响 |

**建议**：日常用原版享受更新；发现原作者删库或长期停更时，切换到自主版。

> `BlockAdvertisers.sgmodule` 属于**无脚本模块**（只有规则与 URL 重写），不存在"上游删库"问题，无需自主版。其图标已一并镜像到本仓库 `icons/`。

---

## 目录结构

```
.
├── modules/                   Surge 模块（含 Loon 插件）
│   ├── README.md              本文件
│   ├── KuWoTask.sgmodule
│   ├── KuWoTask_SelfHosted.sgmodule
│   ├── KuWoTask_Test.sgmodule
│   ├── bdyy.sgmodule
│   ├── bdyy_SelfHosted.sgmodule
│   ├── BlockAdvertisers.sgmodule
│   ├── 小浣熊OpenAI反代.sgmodule
│   └── 小浣熊OpenAI反代.loon.plugin
├── scripts/                   镜像脚本（自主版依赖）
│   ├── kuwotask.js
│   ├── bdyy.js
│   ├── raccoon-openai.js
│   └── raccoon-openai.loon.js
└── icons/                     镜像图标
    ├── kuwosvip.png
    └── TencentAd.png
```

---

## 脚本镜像

`scripts/` 下的文件是原作者脚本在 **2026-10-13** 的完整快照，仅作兜底，未做任何修改（均为混淆代码）。

| 文件 | 上游 | 快照大小 | MD5 |
| --- | --- | --- | --- |
| `kuwotask.js` | `ios151/Rewrite/refs/heads/main/kuwotask.js` | 42,835 B | `0252015a9c58f582d998c8d4ce88e9f7` |
| `bdyy.js` | `WeiGiegie/666/main/bdyy.js` | 176,784 B | `d51a7b081af2e554102b0ff601b9f1ba` |

### 手动同步上游更新

```sh
curl -sL https://raw.githubusercontent.com/ios151/Rewrite/refs/heads/main/kuwotask.js -o scripts/kuwotask.js
curl -sL https://raw.githubusercontent.com/WeiGiegie/666/main/bdyy.js -o scripts/bdyy.js
git add scripts/ && git commit -m "chore: sync upstream scripts" && git push
```

---

## 转换规则（QX / Loon → Surge）

| 项 | QX / Loon | Surge |
| --- | --- | --- |
| 定时任务 | `cron "expr"` / `pattern=` | `type=cron, cronexp="expr"` |
| 请求脚本 | `url script-request-body` | `type=http-request, pattern=<regex>` |
| 响应脚本 | `url script-response-body` | `type=http-response, pattern=<regex>` |
| 空响应拦截 | `url reject-200` | `[Map Local] ... data-type=text status-code=200` |
| 参数占位符 | `{key}` | `{{{key}}}`（三花括号，大小写敏感） |
| 脚本命名 | `tag=xxx` | 用 `=` 前的名称，**无 `tag=`** |
| 参数定义 | `[Argument]` 段 | `#!arguments=key:默认值,...` |
| 参数描述 | 逐项 `tag=` / `desc=` | `#!arguments-desc=`（**整表**描述，非逐项） |
| MITM | `hostname = x` | `hostname = %APPEND% x` |

**已知限制**

- **元信息必须位于文件最顶部**。Surge 只从文件开头的 `#!` 块读取 `name` / `desc`，一旦 `#!name` 之前出现任何普通注释行（如 `# 来源: ...`），模块会显示为**无名称、无描述**。来源注释因此一律放到文件末尾。
- Surge 主机名列表不支持 `IP:端口` 与 IP 段通配（如 `39.156.12*.*:443`），此类条目在转换时被剔除。
- 原作者正则若要求 `/api/` 前缀（如 `h5app.kuwo.cn/api/service/...`），转换时原样保留，不做"修正"。

---

## 小浣熊 Loon 适配说明（Surge → Loon）

`小浣熊OpenAI反代.loon.plugin` + `scripts/raccoon-openai.loon.js` 是 Surge 原版的 Loon 适配，差异点：

| 项 | Surge | Loon 处理 |
| --- | --- | --- |
| `$httpClient` timeout 单位 | 秒 | **毫秒**（`20` → `20000`，不改会 20ms 即超时） |
| 插件参数 | `#!arguments` + `{{{key}}}` 插值 | `#!input` 配置项，脚本内 `$persistentStore.read(键名)` 读取 |
| `engine=webview` | 有 | 无此参数，删除 |
| `atob`（JWT 过期预检） | 常驻 | 不保证有，换纯 JS base64 解码兜底 |
| MITM | `hostname = %APPEND% x` | `hostname = x`，无 `%APPEND%` |

配置填写：添加插件时填 `nation`（默认 86）/`phone`/`password`，或只填 `token`；不用的项留空。密码含 `&` `=` 时必须用 token 方式。

---

所有脚本版权归原作者所有，此处仅作格式转换与镜像备份。请于下载后 24 小时内删除，勿用于商业用途。
