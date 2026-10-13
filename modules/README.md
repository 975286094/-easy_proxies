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
| `KuWoTask_Test.sgmodule` | 同 KuWoTask，cron 改为每分钟 | — | ⚠️ 临时排障用，验证后请删除 |

### 导入链接

- [KuWoTask（原版）](surge:///install-module?url=https://raw.githubusercontent.com/975286094/-easy_proxies/main/modules/KuWoTask.sgmodule&name=KuWoTask)
- [KuWoTask（自主版）](surge:///install-module?url=https://raw.githubusercontent.com/975286094/-easy_proxies/main/modules/KuWoTask_SelfHosted.sgmodule&name=KuWoTask_SelfHosted)
- [bdyy 波点音乐（原版）](surge:///install-module?url=https://raw.githubusercontent.com/975286094/-easy_proxies/main/modules/bdyy.sgmodule&name=bdyy)
- [bdyy 波点音乐（自主版）](surge:///install-module?url=https://raw.githubusercontent.com/975286094/-easy_proxies/main/modules/bdyy_SelfHosted.sgmodule&name=bdyy_SelfHosted)

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

---

## 目录结构

```
.
├── modules/                   Surge 模块
│   ├── README.md              本文件
│   ├── KuWoTask.sgmodule
│   ├── KuWoTask_SelfHosted.sgmodule
│   ├── KuWoTask_Test.sgmodule
│   ├── bdyy.sgmodule
│   └── bdyy_SelfHosted.sgmodule
├── scripts/                   镜像脚本（自主版依赖）
│   ├── kuwotask.js
│   └── bdyy.js
└── icons/                     镜像图标
    └── kuwosvip.png
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

- Surge 主机名列表不支持 `IP:端口` 与 IP 段通配（如 `39.156.12*.*:443`），此类条目在转换时被剔除。
- 原作者正则若要求 `/api/` 前缀（如 `h5app.kuwo.cn/api/service/...`），转换时原样保留，不做"修正"。

---

## 免责声明

所有脚本版权归原作者所有，此处仅作格式转换与镜像备份。请于下载后 24 小时内删除，勿用于商业用途。
