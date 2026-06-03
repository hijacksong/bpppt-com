import './style.css'

const scenarios = [
  { id: 'idea', tag: 'Idea → First BP', title: '我只有一个创业想法', pain: '不知道 BP 先写什么，容易做成产品介绍。', output: '10 页第一版 BP：问题、用户、方案、市场、商业模式、验证计划、团队与下一步。', cta: '生成第一版 BP 结构' },
  { id: 'fundraising', tag: 'Fundraising Deck', title: '我要见投资人融资', pain: '页面很多但故事不聚焦，投资人看不出为什么现在值得投。', output: '12-15 页投资人叙事：Traction、市场逻辑、增长模型、融资用途、Q&A。', cta: '准备投资人版本' },
  { id: 'review', tag: 'Deck Review', title: '我已有旧版 PPT', pain: '不知道哪页该删、哪页该补，视觉和逻辑都需要重构。', output: '结构评分、缺失页面、投资人质疑点、Before/After 改版建议。', cta: '诊断我的旧 BP' },
  { id: 'global', tag: 'Bilingual Deck', title: '我要做英文/出海版本', pain: '中文 BP 直译后不符合海外投资人的表达习惯。', output: '英文 Investor Deck、Founder email、One-pager 和海外路演讲稿。', cta: '生成英文版本' },
]

const industries = {
  ai: { name: 'AI 应用', metric: '数据来源、模型成本、落地场景、客户 ROI、数据壁垒', advice: 'AI 项目最容易被问：客户为什么不用现有工具？模型成本是否会吞掉毛利？是否有专有数据或工作流壁垒？', pages: ['Why now / AI 变革窗口', '客户 ROI 计算页', '数据壁垒与模型成本页'] },
  saas: { name: 'SaaS', metric: 'MRR/ARR、CAC、LTV、Churn、留存、销售周期', advice: 'SaaS Deck 要用指标证明可持续增长，不能只讲功能。重点补 MRR、留存、获客效率和销售流程。', pages: ['Traction 指标页', 'Unit economics 页', 'GTM 与销售漏斗页'] },
  consumer: { name: '消费品牌', metric: '人群洞察、渠道、复购、毛利、供应链', advice: '消费品牌需要说明为什么这个人群会持续购买、渠道如何扩大、毛利和供应链是否支撑规模化。', pages: ['用户人群洞察页', '渠道与复购数据页', '供应链与毛利页'] },
  hardware: { name: '硬件/机器人', metric: 'BOM、量产、交付周期、技术壁垒、售后成本', advice: '硬件/机器人项目不能只展示样机，要解释量产路径、成本下降、供应链风险和交付能力。', pages: ['量产路线图页', 'BOM 与毛利页', '技术壁垒页'] },
  local: { name: '本地生活', metric: '供需密度、履约效率、城市扩张模型、单城盈利', advice: '本地生活项目要证明单城模型跑通，再说明复制到更多城市的运营方法。', pages: ['单城模型页', '履约效率页', '城市扩张页'] },
  education: { name: '教育/内容', metric: '获客成本、完课率、续费率、内容生产体系、合规风险', advice: '教育/内容项目要避免只讲内容愿景，要证明获客、交付和续费模型。', pages: ['学习/内容效果页', '续费与留存页', '合规与交付页'] },
}

const scoreRules = {
  problem: { label: '痛点和目标用户是否具体', en: 'Problem clarity', weight: 14, question: '这个痛点是否真实、高频、强烈？', advice: '补充目标用户画像、具体使用场景、现有替代方案为什么不够好。' },
  solution: { label: '解决方案是否直接回应痛点', en: 'Solution fit', weight: 13, question: '你的方案是否真的解决了最痛的问题？', advice: '用“用户问题 → 产品动作 → 可衡量结果”的结构重写 Solution 页。' },
  market: { label: '市场规模和切入路径是否可信', en: 'Market logic', weight: 14, question: '市场规模是否从目标客户和可服务范围推导？', advice: '不要只放大市场数字，补 TAM/SAM/SOM、切入人群和扩张路径。' },
  traction: { label: '是否有用户、收入或验证数据', en: 'Traction evidence', weight: 16, question: '有没有证明客户真的需要它？', advice: '补用户数、收入、试点客户、转化率、留存、案例或访谈证据。' },
  business: { label: '收入模式和单位经济模型是否清楚', en: 'Business model', weight: 14, question: '如何赚钱、毛利如何、规模越大是否越好？', advice: '补价格、成本、毛利、LTV/CAC 或订单经济模型。' },
  gtm: { label: '获客和增长路径是否可执行', en: 'Go-to-market', weight: 12, question: '客户从哪里来，销售周期和渠道成本是多少？', advice: '补目标客户、渠道、销售漏斗、合作伙伴和 90 天获客计划。' },
  ask: { label: '融资金额、用途和里程碑是否明确', en: 'Fundraising ask', weight: 13, question: '这笔钱如何让公司到达下一轮关键里程碑？', advice: '补融资金额、18 个月用途、关键招聘、产品/营收里程碑。' },
}

