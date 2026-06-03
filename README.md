# BPPPT.COM — Business Plan PPT

BPPPT.COM 的官网落地页项目，域名含义：**Business Plan PPT**。

## 项目定位

面向创业者、咨询顾问、企业战略团队和融资路演场景。新版定位不是普通 PPT 模板站，而是：

> 创业者的一站式 Business Plan PPT 工作台：免费诊断 → 付费报告 → BP 大纲/页文案 → 专家审阅 → 定制融资 Deck。

## 本轮成熟化改造

本轮围绕“客户是否愿意主动付费”做了竞品调研、产品化分析和网站改版。核心方向：用户不是为 PPT 模板付费，而是为降低融资沟通风险付费。

已实现：

- 投资人视角 Hero：强调把 BP 改成投资人愿意读下去的融资 Deck。
- 免费 BP 诊断工具：7 项投资人维度评分。
- 即时诊断结果：评分、行业建议、重点指标、页数提醒、推荐页序、优先补强建议、投资人追问。
- 复制诊断报告：生成 Markdown 风格报告，方便用户继续修改。
- 报告样例 Tabs：摘要、页序、追问、行动清单。
- 任务场景入口：第一版 BP、融资 Deck、旧 PPT 诊断、英文/出海版。
- Before / After 案例：从产品介绍到融资叙事。
- 行业化结构：AI、SaaS、消费品牌、硬件/机器人、本地生活、教育/内容。
- 付费阶梯：¥0 免费诊断、¥29 完整报告、¥99 BP 大纲生成、¥699 Founder Review。
- FAQ：解释上传、隐私、交付、是否承诺融资成功等关键顾虑。
- 留资/预约表单：为后续 CRM、邮件、支付或订单系统预留。
- SEO/分享优化：description、keywords、canonical、Open Graph、Twitter Card、JSON-LD、noscript 内容。
- 移动端 sticky CTA：移动端保留“免费诊断 BP”入口。

## 差异化价值

- 从“模板下载”升级为“创业任务入口”。
- 从“视觉美化”升级为“商业逻辑诊断”。
- 从“通用模板”升级为“行业化指标”。
- 从“单一 PPT”升级为“融资材料包”。
- 从“低价模板”升级为“产品阶梯 + 专家服务”。

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
docs/deep-research-and-strategy.md
```
