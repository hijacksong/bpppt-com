import './style.css'

const scenarios = [
  {
    id: 'idea',
    title: '我只有一个创业想法',
    tag: 'Idea → First BP',
    pain: '不知道商业计划 PPT 先写什么，容易做成产品介绍。',
    result: '输出 10 页第一版 BP：问题、用户、方案、市场、商业模式、下一步验证计划。',
    cta: '生成第一版 BP 结构',
  },
  {
    id: 'fundraising',
    title: '我要见投资人融资',
    tag: 'Fundraising Deck',
    pain: '页面很多但故事不聚焦，投资人看不出为什么现在值得投。',
    result: '输出 12-15 页投资人叙事：Traction、市场逻辑、增长模型、融资用途和 Q&A。',
    cta: '准备投资人版本',
  },
  {
    id: 'review',
    title: '我已有旧版 PPT',
    tag: 'Deck Review',
    pain: '不知道哪页该删、哪页该补，视觉和逻辑都需要重构。',
    result: '获得结构评分、缺失页面、投资人质疑点、Before/After 改版建议。',
    cta: '诊断我的旧 BP',
  },
  {
    id: 'global',
    title: '我要做英文/出海版本',
    tag: 'Bilingual Deck',
    pain: '中文 BP 直译后不符合海外投资人的表达习惯。',
    result: '输出英文 Investor Deck、Founder email、One-pager 和海外路演讲稿。',
    cta: '生成英文版本',
  },
]

const capabilities = [
  ['01', '不是模板堆砌', '先根据阶段、行业、用途生成商业叙事，再匹配 PPT 页面结构。'],
  ['02', '投资人视角诊断', '检查 Problem、Market、Traction、Business Model、Ask 等关键维度是否完整。'],
  ['03', '行业化指标提示', 'SaaS 看 MRR/Churn，消费品牌看复购/渠道，硬件看供应链/量产节奏。'],
  ['04', '融资材料包', '不仅有 Deck，还能延展 One-pager、投资人邮件、路演稿和 Q&A。'],
]

const industryDecks = [
  ['AI 应用', '数据壁垒、模型成本、落地场景、ROI'],
  ['SaaS', 'MRR、CAC、LTV、留存、销售周期'],
  ['消费品牌', '人群洞察、渠道、复购、毛利、供应链'],
  ['硬件/机器人', 'BOM、量产、交付周期、技术壁垒'],
  ['本地生活', '供需密度、履约效率、城市扩张模型'],
  ['教育/内容', '获客成本、完课率、续费、内容生产体系'],
]

const pricing = [
  {
    name: '免费诊断',
    price: '¥0',
    desc: '适合第一次了解自己的 BP 是否完整。',
    items: ['6 项结构评分', '缺失模块提示', '推荐下一步', '融资材料清单'],
    action: '立即免费诊断',
    href: '#diagnosis',
  },
  {
    name: '完整诊断报告',
    price: '¥29',
    desc: '低价解锁完整报告，验证用户付费意愿。',
    items: ['详细页序建议', '投资人追问清单', '每页修改优先级', '一键生成 BP 大纲'],
    action: '解锁报告样例',
    href: '#report-sample',
    highlight: true,
  },
  {
    name: 'Founder Review',
    price: '¥699/次',
    desc: '适合 2 周内要见投资人的团队。',
    items: ['整份 Deck 人工审阅', '页面删改建议', '投资人 Q&A', '30 分钟反馈会议'],
    action: '预约人工审阅',
    href: '#contact',
  },
]

const scoreRules = {
  problem: ['Problem clarity', '痛点是否具体，用户是否清晰'],
  solution: ['Solution strength', '方案是否直接回应痛点'],
  market: ['Market logic', '市场规模和切入路径是否可信'],
  traction: ['Traction evidence', '是否有验证数据、客户、收入或里程碑'],
  business: ['Business model', '收入模式、单位经济模型是否说得清'],
  ask: ['Fundraising ask', '融资金额、用途、里程碑是否明确'],
}