const plans = [
  { id: 'free', name: '免费 BP 诊断', price: '¥0', desc: '适合先判断 BP 是否完整。', items: ['7 项投资人维度评分', '缺失模块提示', '行业指标建议', '推荐页序'], cta: '立即免费诊断', href: '#diagnosis' },
  { id: 'report', name: '完整诊断报告', price: '¥29', desc: '低价验证付费意愿，适合自己动手改。', items: ['逐页修改建议', '10 个投资人追问', '行业指标补全清单', '可复制 Markdown 报告'], cta: '解锁报告样例', href: '#report-sample', highlight: true },
  { id: 'outline', name: 'BP 大纲生成', price: '¥99', desc: '适合需要快速生成可编辑页文案的团队。', items: ['10-15 页推荐结构', '每页标题和要点', '中英双语标题', '路演讲稿草稿'], cta: '生成 BP 大纲', href: '#contact' },
  { id: 'review', name: 'Founder Review', price: '¥699/次', desc: '适合 2 周内要见投资人的团队。', items: ['整份 Deck 人工审阅', '页面删改优先级', '投资人 Q&A', '30 分钟反馈会议'], cta: '预约人工审阅', href: '#contact' },
]

const faqs = [
  ['免费诊断和 ¥29 完整报告有什么区别？', '免费诊断给你总体评分、缺失模块和推荐方向；完整报告会展开到逐页修改建议、投资人追问、行业指标清单和可复制的改版大纲。'],
  ['现在需要上传完整 PPT 吗？', '当前 MVP 先通过结构化问题生成诊断，避免用户一开始上传敏感资料。后续会支持 PPT/PDF 上传解析，并提供删除与保密设置。'],
  ['是否承诺融资成功？', '不承诺。BPPPT.COM 承诺提升材料的清晰度、完整度和投资人可读性，但融资结果取决于业务、市场、团队、数据和投资环境。'],
  ['适合哪些项目？', '尤其适合 AI、SaaS、消费品牌、硬件/机器人、本地生活、教育/内容等需要向投资人、合作方或创业营展示商业逻辑的项目。'],
  ['人工审阅多久交付？', '建议产品化为 24-48 小时交付文字审阅意见，紧急项目可加急。网站当前提供预约入口，后续接入订单系统。'],
  ['创业资料是否保密？', '页面明确以保密信息处理；成熟版本应支持不训练模型、自动删除、NDA、访问日志和账号权限。'],
]

const reportTabs = {
  summary: ['完整报告摘要', ['最大风险：市场规模页缺少从目标客户到可服务市场的计算路径。', '建议新增：Traction、Unit Economics、Go-to-market、Use of Funds 四页。', '建议删除：重复功能截图、空泛愿景、没有证据支撑的市场结论。']],
  pages: ['推荐页序', ['Problem → Solution → Why now → Market', 'Product → Traction → Business model → GTM', 'Team → Ask → Appendix / Q&A']],
  qa: ['投资人追问示例', ['为什么客户不用现有客服系统？', '模型成本如何随规模下降？', '你的数据壁垒和渠道壁垒分别是什么？', '这 500 万融资如何带来下一轮可验证指标？']],
  action: ['下一步行动清单', ['24 小时内补市场规模计算路径。', '把 18-24 页压缩成 12-15 页融资版。', '准备 10 个投资人 Q&A 和 1 页 One-pager。']],
}

