---
layout: home
hero:
  name: LLM Daily Notes
  text: 大模型日常笔记
  tagline: 系统化LLM学习之路
  image:
    src: /logo-large.png
    alt: LLM Daily Notes
  actions:
    - theme: brand
      text: 开始阅读
      link: /basic-theory/
    - theme: alt
      text: GitHub
      link: https://github.com/aihes/LLM_Daily_Notes

features:
  - icon: 📝
    title: 日更
    details: 每天更新LLM相关的思考和研究，记录学习过程中的发现与思考
  - icon: 🧩
    title: 系统化
    details: 按照清晰的知识体系整理内容，从基础理论到前沿应用全面覆盖
  - icon: 🌐
    title: 开源
    details: GitHub开放协作，欢迎社区贡献，共同构建LLM知识库
  - icon: 🔧
    title: 实用
    details: 结合实际应用场景的分析，注重理论与实践的结合
---

# 最新更新

<div class="recent-updates">
  <div class="update-card">
    <div class="update-date">2025-04-25</div>
    <h3>Transformer电路研究</h3>
    <p>添加了Anthropic最新研究《大型语言模型的生物学》的介绍，探索AI模型内部工作机制。</p>
    <a href="/news/transformer-circuits" class="read-more">阅读详情 →</a>
  </div>

  <div class="update-card">
    <div class="update-date">2025-04-24</div>
    <h3>可解释性的紧迫性</h3>
    <p>翻译了Anthropic创始人Dario Amodei关于AI可解释性重要性的文章，并提供了精简总结和交互式解读。</p>
    <a href="/translations/interpretability-urgency" class="read-more">阅读详情 →</a>
  </div>

  <div class="update-card">
    <div class="update-date">2025-04-23</div>
    <h3>项目启动</h3>
    <p>LLM Daily Notes项目正式启动！这个项目旨在记录和分享大语言模型学习过程中的心得、研究发现和实践经验。</p>
    <a href="/basic-theory/" class="read-more">开始阅读 →</a>
  </div>
</div>

<div class="content-overview">
  <h2>内容概览</h2>
  <div class="category-grid">
    <div class="category-card">
      <h3>📚 基础理论</h3>
      <ul>
        <li><a href="/basic-theory/transformer">Transformer架构</a></li>
        <li><a href="/basic-theory/pretraining-finetuning">预训练与微调</a></li>
        <li><a href="/basic-theory/prompt-engineering">提示工程</a></li>
      </ul>
      <a href="/basic-theory/" class="view-all">查看全部 →</a>
    </div>

    <div class="category-card">
      <h3>🔍 模型解析</h3>
      <ul>
        <li><a href="/model-analysis/gpt">GPT系列</a></li>
        <li><a href="/model-analysis/claude">Claude系列</a></li>
        <li><a href="/model-analysis/llama">Llama系列</a></li>
      </ul>
      <a href="/model-analysis/" class="view-all">查看全部 →</a>
    </div>

    <div class="category-card">
      <h3>🛠️ 应用实践</h3>
      <ul>
        <li><a href="/applications/coding-assistants">编程助手应用</a></li>
        <li><a href="/applications/qa-systems">知识问答系统</a></li>
        <li><a href="/applications/agent-development">Agent开发</a></li>
      </ul>
      <a href="/applications/" class="view-all">查看全部 →</a>
    </div>

    <div class="category-card">
      <h3>📰 前沿动态</h3>
      <ul>
        <li><a href="/news/paper-reviews">论文解读</a></li>
        <li><a href="/news/tech-tracking">新技术追踪</a></li>
        <li><a href="/news/transformer-circuits">Transformer电路研究</a></li>
      </ul>
      <a href="/news/" class="view-all">查看全部 →</a>
    </div>
  </div>
</div>

<style>
.recent-updates {
  margin: 2rem 0;
}

.update-card {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.update-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.update-date {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.update-card h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: var(--vp-c-brand);
}

.read-more {
  display: inline-block;
  margin-top: 0.5rem;
  font-weight: 500;
  color: var(--vp-c-brand);
  text-decoration: none;
}

.read-more:hover {
  text-decoration: underline;
}

.content-overview {
  margin: 3rem 0;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.category-card {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.category-card h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--vp-c-brand);
}

.category-card ul {
  padding-left: 1.2rem;
  margin-bottom: 1rem;
}

.category-card li {
  margin-bottom: 0.5rem;
}

.view-all {
  display: inline-block;
  font-weight: 500;
  color: var(--vp-c-brand);
  text-decoration: none;
}

.view-all:hover {
  text-decoration: underline;
}

@media (max-width: 640px) {
  .category-grid {
    grid-template-columns: 1fr;
  }
}
</style>
