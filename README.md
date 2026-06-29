# CodeX/Codex 图文操作手册

这是达芙妮内部使用的 CodeX/Codex 静态教程站点，面向需要从 0 到 1 了解和使用 Codex 的同事，也方便后续维护人继续补充截图、案例和公司落地说明。

页面以 ChatGPT 登录作为默认推荐路径，同时补充 API Key 登录作为另一种使用方式。手册重点是让阅读者先知道“怎么开始、选哪条路径、每个模块能做什么、哪些地方需要注意安全和合规”。

## 当前内容

- 使用前提醒：地区、网络、账号环境、数据安全和合规前提。
- Codex 两种登录方式：ChatGPT 登录和 API Key 登录。
- 速览：按章节快速跳转。
- 账号准备：Gmail、美国区 Apple Account、手机号等准备说明。
- 注册与订阅 ChatGPT：注册入口、套餐提醒、ChatGPT 订阅路径和 API Key 路径对比。
- 公司/团队落地：ChatGPT Business/Enterprise、OpenAI API Platform、内部 AI 网关/API 代理的适用场景。
- 下载 Codex：中文 Codex 页面、桌面端下载、两种登录步骤截图。
- 入门使用：工作空间、功能模块、权限、模型、额度、参考资料、控制与引导、计划模式、记忆系统、插件、Skills、MCP。
- 进阶使用：模板化、合规化、自动化等可复用工作流思路。

## 文件结构

```text
.
├─ index.html                  # 页面结构与正文内容
├─ README.md                   # 项目说明
├─ AGENTS.md                   # Codex 维护约定
├─ assets/
│  ├─ css/
│  │  └─ styles.css            # 主题、布局、卡片、图片、左侧目录等样式
│  ├─ js/
│  │  └─ main.js               # 导航高亮、图片新窗口打开、返回顶部等交互
│  └─ img/
│     ├─ backgrounds/          # 页面背景图
│     ├─ brand/                # 品牌 Logo 和 Codex Logo
│     ├─ screenshots/          # 正式使用的页面截图
│     └─ temp/                 # 临时或待整理截图
├─ picture/                    # 原始素材，便于后续替换
├─ backup/                     # 本地备份，不上传 GitHub
└─ backups/                    # 本地备份，不上传 GitHub
```

## 本地预览

无需构建工具，直接用浏览器打开：

```text
D:\CodeX Space\Codex使用教程\index.html
```

页面使用 Bootstrap 和 Bootstrap Icons CDN。断网时正文仍可阅读，但部分 Bootstrap 样式或图标可能降级。

## 维护约定

- 主题色、背景、卡片和标题样式主要在 `assets/css/styles.css` 维护。
- 页面交互主要在 `assets/js/main.js` 维护。
- 正式截图优先放在 `assets/img/screenshots/`；临时截图可先放 `assets/img/temp/`，确认后再整理。
- 页面图片已支持点击后在新窗口查看原图。
- 桌面宽屏会显示左侧浮动目录，并随滚动高亮当前章节；移动端以顶部导航为主。
- `AGENTS.md` 中已约定：Codex 简介内容固定，后续维护页面时不再更改；入门使用模块新增图片、卡片样式和尺寸应与现有页面保持一致。
- 涉及价格、套餐权益、模型名称、下载入口和功能权限时，页面应保持“以官方页面和公司通知为准”的口径。
- 截图前请检查是否包含客户信息、合同金额、员工隐私、账号、Token、API Key 等敏感内容。

## 发布说明

当前仓库：`git@github.com:ITYf/codex-tutorial.git`

`backup/` 和 `backups/` 为本地历史备份目录，已加入 `.gitignore`，不参与上传。

如需启用 GitHub Pages，可在 GitHub 仓库的 `Settings -> Pages` 中选择发布分支和根目录。启用后再将生成的 Pages 链接补充到这里。