# BPPPT.COM 深入调研与产品化策略

## 调研采样

本轮调研查看了 Slidebean、Beautiful.ai、Upmetrics、Storydoc 等 Pitch Deck / Business Plan / AI Presentation 相关产品的公开页面与定价信息；同时结合当前代码审计与用户付费心理进行产品化设计。

可观察到的竞品方向：

- **Slidebean**：AI Pitch Deck、Pitch Deck Reviewer、模板、设计服务、财务模型和融资服务组合；公开页面可见低价订阅与高价服务并存。
- **Beautiful.ai**：强调 AI Presentation、Smart Slides、品牌控制和团队工作流，更偏演示文稿生产力工具。
- **Upmetrics**：Business plan builder、Financial forecasting、AI plan generator、AI pitch deck generator，强调商业计划与财务预测一体化。
- **Storydoc**：互动 Pitch Deck 模板，强调可定制、互动、驱动结果。
- **Canva/模板市场**：强在模板数量与视觉设计，但对投资人逻辑诊断和行业指标补全较弱。

## 核心结论

1. **用户不是为“PPT 模板”付费，而是为降低融资沟通风险付费。**
   创业者真正担心的是：讲不清楚、被投资人问倒、材料不专业、约会前时间不够。

2. **成熟商业路径通常是免费入口 + 低价报告 + 中价自助工具 + 高价服务。**
   BPPPT.COM 不应只卖模板，应形成：免费诊断 → ¥29 完整报告 → ¥99 BP 大纲/页文案 → ¥699 Founder Review → 定制 Deck。

3. **BPPPT 的差异化应聚焦“投资人视角诊断”。**
   模板和 AI 生成容易同质化；行业指标、投资人追问、页序重构、专家审阅更难复制。

4. **信任边界必须说清楚。**
   不能承诺融资成功；应承诺提升材料清晰度、完整度和投资人可读性，并说明隐私、保密、交付范围。

## 本轮已落地到网站的改造

- Hero 从“上传或填写 BP”进一步改为“把商业计划 PPT 改成投资人愿意读下去的融资 Deck”。
- 诊断维度从 6 项扩展到 7 项，新增 Go-to-market。
- 诊断结果新增：行业建议、重点指标、页数提醒、推荐页序、优先补强建议、投资人追问、复制诊断报告。
- 增加报告样例 tabs：摘要、页序、追问、行动清单。
- 增加 ¥99 BP 大纲生成套餐，使漏斗完整。
- 增加 FAQ，解决上传、隐私、承诺、交付等付费前顾虑。
- 增加留资表单和本地事件记录，为后续接入 CRM/支付做准备。
- 增加 SEO/OG/JSON-LD 元信息与 noscript 内容。
- 增加移动端 sticky CTA，提高移动端转化入口可见性。

## 下一步建议

1. 接入真实支付：Stripe Payment Link / Lemon Squeezy / Gumroad / 支付宝微信二维码。
2. 接入后端：保存诊断报告、留资、订单和审阅状态。
3. 接入 PPT/PDF 上传解析：提取页标题、文本、页数和关键词。
4. 接入 AI：基于诊断结果生成完整 BP 大纲、每页文案和投资人 Q&A。
5. 绑定正式域名 BPPPT.COM，并配置 CNAME、HTTPS、OG 图片。
6. 做 3 个真实案例：AI SaaS、消费品牌、硬件/机器人，展示真实 Before/After 页序。