const app = document.querySelector('#app')
let latestReport = ''
const e = (value) => String(value ?? '').replace(/[&<>'"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[ch])
const byId = id => document.getElementById(id)

function track(name, data = {}) {
  const events = JSON.parse(localStorage.getItem('bpppt_events') || '[]')
  events.push({ name, data, at: new Date().toISOString() })
  localStorage.setItem('bpppt_events', JSON.stringify(events.slice(-80)))
}

function renderHeader() {
  return `<header class="site-header"><nav class="nav-shell" aria-label="主导航">
    <a class="brand" href="#top" aria-label="BPPPT.COM 首页"><span class="brand-mark">BP</span><span><strong>BPPPT.COM</strong><small>Business Plan PPT</small></span></a>
    <div class="nav-links"><a href="#diagnosis">免费诊断</a><a href="#report-sample">报告样例</a><a href="#sample-case">案例</a><a href="#pricing">价格</a><a href="#faq">FAQ</a></div>
    <a class="nav-cta" href="#diagnosis" data-track="nav_diagnosis">免费诊断</a>
  </nav></header>`
}

function renderHero() {
  return `<section class="hero section-shell" id="top"><div class="hero-copy"><p class="eyebrow">BUSINESS PLAN PPT · INVESTOR-READY</p><h1>把你的商业计划 PPT，改成投资人愿意读下去的融资 Deck。</h1><p class="hero-lead">BPPPT.COM 用免费诊断、行业指标、投资人追问和专家审阅，帮创业者发现 BP 里的逻辑缺口，而不只是换一套漂亮模板。</p><div class="hero-actions"><a class="button primary" href="#diagnosis" data-track="hero_diagnosis">免费诊断我的 BP</a><a class="button ghost" href="#report-sample" data-track="hero_sample">查看完整报告样例</a></div><dl class="hero-stats"><div><dt>3min</dt><dd>得到第一版结构反馈</dd></div><div><dt>7</dt><dd>投资人判断维度</dd></div><div><dt>¥29</dt><dd>完整报告验证付费</dd></div></dl></div><div class="product-console" aria-label="BPPPT 报告预览"><div class="console-top"><span></span><span></span><span></span><strong>Deck Readiness Report</strong></div><div class="score-ring"><strong>68</strong><small>Needs investor proof</small></div><div class="console-list"><div><b>Market</b><em>缺少计算路径</em></div><div><b>Traction</b><em>证据不足</em></div><div><b>Ask</b><em>未绑定里程碑</em></div><div><b>Q&A</b><em>10 个追问</em></div></div><div class="mini-deck"><span>Next action</span><strong>补 4 页 · 删 6 页 · 重排 12 页</strong></div></div></section>`
}

function renderDiagnosis() {
  const industryOptions = Object.entries(industries).map(([key, item]) => `<option value="${key}">${item.name}</option>`).join('')
  const checks = Object.entries(scoreRules).map(([key, item]) => `<label><input type="checkbox" name="module" value="${key}" /> ${item.label}</label>`).join('')
  return `<section id="diagnosis" class="section-shell diagnosis-section"><div class="diagnosis-copy"><p class="eyebrow">Free diagnosis MVP</p><h2>先免费得到一个可行动的 BP 诊断结果。</h2><p>不强迫注册，不要求先上传敏感文件。你填写项目阶段、行业和已有内容后，系统会即时生成评分、缺口、推荐页序和下一步付费选项。</p><div class="research-note"><b>调研结论：</b>成熟竞品通常把“免费工具/模板”作为入口，再通过完整报告、AI 生成、人工审阅或订阅转化。BPPPT 的优势应放在“投资人逻辑诊断”。</div></div><form class="diagnosis-form" id="diagnosisForm"><div class="step-label">Step 1 · 项目背景</div><div class="form-grid"><label>项目名称<input name="project" placeholder="例如：AI 客服助手" required /></label><label>所属行业<select name="industry">${industryOptions}</select></label><label>当前阶段<select name="stage"><option value="idea">只有想法</option><option value="mvp">已有 MVP / Demo</option><option value="traction">已有用户或收入</option><option value="fundraising">正在准备融资</option></select></label><label>目标用途<select name="goal"><option value="first">做第一版商业计划 PPT</option><option value="investor">见投资人融资</option><option value="competition">路演比赛 / 创业营</option><option value="global">英文 / 出海版本</option></select></label><label>目前 BP 页数<input name="pages" type="number" min="0" max="80" value="0" /></label><label>融资目标<input name="raise" placeholder="例如：500 万人民币 / 暂无" /></label></div><fieldset><legend>Step 2 · 你当前材料里已经讲清楚了哪些内容？</legend><div class="form-checks">${checks}</div></fieldset><label>最大的困扰<textarea name="pain" rows="3" placeholder="例如：投资人总说故事不聚焦，不知道市场规模页怎么写"></textarea></label><button class="button primary wide" type="submit">生成免费诊断结果</button></form><article class="diagnosis-result" id="diagnosisResult" aria-live="polite" tabindex="-1"><p class="eyebrow">Your result</p><h3>填写左侧信息后，这里会生成即时诊断。</h3><p>结果会包含评分、缺失模块、行业建议、推荐页序、投资人追问和付费转化入口。</p></article></section>`
}

function calculateDiagnosis(form) {
  const data = new FormData(form)
  const modules = data.getAll('module')
  const missing = Object.keys(scoreRules).filter(key => !modules.includes(key))
  const industry = industries[data.get('industry')] || industries.ai
  const stage = data.get('stage')
  const goal = data.get('goal')
  const pages = Number(data.get('pages') || 0)
  let score = 34 + modules.reduce((sum, key) => sum + scoreRules[key].weight, 0)
  if (stage === 'mvp') score += 4
  if (stage === 'traction') score += 9
  if (stage === 'fundraising') score += 5
  if (goal === 'investor' && !modules.includes('ask')) score -= 10
  if (goal === 'global') score -= 3
  if (pages > 20) score -= 6
  if (pages > 35) score -= 8
  score = Math.max(22, Math.min(96, Math.round(score)))
  const tier = score >= 82 ? '接近 Investor-ready' : score >= 62 ? '需要补强后再见投资人' : '当前更适合先重构大纲'
  const recommended = goal === 'investor' || stage === 'fundraising' ? ['Problem', 'Solution', 'Why now', 'Market', 'Product', 'Traction', 'Business Model', 'GTM', 'Team', 'Ask'] : ['Problem', 'User', 'Solution', 'Market', 'Business Model', 'Validation Plan', 'Roadmap', 'Team']
  const questions = missing.slice(0, 4).map(key => scoreRules[key].question)
  if (!questions.length) questions.push('你最强的证据能否在前 5 页讲清楚？', '融资用途是否和下一轮里程碑强绑定？')
  return { data, modules, missing, industry, score, tier, recommended, questions, pages }
}

function buildMarkdownReport(result) {
  const project = e(result.data.get('project') || '你的项目')
  const missingLines = result.missing.length ? result.missing.map(key => `- ${scoreRules[key].en}：${scoreRules[key].advice}`).join('\n') : '- 暂无核心缺口，建议进入视觉表达和路演稿优化。'
  return `# ${project} BP 诊断报告\n\n评分：${result.score}/100（${result.tier}）\n\n## 行业建议\n${result.industry.name}：${result.industry.advice}\n\n重点指标：${result.industry.metric}\n\n## 缺失模块\n${missingLines}\n\n## 推荐页序\n${result.recommended.join(' → ')}\n\n## 投资人可能追问\n${result.questions.map(q => `- ${q}`).join('\n')}\n\n## 下一步\n1. 先补齐缺失模块。\n2. 将 BP 压缩为 10-15 页投资人版本。\n3. 解锁完整报告或预约 Founder Review。`
}

function handleDiagnosis(event) {
  event.preventDefault()
  const result = calculateDiagnosis(event.currentTarget)
  latestReport = buildMarkdownReport(result)
  const project = e(result.data.get('project') || '你的项目')
  const missingHtml = result.missing.length ? result.missing.map(key => `<li><b>${scoreRules[key].en}：</b>${scoreRules[key].advice}</li>`).join('') : '<li><b>核心结构较完整：</b>下一步建议优化视觉表达、路演节奏和关键证据位置。</li>'
  byId('diagnosisResult').innerHTML = `<p class="eyebrow">Free diagnosis result</p><div class="result-top"><strong>${result.score}</strong><span>/100</span><small>${result.tier}</small></div><h3>${project} 的 BP 初步诊断</h3><ul class="result-list"><li><b>行业：</b>${result.industry.name}。${result.industry.advice}</li><li><b>重点指标：</b>${result.industry.metric}</li><li><b>页数提醒：</b>${result.pages > 20 ? '当前页数偏多，建议压缩为 10-15 页投资人版本。' : '当前页数可控，建议优先补齐核心逻辑。'}</li><li><b>推荐页序：</b>${result.recommended.join(' → ')}</li></ul><div class="advice-block"><h4>建议优先补强</h4><ul>${missingHtml}</ul></div><div class="question-block"><h4>投资人可能追问</h4><ol>${result.questions.map(q => `<li>${e(q)}</li>`).join('')}</ol></div><div class="result-actions"><button class="button primary" id="copyReport" type="button">复制诊断报告</button><a class="button ghost" href="#pricing">查看付费方案</a><a class="button ghost" href="#contact">预约人工审阅</a></div>`
  byId('copyReport')?.addEventListener('click', copyReport)
  byId('diagnosisResult').focus({ preventScroll: true })
  byId('diagnosisResult').scrollIntoView({ behavior: 'smooth', block: 'start' })
  track('diagnosis_submit', { score: result.score, industry: result.industry.name, missing: result.missing })
}

async function copyReport() {
  try {
    await navigator.clipboard.writeText(latestReport)
    toast('已复制诊断报告，可直接粘贴到文档里继续修改。')
    track('copy_report')
  } catch {
    toast('复制失败：浏览器权限不足，请手动选择报告文本。')
  }
}

const scenarioPanel = s => `<p class="eyebrow light">Selected workflow</p><h3>${s.title}</h3><p>${s.output}</p><a class="button primary" href="#diagnosis">${s.cta}</a>`
function renderScenarios() {
  return `<section id="scenarios" class="section-shell split-section"><div class="section-heading"><p class="eyebrow">Start from real jobs</p><h2>与普通模板站不同：先问你要完成什么任务。</h2><p>创业者不是想下载一个漂亮 PPT，而是想讲清楚商业机会、获得反馈、见投资人、完成路演或争取资源。</p></div><div class="scenario-layout"><div class="scenario-grid">${scenarios.map((s, i) => `<button class="scenario-card ${i === 0 ? 'active' : ''}" aria-pressed="${i === 0}" data-scenario="${s.id}" type="button"><span>${s.tag}</span><strong>${s.title}</strong><small>${s.pain}</small></button>`).join('')}</div><article class="scenario-result" id="scenarioResult">${scenarioPanel(scenarios[0])}</article></div></section>`
}

function renderReportSample() {
  return `<section id="report-sample" class="section-shell report-section"><div class="section-heading"><p class="eyebrow">Paid report sample</p><h2>让用户清楚知道：付费后会拿到什么。</h2><p>付费转化的关键不是喊“专业”，而是把报告厚度、交付边界和下一步行动展示出来。</p></div><div class="report-card"><div class="report-score"><strong>68</strong><span>/100</span><small>示例：AI 客服项目 Seed Deck</small></div><div class="report-tabs" id="reportTabs"><button class="active" data-tab="summary">摘要</button><button data-tab="pages">页序</button><button data-tab="qa">追问</button><button data-tab="action">行动清单</button></div><div class="report-content" id="reportContent"></div></div></section>`
}
function updateReportTab(tab = 'summary') {
  const [title, items] = reportTabs[tab]
  byId('reportContent').innerHTML = `<h3>${title}</h3><ol>${items.map(item => `<li>${item}</li>`).join('')}</ol><a class="button primary" href="#pricing">¥29 解锁完整报告</a>`
  document.querySelectorAll('#reportTabs button').forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tab))
}

