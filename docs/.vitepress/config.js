export default {
  title: 'LLM Daily Notes',
  description: '大模型日常笔记：系统化LLM学习之路',
  lang: 'zh-CN',
  lastUpdated: true,
  ignoreDeadLinks: true, // 忽略死链接检查

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],

    // Cloudflare Web Analytics
    ['script', {
      defer: true,
      src: 'https://static.cloudflareinsights.com/beacon.min.js',
      'data-cf-beacon': '{"token": "5ba38a7941d941cfa5952fc838619c25"}'
    }]
  ],

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'LLM Daily Notes',

    nav: [
      { text: '首页', link: '/' },
      { text: '每日笔记', link: '/daily/' },
      { text: '基础理论', link: '/basic-theory/' },
      { text: '模型解析', link: '/model-analysis/' },
      { text: '应用实践', link: '/applications/' },
      { text: '前沿动态', link: '/news/' },
      { text: 'GitHub', link: 'https://github.com/aihes/LLM_Daily_Notes' }
    ],

    sidebar: {
      '/daily/': [
        {
          text: '每日笔记',
          items: [
            { text: '2025-04-23: 思维链技术探索', link: '/daily/2025-04-23' }
          ]
        }
      ],
      '/basic-theory/': [
        {
          text: '基础理论',
          items: [
            { text: '概述', link: '/basic-theory/' },
            { text: 'Transformer架构', link: '/basic-theory/transformer' },
            { text: '预训练与微调', link: '/basic-theory/pretraining-finetuning' },
            { text: '提示工程', link: '/basic-theory/prompt-engineering' }
          ]
        }
      ],
      '/model-analysis/': [
        {
          text: '模型解析',
          items: [
            { text: '概述', link: '/model-analysis/' },
            { text: 'GPT系列', link: '/model-analysis/gpt' },
            { text: 'Claude系列', link: '/model-analysis/claude' },
            { text: 'Llama系列', link: '/model-analysis/llama' },
            { text: '国产模型分析', link: '/model-analysis/chinese-models' }
          ]
        }
      ],
      '/applications/': [
        {
          text: '应用实践',
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
        }
      ],
      '/news/': [
        {
          text: '前沿动态',
          items: [
            { text: '概述', link: '/news/' },
            { text: '论文解读', link: '/news/paper-reviews' },
            { text: '新技术追踪', link: '/news/tech-tracking' },
            { text: '行业新闻', link: '/news/industry-news' }
          ]
        },
        {
          text: '翻译',
          items: [
            { text: '可解释性的紧迫性', link: '/translations/interpretability-urgency' },
            { text: '可解释性精简总结', link: '/translations/interpretability-summary' },
            { text: '可解释性交互式解读', link: '/translations/interpretability-interactive' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aihes/LLM_Daily_Notes' }
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `Copyright © ${new Date().getFullYear()} LLM Daily Notes`
    },

    lastUpdatedText: '最后更新',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    search: {
      provider: 'local'
    }
  }
}