const industryAdvice = {
  ai: ['AI 应用', '重点补充：数据来源、模型成本、可替代方案、客户 ROI、落地场景的购买决策链。'],
  saas: ['SaaS', '重点补充：MRR/ARR、CAC、LTV、Churn、留存曲线、销售周期和客户分层。'],
  consumer: ['消费品牌', '重点补充：用户画像、渠道效率、复购率、毛利率、供应链和品牌差异。'],
  hardware: ['硬件/机器人', '重点补充：BOM、量产计划、供应链风险、交付周期、技术壁垒和售后成本。'],
  local: ['本地生活', '重点补充：供需密度、履约效率、城市复制模型、单城盈利和运营 SOP。'],
  education: ['教育/内容', '重点补充：获客成本、完课率、续费率、内容生产体系和合规风险。'],
}

function renderScenarioCards() {
  return scenarios.map((item, index) => `
    <button class="scenario-card ${index === 0 ? 'active' : ''}" data-scenario="${item.id}" type="button">
      <span>${item.tag}</span>
      <strong>${item.title}</strong>
      <small>${item.pain}</small>
    </button>
  `).join('')
}

function renderScenarioPanel(item = scenarios[0]) {
  return `
    <p class="eyebrow">Selected workflow</p>
    <h3>${item.title}</h3>
    <p class="muted">${item.result}</p>
    <a class="button primary" href="#diagnosis">${item.cta}</a>
  `
}

function renderScoreChecklist() {
  return Object.entries(scoreRules).map(([key, [, label]]) => `
    <label class="check-row">
      <input type="checkbox" name="score" value="${key}" checked />
      <span>${label}</span>
    </label>
  `).join('')
}

const app = document.querySelector('#app')