function renderCaseAndValue() {
  return `<section id="sample-case" class="section-shell case-section"><div class="section-heading"><p class="eyebrow">Before / After</p><h2>证明价值：从产品介绍，变成融资叙事。</h2></div><div class="case-grid"><article class="case-card before"><span>Before</span><h3>18 页产品介绍</h3><p>功能截图很多，缺少目标客户、为什么现在、市场切入、收入模型和融资用途。</p></article><article class="case-card after"><span>After</span><h3>12 页 Investor Deck</h3><p>重排故事线，新增 Traction、GTM、Unit Economics、Use of Funds，并生成投资人 Q&A。</p></article></div></section><section id="value" class="dark-band"><div class="section-shell dark-content"><div><p class="eyebrow light">Differentiated value</p><h2>核心差异：模板 + AI 生成 + 投资人逻辑诊断 + 专家审阅。</h2><p>竞品常见方向包括模板库、AI 生成器、商业计划软件和融资顾问。BPPPT 的定位不是替代所有工具，而是聚焦在“创业者 BP 能不能被投资人快速理解”。</p></div><div class="capability-grid">${['任务入口而非模板分类','行业化指标而非通用页型','诊断报告而非只给设计稿','可升级专家审阅'].map((t,i)=>`<article><span>0${i+1}</span><strong>${t}</strong><p>${['先判断用户要完成什么融资任务，再推荐页序。','AI、SaaS、消费、硬件等行业使用不同指标。','把问题、建议和追问写清楚，让用户能行动。','高意向用户可进入人工审阅和定制 Deck。'][i]}</p></article>`).join('')}</div></div></section>`
}

