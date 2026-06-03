# BPPPT.COM — Business Plan PPT

BPPPT.COM 的官网落地页项目，域名含义：**Business Plan PPT**。

## 项目定位

面向创业者、咨询顾问、企业战略团队和融资路演场景。新版定位不是普通 PPT 模板站，而是：

> 创业者的一站式 Business Plan PPT 工作台：免费诊断 → 付费报告 → 专家审阅 → 定制融资 Deck。

## 差异化价值

- 从“模板下载”升级为“创业任务入口”：第一版 BP、融资 Deck、旧 PPT 诊断、英文/出海版本。
- 从“视觉美化”升级为“商业逻辑诊断”：Problem、Market、Traction、Business Model、Fundraising Ask。
- 从“通用模板”升级为“行业化结构”：AI、SaaS、消费品牌、硬件、本地生活、教育等。
- 从“单一 PPT”升级为“融资材料包”：Pitch Deck、One-pager、投资人邮件、路演稿、Q&A。
- 从“低价模板”升级为“产品阶梯”：免费诊断、¥29 完整报告、¥699 Founder Review、定制服务、机构合作。

## 已实现交互

- 免费 BP 诊断表单：用户填写项目、行业、阶段、用途、页数、融资目标和已具备内容。
- 即时诊断结果：自动生成评分、行业建议、缺失模块、页数提醒、推荐页序和付费转化入口。
- 场景选择卡片：根据用户创业任务切换推荐工作流。
- BP Deck Readiness 诊断演示：勾选/取消关键维度，动态更新分数和缺口建议。
- 报告样例：展示 ¥29 完整报告可能包含的交付内容。
- Before / After 案例：展示从产品介绍到融资叙事的转化。
- 用户导向套餐：免费诊断、完整诊断报告、Founder Review。

## 技术栈

- Vite
- Vanilla JavaScript
- HTML/CSS
- GitHub Pages

## 本地运行

```bash
cd /f/projects/bpppt-com
npm install
npm run dev -- --host 127.0.0.1
```

浏览器打开：

```text
http://127.0.0.1:5173/
```

## 生产构建

```bash
npm run build
```

构建产物会生成到：

```text
dist/
```

## 部署

```bash
npm run deploy
```

当前 GitHub Pages 地址：

```text
https://hijacksong.github.io/bpppt-com/
```

## 主要文件

```text
index.html
src/main.js
src/style.css
vite.config.js
docs/product-strategy.md
```