app.innerHTML = `
  <header class="site-header">
    <nav class="nav-shell" aria-label="主导航">
      <a class="brand" href="#top" aria-label="BPPPT.COM 首页">
        <span class="brand-mark">BP</span>
        <span><strong>BPPPT.COM</strong><small>Business Plan PPT</small></span>
      </a>
      <div class="nav-links">
        <a href="#diagnosis">免费诊断</a>
        <a href="#sample-case">案例</a>
        <a href="#value">价值</a>
        <a href="#pricing">方案</a>
        <a href="#contact">联系</a>
      </div>
      <a class="nav-cta" href="#diagnosis">免费诊断</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero section-shell">
      <div class="hero-copy">
        <p class="eyebrow">BUSINESS PLAN PPT · FOR FOUNDERS</p>
        <h1>上传或填写你的 BP，先找出投资人最可能质疑的问题。</h1>
        <p class="hero-lead">BPPPT.COM 不只是 PPT 模板站，而是帮创业者把商业想法、行业指标、融资叙事和投资人 Q&A 转成可展示、可融资、可复用的 Business Plan PPT。</p>
        <div class="hero-actions">
          <a class="button primary" href="#diagnosis">免费生成 BP 诊断</a>
          <a class="button ghost" href="#report-sample">查看报告样例</a>
        </div>
        <dl class="hero-stats" aria-label="网站价值">
          <div><dt>3min</dt><dd>得到第一版结构反馈</dd></div>
          <div><dt>6</dt><dd>投资人判断维度</dd></div>
          <div><dt>¥29</dt><dd>低价完整报告入口</dd></div>
        </dl>
      </div>

      <div class="product-console" aria-label="BPPPT 工作台预览">
        <div class="console-top"><span></span><span></span><span></span><strong>Investor-ready BP PPT</strong></div>
        <div class="score-ring"><strong id="heroScore">68</strong><small>DECK READINESS</small></div>
        <div class="console-list">
          <div><b>Market</b><em>Needs evidence</em></div>
          <div><b>Traction</b><em>Weak proof</em></div>
          <div><b>Ask</b><em>Not linked</em></div>
          <div><b>Q&A</b><em>10 questions</em></div>
        </div>
        <div class="mini-deck"><span>Report preview</span><strong>评分 · 缺口 · 页序 · 追问</strong></div>
      </div>
    </section>

    <section id="diagnosis" class="section-shell diagnosis-section">
      <div class="diagnosis-copy">
        <p class="eyebrow">Free diagnosis MVP</p>
        <h2>先免费得到一个可行动的 BP 诊断结果。</h2>
        <p>第一版不强迫用户注册和上传敏感文件，先通过结构化问题生成即时反馈；后续再引导解锁完整报告或预约人工审阅。</p>
      </div>
      <form class="diagnosis-form" id="diagnosisForm">
        <div class="form-grid">
          <label>项目名称<input name="project" placeholder="例如：AI 客服助手" required /></label>
          <label>所属行业
            <select name="industry">
              <option value="ai">AI 应用</option>
              <option value="saas">SaaS</option>
              <option value="consumer">消费品牌</option>
              <option value="hardware">硬件/机器人</option>
              <option value="local">本地生活</option>
              <option value="education">教育/内容</option>
            </select>
          </label>
          <label>当前阶段
            <select name="stage">
              <option value="idea">只有想法</option>
              <option value="mvp">已有 MVP / Demo</option>
              <option value="traction">已有用户或收入</option>
              <option value="fundraising">正在准备融资</option>
            </select>
          </label>
          <label>目标用途
            <select name="goal">
              <option value="first">做第一版商业计划 PPT</option>
              <option value="investor">见投资人融资</option>
              <option value="competition">路演比赛 / 创业营</option>
              <option value="global">英文 / 出海版本</option>
            </select>
          </label>
          <label>目前 BP 页数<input name="pages" type="number" min="0" max="80" value="0" /></label>
          <label>融资目标<input name="raise" placeholder="例如：500 万人民币 / 暂无" /></label>
        </div>
        <fieldset>
          <legend>你当前材料里已经讲清楚了哪些内容？</legend>
          <div class="form-checks">
            <label><input type="checkbox" name="module" value="problem" /> 痛点和目标用户</label>
            <label><input type="checkbox" name="module" value="solution" /> 解决方案</label>
            <label><input type="checkbox" name="module" value="market" /> 市场规模和切入路径</label>
            <label><input type="checkbox" name="module" value="traction" /> 用户、收入或验证数据</label>
            <label><input type="checkbox" name="module" value="business" /> 收入模式和单位经济模型</label>
            <label><input type="checkbox" name="module" value="ask" /> 融资金额、用途和里程碑</label>
          </div>
        </fieldset>
        <label>最大的困扰<textarea name="pain" rows="3" placeholder="例如：不知道市场规模页怎么写，投资人总说故事不聚焦"></textarea></label>
        <button class="button primary" type="submit">生成免费诊断结果</button>
      </form>
      <article class="diagnosis-result" id="diagnosisResult" aria-live="polite">
        <p class="eyebrow">Your result</p>
        <h3>填写左侧信息后，这里会生成即时诊断。</h3>
        <p>结果会包含评分、缺失模块、行业建议、推荐页序和付费转化入口。</p>
      </article>
    </section>

    <section id="scenarios" class="section-shell split-section">
      <div class="section-heading">
        <p class="eyebrow">Start from real jobs</p>
        <h2>与普通模板站不同：先问你要完成什么任务。</h2>
        <p>创业者不是想“下载一个漂亮 PPT”，而是想讲清楚商业机会、获得反馈、见投资人、完成路演或争取资源。</p>
      </div>
      <div class="scenario-layout">
        <div class="scenario-grid">${renderScenarioCards()}</div>
        <article class="scenario-result" id="scenarioResult">${renderScenarioPanel()}</article>
      </div>
    </section>

    <section id="report-sample" class="section-shell report-section">
      <div class="section-heading">
        <p class="eyebrow">Paid report sample</p>
        <h2>让用户知道付费后会拿到什么。</h2>
        <p>付费转化的关键不是“我们很专业”，而是让用户看到报告样例、交付边界和下一步行动建议。</p>
      </div>
      <div class="report-card">
        <div class="report-score"><strong>68</strong><span>/100</span><small>示例：AI 客服项目 Seed Deck</small></div>
        <div class="report-content">
          <h3>完整报告摘要</h3>
          <ol>
            <li><strong>最大风险：</strong>市场规模页缺少从目标客户到可服务市场的计算路径。</li>
            <li><strong>建议新增：</strong>Traction、Unit Economics、Go-to-market、Use of Funds 四页。</li>
            <li><strong>投资人可能追问：</strong>为什么客户不用现有客服系统？模型成本如何随规模下降？</li>
            <li><strong>推荐页序：</strong>Problem → Solution → Why now → Market → Product → Traction → Business model → GTM → Team → Ask。</li>
          </ol>
          <a class="button primary" href="#pricing">¥29 解锁完整报告</a>
        </div>
      </div>
    </section>

    <section id="sample-case" class="section-shell case-section">
      <div class="section-heading">
        <p class="eyebrow">Before / After</p>
        <h2>用案例证明：我们不是美化 PPT，而是重构融资叙事。</h2>
      </div>
      <div class="case-grid">
        <article class="case-card before"><span>Before</span><h3>18 页产品介绍</h3><p>页面集中在功能截图、技术名词和愿景口号，缺少客户痛点、市场切入和融资用途。</p></article>
        <article class="case-card after"><span>After</span><h3>12 页 Seed Investor Deck</h3><p>压缩功能页，新增 Traction、GTM、Unit Economics、Use of Funds，并生成 10 个投资人 Q&A。</p></article>
      </div>
    </section>

    <section id="value" class="dark-band">
      <div class="section-shell dark-content">
        <div>
          <p class="eyebrow light">Differentiated value</p>
          <h2>核心差异：模板 + AI 生成 + 投资人逻辑诊断 + 专家审阅。</h2>
          <p>市面上多数网站只解决“页面好不好看”。BPPPT.COM 要解决的是“创业者能不能讲清楚、投资人能不能快速判断、材料能不能直接用于真实场景”。</p>
        </div>
        <div class="capability-grid">
          ${capabilities.map(([num, title, body]) => `<article><span>${num}</span><strong>${title}</strong><p>${body}</p></article>`).join('')}
        </div>
      </div>
    </section>

    <section class="section-shell industries">
      <div class="section-heading">
        <p class="eyebrow">Industry intelligence</p>
        <h2>行业化 BP 结构，而不是一套模板套所有项目。</h2>
      </div>
      <div class="industry-grid">
        ${industryDecks.map(([name, detail]) => `<article><h3>${name}</h3><p>${detail}</p><a href="#diagnosis">获取 ${name} 结构 →</a></article>`).join('')}
      </div>
    </section>

    <section id="review" class="section-shell review-section">
      <div class="review-copy">
        <p class="eyebrow">Interactive demo</p>
        <h2>BP Deck Readiness 诊断演示</h2>
        <p>这个小工具用于展示诊断逻辑：取消某个维度后，系统会显示对应的融资材料风险。</p>
      </div>
      <div class="review-tool" aria-label="BP 诊断演示工具">
        <div class="review-score"><strong id="scoreValue">100</strong><span>/100</span><small id="scoreLabel">Investor-ready</small></div>
        <div class="checklist" id="scoreChecklist">${renderScoreChecklist()}</div>
        <div class="missing-box" id="missingBox">结构完整。下一步可以优化视觉表达和路演讲稿。</div>
      </div>
    </section>

    <section id="pricing" class="section-shell pricing-section">
      <div class="section-heading">
        <p class="eyebrow">Choose your next step</p>
        <h2>选择适合你当前阶段的 BP PPT 方案。</h2>
        <p>免费诊断降低试用门槛，低价报告验证付费意愿，人工审阅承接真正要融资的高意向用户。</p>
      </div>
      <div class="pricing-grid">
        ${pricing.map(plan => `
          <article class="price-card ${plan.highlight ? 'highlight' : ''}">
            <p>${plan.name}</p><h3>${plan.price}</h3><small>${plan.desc}</small>
            <ul>${plan.items.map(item => `<li>${item}</li>`).join('')}</ul>
            <a class="button ${plan.highlight ? 'primary' : 'ghost'}" href="${plan.href}">${plan.action}</a>
          </article>
        `).join('')}
      </div>
      <div class="revenue-note"><strong>商业闭环：</strong>免费诊断 → ¥29 完整报告 → ¥99 生成 BP 大纲 → ¥699 人工审阅 → 定制融资 Deck。</div>
    </section>

    <section class="section-shell proof-section">
      <div class="section-heading">
        <p class="eyebrow">Trust without overclaiming</p>
        <h2>建立可信度：承诺材料质量提升，不承诺融资成功。</h2>
      </div>
      <div class="proof-grid">
        <article><strong>报告样例透明</strong><p>先展示完整报告的结构、建议维度和交付边界，避免用户为黑盒服务付费。</p></article>
        <article><strong>隐私与保密</strong><p>创业资料、财务预测、融资计划默认按保密信息处理；后续可支持删除和 NDA。</p></article>
        <article><strong>方法论透明</strong><p>公开评分维度和结构建议，让用户知道为什么这样改，而不是只做视觉美化。</p></article>
      </div>
    </section>

    <section id="contact" class="section-shell contact-card">
      <div>
        <p class="eyebrow">BPPPT.COM</p>
        <h2>下一步可以接入真正收费能力。</h2>
        <p>建议继续开发：用户登录、报告保存、PPT 上传解析、AI 生成完整页文案、支付解锁完整报告、专家审阅订单和 BPPPT.COM 域名绑定。</p>
      </div>
      <a class="button primary" href="mailto:hello@bpppt.com?subject=BPPPT.COM%20BP%20诊断咨询">联系 / 预约入口</a>
    </section>
  </main>

  <footer class="site-footer">
    <p>© ${new Date().getFullYear()} BPPPT.COM · Business Plan PPT</p>
    <p>Free Diagnosis → Paid Report → Expert Review</p>
  </footer>
`

