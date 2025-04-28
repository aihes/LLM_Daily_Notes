<template>
  <div class="custom-nav">
    <div 
      v-for="item in navItems" 
      :key="item.text" 
      class="nav-item"
      @mouseenter="item.showDropdown = true"
      @mouseleave="item.showDropdown = false"
    >
      <a :href="item.link" class="nav-link">{{ item.text }}</a>
      <div v-if="item.items && item.showDropdown" class="dropdown">
        <a 
          v-for="subItem in item.items" 
          :key="subItem.text" 
          :href="subItem.link" 
          class="dropdown-item"
        >
          {{ subItem.text }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        {
          text: '首页',
          link: '/',
          showDropdown: false
        },
        {
          text: '每日笔记',
          link: '/daily/',
          showDropdown: false,
          items: [
            { text: '2025-04-23: 思维链技术探索', link: '/daily/2025-04-23' }
          ]
        },
        {
          text: '基础理论',
          link: '/basic-theory/',
          showDropdown: false,
          items: [
            { text: '概述', link: '/basic-theory/' },
            { text: 'Transformer架构', link: '/basic-theory/transformer' },
            { text: '预训练与微调', link: '/basic-theory/pretraining-finetuning' },
            { text: '提示工程', link: '/basic-theory/prompt-engineering' }
          ]
        },
        {
          text: '模型解析',
          link: '/model-analysis/',
          showDropdown: false,
          items: [
            { text: '概述', link: '/model-analysis/' },
            { text: 'GPT系列', link: '/model-analysis/gpt' },
            { text: 'Claude系列', link: '/model-analysis/claude' },
            { text: 'Llama系列', link: '/model-analysis/llama' },
            { text: '国产模型分析', link: '/model-analysis/chinese-models' }
          ]
        },
        {
          text: '应用实践',
          link: '/applications/',
          showDropdown: false,
          items: [
            { text: '概述', link: '/applications/' },
            { text: '编程助手应用', link: '/applications/coding-assistants' },
            { text: '知识问答系统', link: '/applications/qa-systems' },
            { text: '多模态应用', link: '/applications/multimodal' },
            { text: 'Agent开发', link: '/applications/agent-development' },
            { text: 'AI Agents 学习资源', link: '/applications/agent-resources' },
            { text: 'AI工程师进阶', link: '/ai-engineer/' },
            { text: 'LLM工程技术', link: '/ai-engineer/llm-engineering' },
            { text: 'MLOps实践指南', link: '/ai-engineer/mlops' }
          ]
        },
        {
          text: '前沿动态',
          link: '/news/',
          showDropdown: false,
          items: [
            { text: '概述', link: '/news/' },
            { text: '论文解读', link: '/news/paper-reviews' },
            { text: '新技术追踪', link: '/news/tech-tracking' },
            { text: '行业新闻', link: '/news/industry-news' },
            { text: 'Transformer电路研究', link: '/news/transformer-circuits' }
          ]
        },
        {
          text: '翻译',
          link: '/translations/interpretability-urgency',
          showDropdown: false,
          items: [
            { text: '可解释性的紧迫性', link: '/translations/interpretability-urgency' },
            { text: '可解释性精简总结', link: '/translations/interpretability-summary' },
            { text: '可解释性交互式解读', link: '/translations/interpretability-interactive' }
          ]
        },
        {
          text: 'GitHub',
          link: 'https://github.com/aihes/LLM_Daily_Notes',
          showDropdown: false
        }
      ]
    }
  }
}
</script>

<style scoped>
.custom-nav {
  display: flex;
  align-items: center;
  height: 100%;
}

.nav-item {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
}

.nav-link {
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0 0.25rem;
  transition: color 0.25s;
  text-decoration: none;
}

.nav-link:hover {
  color: var(--vp-c-brand);
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background-color: var(--vp-c-bg);
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
  z-index: 100;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.dropdown-item {
  padding: 0.5rem 1rem;
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
  text-decoration: none;
  transition: background-color 0.25s;
  white-space: nowrap;
}

.dropdown-item:hover {
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-brand);
}

@media (max-width: 768px) {
  .custom-nav {
    display: none;
  }
}
</style>
