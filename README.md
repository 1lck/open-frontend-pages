# Open Frontend Pages

Open Frontend Pages 是一个开源前端页面与模板的精选注册表。项目会记录每个模板的来源、许可证、技术栈、截图、下载包和导入状态，方便你快速找到可以预览、复用、二次改造的前端页面代码。

简单说，它不是组件演示合集，而是面向真实产品场景的页面库：后台仪表盘、登录页、电商流程、营销落地页、作品集、博客、AI 控制台、定价页、设置页等。每个可导入模板都需要有清晰的上游来源和允许再分发的许可证。

## English summary

Open Frontend Pages is a curated registry of open-source frontend pages and templates that are safe to preview, remix, and reuse. It tracks source projects, licenses, screenshots, tech stacks, downloads, and import status so builders can find reusable page code without guessing whether redistribution is allowed.

## 这个项目解决什么问题

很多开源前端模板看起来能用，但真正复用前通常要确认几件事：

- 代码来源是否明确。
- 是否有许可证。
- 许可证是否允许再分发和二次改造。
- 是否依赖后端、API、数据库或第三方服务。
- 是否能直接预览和下载。
- 是否适合真实产品场景，而不是只展示零散组件。

Open Frontend Pages 把这些信息整理成统一的 registry，并把符合条件的模板源码导入到 `templates/`，同时提供截图和 zip 下载包。

## 收录范围

项目主要收录两类页面：

- B2B 页面：Dashboard、Admin、CRM、Analytics、Settings、Billing、AI Console、数据密集型工作台等。
- B2C 页面：Landing Page、Pricing、E-commerce、Portfolio、Blog、Auth、Profile、Onboarding 等。

可导入模板必须使用兼容再分发的许可证，例如：

- MIT
- Apache-2.0
- BSD-2-Clause
- BSD-3-Clause
- ISC
- CC0-1.0

## 不收录为可导入模板的内容

以下项目可以被记录为候选或直接跳过，但不会作为可复用模板导入：

- 没有许可证的项目。
- GPL、LGPL、AGPL 等不适合作为 importable template 的项目。
- 商业模板的免费版本，但条款不允许再分发。
- 仅允许个人使用的模板。
- 专有产品源码或专有素材。
- 依赖真实后端、数据库、支付、认证或外部服务且无法安全剥离的项目。

## 仓库结构

```txt
apps/web/                 # Next.js 预览站点，静态导出到 Cloudflare Pages
registry/templates/       # 模板元数据，每个模板一个 JSON 文件
templates/                # 已导入模板源码，仅包含允许再分发的内容
apps/web/public/          # 截图和下载包等公开静态资源
scripts/                  # registry、模板包、许可证和构建校验脚本
docs/                     # 许可证策略、导入流程、自动化流程和部署说明
```

## 本地运行

安装依赖：

```bash
npm install
```

启动预览站点：

```bash
npm run dev
```

默认会启动 Next.js 开发服务。项目根目录的 `package.json` 已经把入口指向 `apps/web`。

## 常用命令

校验 registry 元数据：

```bash
npm run validate:registry
```

校验某个已导入模板：

```bash
npm run validate:template -- <slug>
```

打包某个模板为 zip：

```bash
npm run package:template -- <slug>
```

查看自动化导入进度：

```bash
npm run automation:status
```

运行完整校验：

```bash
npm run validate:all
```

构建静态站点：

```bash
npm run build
```

部署到 Cloudflare Pages：

```bash
npm run deploy:cf
```

## 添加候选模板

在 `registry/templates/` 下创建一个 JSON 文件，例如：

```json
{
  "name": "Example SaaS Dashboard",
  "slug": "example-saas-dashboard",
  "category": "dashboard",
  "audience": "b2b",
  "source": "https://github.com/example/project",
  "repoPath": null,
  "download": null,
  "license": "MIT",
  "imported": false,
  "tech": ["react", "tailwind"],
  "tags": ["saas", "analytics", "settings"],
  "preview": null,
  "screenshot": null
}
```

然后运行：

```bash
npm run validate:registry
```

候选模板可以暂时不导入源码，但必须有明确来源和准确许可证。许可证不适合再分发时，模板只能保留为 registry-only 候选，不应复制源码到 `templates/`。

## 导入模板源码

导入前先阅读：

- [许可证策略](docs/license-policy.md)
- [导入流程](docs/import-workflow.md)

导入时需要保留上游信息：

```txt
templates/<slug>/
  source.json
  LICENSE.original
  NOTICE.md
  src/
```

同时需要生成：

```txt
apps/web/public/screenshots/<slug>.png
apps/web/public/downloads/<slug>.zip
```

截图必须是 `2880x1440` 的 PNG，这样才能在预览卡片中以 `2:1` 比例稳定展示，不出现左右留白或上下黑边。

## 自动化导入

这个项目支持循环式 AI-assisted import。自动化每次应该只导入至多一个新模板，保持提交范围清晰，方便 review、回滚和部署验证。

相关说明见：

- [自动化流程](docs/automation-workflow.md)
- [导入流程](docs/import-workflow.md)
- [许可证策略](docs/license-policy.md)

当前的 50 个已导入模板只是第一个里程碑，不是项目上限。只要许可证、来源和复用质量符合要求，registry 可以继续扩展。

## 线上站点

Cloudflare Pages:

```txt
https://open-frontend-pages.pages.dev/
```

## 贡献原则

贡献模板时，请优先保证：

- 来源可追踪。
- 许可证准确。
- 可导入源码只包含允许再分发的内容。
- 已剥离真实后端、数据库、支付、认证或外部服务耦合。
- 截图、下载包、metadata 和校验脚本保持一致。

如果不确定许可证是否允许导入，先只添加候选 registry 条目，不要复制源码。
