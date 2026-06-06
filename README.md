# Open Frontend Pages

[![English](https://img.shields.io/badge/README-English-0f6f5c?style=for-the-badge)](README.en.md)

Open Frontend Pages 是一个精选的开源前端页面与模板注册表，收录可预览、可下载、可二次改造的前端页面代码。

它关注真实产品页面，而不是零散组件演示。每个条目都会记录上游来源、许可证、技术栈、截图、下载包和导入状态，方便开发者在复用代码前先确认来源和授权是否清晰。

## 这个项目是什么

很多开源前端模板看起来可以直接拿来用，但复用前常常需要额外确认：

- 来源项目是否明确。
- 许可证是否允许再分发和二次改造。
- 是否依赖真实后端、数据库、支付、认证或外部服务。
- 是否有可预览的页面、截图和下载包。

Open Frontend Pages 把这些信息整理成统一 registry，并把符合条件的模板源码导入到仓库中，让这些页面更容易被检索、预览和安全复用。

## 收录方向

项目优先收录真实产品场景里的页面：

- B2B：Dashboard、Admin、CRM、Analytics、Settings、Billing、AI Console、数据密集型工作台等。
- B2C：Landing Page、Pricing、E-commerce、Portfolio、Blog、Auth、Profile、Onboarding 等。

可导入模板需要使用允许再分发的许可证，例如 MIT、Apache-2.0、BSD、ISC 或 CC0。

## 不会导入的内容

以下内容不会作为可复用模板导入：

- 没有许可证的项目。
- GPL、LGPL、AGPL 等不适合作为 importable template 的项目。
- 不允许再分发的商业模板免费版。
- 仅允许个人使用的模板。
- 专有产品源码或专有素材。
- 无法剥离真实后端、数据库、支付、认证或外部服务耦合的项目。

## 仓库结构

```txt
apps/web/                 # 预览站点
registry/templates/       # 模板元数据
templates/                # 已导入模板源码
apps/web/public/          # 截图和下载包
scripts/                  # 校验与打包脚本
docs/                     # 许可证、导入、部署和自动化说明
```

## 模板导入要求

导入模板时需要保留上游信息：

```txt
templates/<slug>/
  source.json
  LICENSE.original
  NOTICE.md
  src/
```

同时需要提供：

```txt
apps/web/public/screenshots/<slug>.png
apps/web/public/downloads/<slug>.zip
```

截图必须是 `2880x1440` 的 PNG，以保证预览卡片稳定填满。

更详细的规则见：

- [许可证策略](docs/license-policy.md)
- [导入流程](docs/import-workflow.md)
- [自动化流程](docs/automation-workflow.md)

## 线上预览

Cloudflare Pages:

```txt
https://open-frontend-pages.pages.dev/
```