function renderIndustries() {
  return `<section class="section-shell industries"><div class="section-heading"><p class="eyebrow">Industry intelligence</p><h2>行业化 BP 结构，而不是一套模板套所有项目。</h2></div><div class="industry-grid">${Object.entries(industries).map(([key, item]) => `<article><h3>${item.name}</h3><p>${item.metric}</p><a href="#diagnosis" data-industry="${key}">诊断 ${item.name} BP →</a></article>`).join('')}</div></section>`
}

function renderReviewTool() {
  const checks = Object.entries(scoreRules).map(([key, item]) => `<label class="check-row"><input type="checkbox" name="score" value="${key}" checked /> <span>${item.label}</span></label>`).join('')
  return `<section id="review" class="section-shell review-section"><div class="review-copy"><p class="eyebrow">Interactive demo</p><h2>BP Deck Readiness 诊断演示</h2><p>取消某个维度后，系统会显示对应的融资材料风险。这个演示用来证明 BPPPT 检查的是商业逻辑，不只是视觉。</p></div><div class="review-tool"><div class="review-score"><strong id="scoreValue">100</strong><span>/100</span><small id="scoreLabel">Investor-ready</small></div><div class="checklist">${checks}</div><div class="missing-box" id="missingBox">结构完整。下一步可以优化视觉表达和路演讲稿。</div></div></section>`
}

