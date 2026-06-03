(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`idea`,title:`我只有一个创业想法`,tag:`Idea → First BP`,pain:`不知道商业计划 PPT 先写什么，容易做成产品介绍。`,result:`输出 10 页第一版 BP：问题、用户、方案、市场、商业模式、下一步验证计划。`,cta:`生成第一版 BP 结构`},{id:`fundraising`,title:`我要见投资人融资`,tag:`Fundraising Deck`,pain:`页面很多但故事不聚焦，投资人看不出为什么现在值得投。`,result:`输出 12-15 页投资人叙事：Traction、市场逻辑、增长模型、融资用途和 Q&A。`,cta:`准备投资人版本`},{id:`review`,title:`我已有旧版 PPT`,tag:`Deck Review`,pain:`不知道哪页该删、哪页该补，视觉和逻辑都需要重构。`,result:`获得结构评分、缺失页面、投资人质疑点、Before/After 改版建议。`,cta:`诊断我的旧 BP`},{id:`global`,title:`我要做英文/出海版本`,tag:`Bilingual Deck`,pain:`中文 BP 直译后不符合海外投资人的表达习惯。`,result:`输出英文 Investor Deck、Founder email、One-pager 和海外路演讲稿。`,cta:`生成英文版本`}],t=[[`01`,`不是模板堆砌`,`先根据阶段、行业、用途生成商业叙事，再匹配 PPT 页面结构。`],[`02`,`投资人视角诊断`,`检查 Problem、Market、Traction、Business Model、Ask 等关键维度是否完整。`],[`03`,`行业化指标提示`,`SaaS 看 MRR/Churn，消费品牌看复购/渠道，硬件看供应链/量产节奏。`],[`04`,`融资材料包`,`不仅有 Deck，还能延展 One-pager、投资人邮件、路演稿和 Q&A。`]],n=[[`AI 应用`,`数据壁垒、模型成本、落地场景、ROI`],[`SaaS`,`MRR、CAC、LTV、留存、销售周期`],[`消费品牌`,`人群洞察、渠道、复购、毛利、供应链`],[`硬件/机器人`,`BOM、量产、交付周期、技术壁垒`],[`本地生活`,`供需密度、履约效率、城市扩张模型`],[`教育/内容`,`获客成本、完课率、续费、内容生产体系`]],r=[{name:`Free`,price:`¥0`,desc:`用免费工具建立信任和获客。`,items:[`BP 大纲生成`,`基础结构检查`,`3 个免费页面模板`,`融资材料清单`],action:`免费开始`},{name:`Pro`,price:`¥99/月`,desc:`适合正在制作 BP 的创业者。`,items:[`行业模板库`,`AI 页面文案优化`,`PPT/PDF 导出`,`中英双语改写`],action:`升级 Pro`,highlight:!0},{name:`Founder Review`,price:`¥699/次`,desc:`高价值人工审阅，避免只卖低价模板。`,items:[`整份 Deck 诊断`,`投资人问题清单`,`页面删改建议`,`30 分钟顾问反馈`],action:`预约审阅`}],i={problem:[`Problem clarity`,`痛点是否具体，用户是否清晰`],solution:[`Solution strength`,`方案是否直接回应痛点`],market:[`Market logic`,`市场规模和切入路径是否可信`],traction:[`Traction evidence`,`是否有验证数据、客户、收入或里程碑`],business:[`Business model`,`收入模式、单位经济模型是否说得清`],ask:[`Fundraising ask`,`融资金额、用途、里程碑是否明确`]};function a(){return e.map((e,t)=>`
    <button class="scenario-card ${t===0?`active`:``}" data-scenario="${e.id}" type="button">
      <span>${e.tag}</span>
      <strong>${e.title}</strong>
      <small>${e.pain}</small>
    </button>
  `).join(``)}function o(t=e[0]){return`
    <p class="eyebrow">Selected workflow</p>
    <h3>${t.title}</h3>
    <p class="muted">${t.result}</p>
    <a class="button primary" href="#contact">${t.cta}</a>
  `}function s(){return Object.entries(i).map(([e,[,t]])=>`
    <label class="check-row">
      <input type="checkbox" name="score" value="${e}" checked />
      <span>${t}</span>
    </label>
  `).join(``)}var c=document.querySelector(`#app`);c.innerHTML=`
  <header class="site-header">
    <nav class="nav-shell" aria-label="主导航">
      <a class="brand" href="#top" aria-label="BPPPT.COM 首页">
        <span class="brand-mark">BP</span>
        <span><strong>BPPPT.COM</strong><small>Business Plan PPT</small></span>
      </a>
      <div class="nav-links">
        <a href="#scenarios">场景</a>
        <a href="#value">价值</a>
        <a href="#review">诊断</a>
        <a href="#pricing">盈利</a>
        <a href="#contact">联系</a>
      </div>
      <a class="nav-cta" href="#review">免费诊断</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero section-shell">
      <div class="hero-copy">
        <p class="eyebrow">BUSINESS PLAN PPT · FOR FOUNDERS</p>
        <h1>让创业者更快做出投资人看得懂的商业计划 PPT。</h1>
        <p class="hero-lead">BPPPT.COM 不只是 PPT 模板站，而是把创业想法、商业逻辑、行业指标和投资人问题转成可展示、可融资、可复用的 Business Plan PPT 工作台。</p>
        <div class="hero-actions">
          <a class="button primary" href="#scenarios">选择你的使用场景</a>
          <a class="button ghost" href="#review">先做 BP 诊断</a>
        </div>
        <dl class="hero-stats" aria-label="网站价值">
          <div><dt>4</dt><dd>创业高频场景入口</dd></div>
          <div><dt>6</dt><dd>行业指标结构库</dd></div>
          <div><dt>5</dt><dd>收入模式组合</dd></div>
        </dl>
      </div>

      <div class="product-console" aria-label="BPPPT 工作台预览">
        <div class="console-top"><span></span><span></span><span></span><strong>Investor-ready BP PPT</strong></div>
        <div class="score-ring"><strong id="heroScore">82</strong><small>Deck Readiness</small></div>
        <div class="console-list">
          <div><b>Problem</b><em>Clear</em></div>
          <div><b>Market</b><em>Needs data</em></div>
          <div><b>Traction</b><em>Investor question</em></div>
          <div><b>Ask</b><em>Milestone linked</em></div>
        </div>
        <div class="mini-deck"><span>Pitch Deck</span><strong>12 pages · CN/EN · PPTX</strong></div>
      </div>
    </section>

    <section id="scenarios" class="section-shell split-section">
      <div class="section-heading">
        <p class="eyebrow">Start from real jobs</p>
        <h2>与普通模板站不同：先问你要完成什么任务。</h2>
        <p>创业者不是想“下载一个漂亮 PPT”，而是想讲清楚商业机会、获得反馈、见投资人、完成路演或争取资源。</p>
      </div>
      <div class="scenario-layout">
        <div class="scenario-grid">${a()}</div>
        <article class="scenario-result" id="scenarioResult">${o()}</article>
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
          ${t.map(([e,t,n])=>`
            <article><span>${e}</span><strong>${t}</strong><p>${n}</p></article>
          `).join(``)}
        </div>
      </div>
    </section>

    <section class="section-shell industries">
      <div class="section-heading">
        <p class="eyebrow">Industry intelligence</p>
        <h2>行业化 BP 结构，而不是一套模板套所有项目。</h2>
      </div>
      <div class="industry-grid">
        ${n.map(([e,t])=>`
          <article><h3>${e}</h3><p>${t}</p><a href="#contact">获取 ${e} 结构 →</a></article>
        `).join(``)}
      </div>
    </section>

    <section id="review" class="section-shell review-section">
      <div class="review-copy">
        <p class="eyebrow">Interactive demo</p>
        <h2>BP Deck Readiness 诊断演示</h2>
        <p>正式产品可以支持上传 PPT。当前网站先提供交互式评分演示，让用户理解 BPPPT 的应用价值：不是美化，而是发现商业计划书的逻辑缺口。</p>
      </div>
      <div class="review-tool" aria-label="BP 诊断演示工具">
        <div class="review-score"><strong id="scoreValue">100</strong><span>/100</span><small id="scoreLabel">Investor-ready</small></div>
        <div class="checklist" id="scoreChecklist">${s()}</div>
        <div class="missing-box" id="missingBox">结构完整。下一步可以优化视觉表达和路演讲稿。</div>
      </div>
    </section>

    <section id="pricing" class="section-shell pricing-section">
      <div class="section-heading">
        <p class="eyebrow">Business model</p>
        <h2>盈利模式不是只卖模板，而是形成产品阶梯。</h2>
        <p>免费工具获客，模板和 AI 订阅规模化，专家审阅与定制服务提高客单价，机构授权扩大渠道。</p>
      </div>
      <div class="pricing-grid">
        ${r.map(e=>`
          <article class="price-card ${e.highlight?`highlight`:``}">
            <p>${e.name}</p>
            <h3>${e.price}</h3>
            <small>${e.desc}</small>
            <ul>${e.items.map(e=>`<li>${e}</li>`).join(``)}</ul>
            <a class="button ${e.highlight?`primary`:`ghost`}" href="#contact">${e.action}</a>
          </article>
        `).join(``)}
      </div>
      <div class="revenue-note">
        <strong>后续可扩展：</strong>模板单次购买、AI credits、企业/孵化器账号、白标模板库、Demo Day 批量审阅服务。
      </div>
    </section>

    <section class="section-shell proof-section">
      <div class="section-heading">
        <p class="eyebrow">Trust without overclaiming</p>
        <h2>建立可信度：承诺材料质量提升，不承诺融资成功。</h2>
      </div>
      <div class="proof-grid">
        <article><strong>Before / After 案例</strong><p>展示从“产品介绍型 PPT”变成“融资叙事型 Deck”的结构变化。</p></article>
        <article><strong>隐私与保密</strong><p>创业资料、财务预测、融资计划默认按保密信息处理。</p></article>
        <article><strong>方法论透明</strong><p>公开评分维度和结构建议，让用户知道为什么这样改。</p></article>
      </div>
    </section>

    <section id="contact" class="section-shell contact-card">
      <div>
        <p class="eyebrow">BPPPT.COM</p>
        <h2>下一步：把它从展示页升级为真正可收费的产品。</h2>
        <p>可以继续接入：用户登录、PPT 上传诊断、AI 生成器、模板支付下载、专家审阅订单、Stripe/支付宝/微信支付和域名正式上线。</p>
      </div>
      <a class="button primary" href="mailto:hello@bpppt.com?subject=BPPPT.COM%20产品咨询">联系 / 预留入口</a>
    </section>
  </main>

  <footer class="site-footer">
    <p>© ${new Date().getFullYear()} BPPPT.COM · Business Plan PPT</p>
    <p>Template + AI + Review + Expert Service</p>
  </footer>
`;function l(t){let n=e.find(e=>e.id===t)||e[0];document.querySelectorAll(`.scenario-card`).forEach(e=>{e.classList.toggle(`active`,e.dataset.scenario===n.id)}),document.querySelector(`#scenarioResult`).innerHTML=o(n)}function u(){let e=[...document.querySelectorAll(`input[name="score"]:checked`)],t=Object.keys(i).filter(t=>!e.some(e=>e.value===t)),n=Math.round(e.length/Object.keys(i).length*100);document.querySelector(`#scoreValue`).textContent=n,document.querySelector(`#scoreLabel`).textContent=n>=84?`Investor-ready`:n>=50?`Needs improvement`:`High risk deck`,document.querySelector(`#missingBox`).innerHTML=t.length?`<strong>建议补强：</strong>${t.map(e=>i[e][0]).join(`、`)}。这些缺口会影响投资人快速判断项目价值。`:`结构完整。下一步可以优化视觉表达和路演讲稿。`}document.querySelectorAll(`.scenario-card`).forEach(e=>{e.addEventListener(`click`,()=>l(e.dataset.scenario))}),document.querySelectorAll(`input[name="score"]`).forEach(e=>{e.addEventListener(`change`,u)}),u();