function escapeHtml(value) {
  return String(value || '').replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char])
}

function updateScenario(id) {
  const selected = scenarios.find(item => item.id === id) || scenarios[0]
  document.querySelectorAll('.scenario-card').forEach(card => card.classList.toggle('active', card.dataset.scenario === selected.id))
  document.querySelector('#scenarioResult').innerHTML = renderScenarioPanel(selected)
}

function updateScore() {
  const checked = [...document.querySelectorAll('input[name="score"]:checked')]
  const missing = Object.keys(scoreRules).filter(key => !checked.some(input => input.value === key))
  const score = Math.round((checked.length / Object.keys(scoreRules).length) * 100)
  document.querySelector('#scoreValue').textContent = score
  document.querySelector('#scoreLabel').textContent = score >= 84 ? 'Investor-ready' : score >= 50 ? 'Needs improvement' : 'High risk deck'
  document.querySelector('#missingBox').innerHTML = missing.length
    ? `<strong>建议补强：</strong>${missing.map(key => scoreRules[key][0]).join('、')}。这些缺口会影响投资人快速判断项目价值。`
    : '结构完整。下一步可以优化视觉表达和路演讲稿。'
}

function generateDiagnosis(event) {
  event.preventDefault()
  const form = event.currentTarget
  const data = new FormData(form)
  const project = escapeHtml(data.get('project') || '你的项目')
  const industryKey = data.get('industry') || 'ai'
  const stage = data.get('stage')
  const goal = data.get('goal')
  const pages = Number(data.get('pages') || 0)
  const modules = data.getAll('module')
  const missing = Object.keys(scoreRules).filter(key => !modules.includes(key))
  let score = 42 + modules.length * 8
  if (stage === 'traction') score += 6
  if (stage === 'fundraising') score += 3
  if (goal === 'investor' && !modules.includes('ask')) score -= 8
  if (pages > 20) score -= 6
  score = Math.max(28, Math.min(96, score))
  const [industryName, advice] = industryAdvice[industryKey]
  const label = score >= 80 ? '接近 Investor-ready' : score >= 60 ? '需要补强后再见投资人' : '当前更适合先重构大纲'
  const missingText = missing.length ? missing.map(key => scoreRules[key][0]).join('、') : '暂无核心缺口'
  const pagePlan = goal === 'investor'
    ? 'Problem → Solution → Why now → Market → Product → Traction → Business Model → GTM → Team → Ask'
    : 'Problem → User → Solution → Market → Business Model → Validation Plan → Roadmap → Team'

  document.querySelector('#diagnosisResult').innerHTML = `
    <p class="eyebrow">Free diagnosis result</p>
    <div class="result-top"><strong>${score}</strong><span>/100</span><small>${label}</small></div>
    <h3>${project} 的 BP 初步诊断</h3>
    <ul class="result-list">
      <li><b>行业：</b>${industryName}。${advice}</li>
      <li><b>主要缺口：</b>${missingText}。</li>
      <li><b>页数提醒：</b>${pages > 20 ? '当前页数偏多，建议压缩成 10-15 页投资人版本。' : '当前页数可控，建议优先补齐核心逻辑。'}</li>
      <li><b>推荐页序：</b>${pagePlan}。</li>
    </ul>
    <div class="locked-report">
      <strong>完整报告可解锁：</strong>每页修改建议、10 个投资人追问、融资材料清单和 30 分钟人工审阅入口。
      <a class="button primary" href="#pricing">查看付费方案</a>
    </div>
  `
}

document.querySelectorAll('.scenario-card').forEach(card => card.addEventListener('click', () => updateScenario(card.dataset.scenario)))
document.querySelectorAll('input[name="score"]').forEach(input => input.addEventListener('change', updateScore))
document.querySelector('#diagnosisForm').addEventListener('submit', generateDiagnosis)

updateScore()