function renderPricingFaqContact() {
  return `<section id="pricing" class="section-shell pricing-section"><div class="section-heading"><p class="eyebrow">Choose your next step</p><h2>把网站做成可收费产品，而不是只做展示页。</h2><p>免费诊断降低试用门槛，低价报告验证付费意愿，¥99 文案生成承接自助用户，¥699 人工审阅承接要融资的高意向用户。</p></div><div class="pricing-grid">${plans.map(p => `<article class="price-card ${p.highlight ? 'highlight' : ''}"><p>${p.name}</p><h3>${p.price}</h3><small>${p.desc}</small><ul>${p.items.map(i => `<li>${i}</li>`).join('')}</ul><a class="button ${p.highlight ? 'primary' : 'ghost'}" href="${p.href}" data-plan="${p.id}">${p.cta}</a></article>`).join('')}</div><div class="revenue-note"><strong>商业闭环：</strong>免费诊断 → ¥29 完整报告 → ¥99 BP 大纲/页文案 → ¥699 人工审阅 → 定制融资 Deck / 孵化器批量服务。</div></section><section id="faq" class="section-shell faq-section"><div class="section-heading"><p class="eyebrow">FAQ</p><h2>把用户下单前的顾虑提前讲清楚。</h2></div><div class="faq-list">${faqs.map(([q,a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div></section><section id="contact" class="section-shell contact-card"><div><p class="eyebrow">BPPPT.COM</p><h2>预约 Founder Review 或接入真实支付。</h2><p>当前版本已具备前端诊断和报告转化路径。下一步建议接入登录、报告保存、支付链接、PPT 上传解析和审阅订单。</p><form class="lead-form" id="leadForm"><input name="contact" placeholder="留下邮箱 / 微信，接收完整报告样例" required /><select name="need"><option>我想解锁 ¥29 完整报告</option><option>我想生成 ¥99 BP 大纲</option><option>我想预约 ¥699 人工审阅</option><option>我想做定制融资 Deck</option></select><button class="button primary" type="submit">提交预约</button></form></div><a class="button ghost" href="mailto:hello@bpppt.com?subject=BPPPT.COM%20BP%20诊断咨询">邮件联系</a></section>`
}

function renderFooter() {
  return `<a class="mobile-sticky-cta" href="#diagnosis">免费诊断 BP</a><div class="toast" id="toast" role="status" aria-live="polite"></div><footer class="site-footer"><p>© ${new Date().getFullYear()} BPPPT.COM · Business Plan PPT</p><p>Free Diagnosis → Paid Report → Expert Review</p></footer>`
}

app.innerHTML = `${renderHeader()}<main>${renderHero()}${renderDiagnosis()}${renderScenarios()}${renderReportSample()}${renderCaseAndValue()}${renderIndustries()}${renderReviewTool()}${renderPricingFaqContact()}</main>${renderFooter()}`

function updateScore() {
  const checked = [...document.querySelectorAll('input[name="score"]:checked')]
  const missing = Object.keys(scoreRules).filter(key => !checked.some(input => input.value === key))
  const total = Object.values(scoreRules).reduce((s, r) => s + r.weight, 0)
  const score = Math.round(checked.reduce((s, input) => s + scoreRules[input.value].weight, 0) / total * 100)
  byId('scoreValue').textContent = score
  byId('scoreLabel').textContent = score >= 84 ? 'Investor-ready' : score >= 50 ? 'Needs improvement' : 'High risk deck'
  byId('missingBox').innerHTML = missing.length ? `<strong>建议补强：</strong>${missing.map(key => scoreRules[key].en).join('、')}。这些缺口会影响投资人快速判断项目价值。` : '结构完整。下一步可以优化视觉表达和路演讲稿。'
}

function toast(message) {
  const el = byId('toast')
  el.textContent = message
  el.classList.add('show')
  setTimeout(() => el.classList.remove('show'), 2600)
}

document.querySelectorAll('.scenario-card').forEach(card => card.addEventListener('click', () => {
  const selected = scenarios.find(s => s.id === card.dataset.scenario) || scenarios[0]
  document.querySelectorAll('.scenario-card').forEach(c => { c.classList.toggle('active', c === card); c.setAttribute('aria-pressed', c === card ? 'true' : 'false') })
  byId('scenarioResult').innerHTML = scenarioPanel(selected)
  track('scenario_select', { id: selected.id })
}))
document.querySelectorAll('input[name="score"]').forEach(input => input.addEventListener('change', updateScore))
byId('diagnosisForm').addEventListener('submit', handleDiagnosis)
byId('reportTabs').addEventListener('click', event => { if (event.target.matches('button')) updateReportTab(event.target.dataset.tab) })
byId('leadForm').addEventListener('submit', event => { event.preventDefault(); const data = new FormData(event.currentTarget); localStorage.setItem('bpppt_lead', JSON.stringify({ contact: data.get('contact'), need: data.get('need'), at: new Date().toISOString() })); toast('已记录你的预约信息。正式上线后可接入邮件/表单/CRM。'); track('lead_submit', { need: data.get('need') }) })
document.querySelectorAll('[data-track]').forEach(el => el.addEventListener('click', () => track(el.dataset.track)))
document.querySelectorAll('[data-plan]').forEach(el => el.addEventListener('click', () => track('pricing_click', { plan: el.dataset.plan })))
document.querySelectorAll('[data-industry]').forEach(el => el.addEventListener('click', () => { document.querySelector('[name="industry"]').value = el.dataset.industry }))
updateReportTab('summary')
updateScore()
