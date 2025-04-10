// 工具数据对象
const toolsData = {
    // 需求收集和关键词调研工具
    researchTools: [
        {
            id: "google-suggest",
            name: "谷歌下拉词",
            url: "https://www.searchsuggest.tips/?keyword=",
            description: "用于获取谷歌搜索建议的关键词，帮助发现用户真实搜索需求",
            tag: "关键词研究"
        },
        {
            id: "toolify-revenue",
            name: "Toolify 榜单",
            url: "https://www.toolify.ai/Best-AI-Tools-revenue",
            description: "提供AI工具收入排名，可以发现哪些AI产品最赚钱",
            tag: "市场分析"
        },
        {
            id: "ai-requests",
            name: "AI导航站需求列表",
            url: "https://theresaforthat.com/requests",
            description: "提供AI导航站的需求列表，了解用户对AI工具的真实需求",
            tag: "需求分析"
        },
        {
            id: "keyword-difficulty",
            name: "关键词难度分析",
            url: "https://ahrefs.com/keyword-difficulty",
            description: "用于检查关键词的难度，帮助SEO优化和内容策略",
            tag: "SEO分析"
        },
        {
            id: "google-trends",
            name: "Google Trends",
            url: "https://trends.google.com",
            description: "发现新兴趋势和热门搜索，把握市场机会",
            tag: "趋势分析"
        },
        {
            id: "semrush",
            name: "SEMrush",
            url: "https://zh.semrush.com",
            description: "全面的SEO和市场分析工具，帮助了解竞争对手和市场状况",
            tag: "市场分析"
        },
        {
            id: "reddit",
            name: "Reddit",
            url: "https://www.reddit.com",
            description: "社区讨论平台，可以发现用户真实痛点和需求",
            tag: "用户研究"
        },
        {
            id: "product-hunt",
            name: "Product Hunt",
            url: "https://www.producthunt.com",
            description: "发现新产品和创新项目，了解市场动态",
            tag: "产品发现"
        }
    ],
    
    // 独立开发必备工具
    devTools: [
        {
            id: "lean-domain-search",
            name: "LeanDomainSearch",
            url: "https://leandomainsearch.com",
            description: "帮助查找可用的域名，为你的项目找到合适的网址",
            tag: "域名查询"
        },
        {
            id: "logo-creator",
            name: "Logo Creator",
            url: "https://www.logo-creator.io/",
            description: "AI驱动的Logo制作工具，快速创建专业Logo",
            tag: "品牌设计"
        },
        {
            id: "looka",
            name: "Looka",
            url: "https://looka.com/",
            description: "AI设计工具，可以创建专业的品牌标识和视觉形象",
            tag: "品牌设计"
        },
        {
            id: "github",
            name: "GitHub",
            url: "https://github.com",
            description: "代码托管平台，提供版本控制和协作功能",
            tag: "代码管理"
        },
        {
            id: "notion",
            name: "Notion",
            url: "https://www.notion.so",
            description: "all-in-one工作空间，用于笔记、项目管理和文档",
            tag: "生产力工具"
        },
        {
            id: "chatgpt",
            name: "ChatGPT",
            url: "https://chat.openai.com",
            description: "AI对话模型，辅助编程、内容创作和问题解决",
            tag: "AI助手"
        }
    ],
    
    // SEO与推广工具
    seoTools: [
        {
            id: "google-ads",
            name: "Google Ads 关键词规划师",
            url: "https://ads.google.com/home/tools/keyword-planner/",
            description: "发现新的关键词并查看搜索量估算",
            tag: "关键词规划"
        },
        {
            id: "ahrefs",
            name: "Ahrefs",
            url: "https://ahrefs.com",
            description: "全面的SEO工具，帮助分析网站、竞争对手和关键词",
            tag: "SEO分析"
        },
        {
            id: "semrush-projects",
            name: "SEMrush Projects",
            url: "https://zh.semrush.com/projects/",
            description: "用于创建和管理SEO项目的工具",
            tag: "SEO管理"
        }
    ],
    
    // AI与创新工具
    aiTools: [
        {
            id: "theresanaiforthat",
            name: "There's An AI For That",
            url: "https://theresanaiforthat.com/",
            description: "全球最大的AI工具导航网站，发现各种AI应用",
            tag: "AI导航"
        },
        {
            id: "toolify-ai",
            name: "Toolify AI",
            url: "https://www.toolify.ai/zh/",
            description: "中文友好的AI工具导航网站，收录优质AI工具",
            tag: "AI导航"
        },
        {
            id: "gpt-voice-clone",
            name: "AI语音克隆",
            url: "https://elevenlabs.io/",
            description: "使用AI技术克隆和生成逼真的人声",
            tag: "语音技术"
        },
        {
            id: "deepswap",
            name: "AI换脸工具",
            url: "https://www.deepswap.ai/",
            description: "AI驱动的视频和图片换脸技术",
            tag: "视觉AI"
        }
    ],
    
    // 开源网站模板
    websiteTemplates: [
        {
            id: "rin",
            name: "Rin 动态博客",
            url: "https://github.com/openRun/Rin",
            description: "基于 Cloudflare Pages、Workers、D1 和 R2 的动态博客模板",
            tag: "博客模板"
        },
        {
            id: "nextjs-boilerplate",
            name: "Next.js 15 模板",
            url: "https://github.com/xartz/Next-js-Boilerplate",
            description: "支持 App Router 和 Page Router 的 Next.js 15 模板和启动器",
            tag: "Next.js"
        },
        {
            id: "saas-boilerplate",
            name: "SaaS 模板",
            url: "https://github.com/xartz/SaaS-Boilerplate",
            description: "使用 Next.js、Tailwind CSS、Shadcn UI 和 TypeScript 构建的 SaaS 模板",
            tag: "SaaS模板"
        },
        {
            id: "nextjs-landing",
            name: "Next.js 登陆页面",
            url: "https://github.com/xartz/Next-JS-Landing-Page-Starter-Template",
            description: "免费的 Next.js 登陆页面模板",
            tag: "着陆页"
        },
        {
            id: "astro-boilerplate",
            name: "Astro 模板",
            url: "https://github.com/xartz/Astro-boilerplate",
            description: "带有响应式博客和作品集的 Astro 模板",
            tag: "博客模板"
        },
        {
            id: "landing-page",
            name: "通用着陆页模板",
            url: "https://github.com/weijunext/landing-page-boilerplate",
            description: "多功能的登陆页面模板，适用于各种项目和营销活动",
            tag: "着陆页"
        },
        {
            id: "fre123-nav",
            name: "FRE123 导航模板",
            url: "https://github.com/fre123-com/fre123-nav",
            description: "免费资源共享平台导航，可以一键搭建你的导航网站",
            tag: "导航站"
        },
        {
            id: "webstack",
            name: "WebStack导航",
            url: "https://github.com/WebStackPage/WebStackPage.github.io",
            description: "静态响应式网址导航网站模板",
            tag: "导航站"
        },
        {
            id: "ai-tools-directory",
            name: "AI工具目录",
            url: "https://github.com/6677-ai/tap4-ai-webui",
            description: "一键部署你自己的AI工具目录的开源web-ui",
            tag: "AI工具目录"
        }
    ],
    
    // 社区与学习平台
    communityPlatforms: [
        {
            id: "indie-hackers",
            name: "Indie Hackers",
            url: "https://www.indiehackers.com/",
            description: "独立开发者社区，分享经验和故事",
            tag: "开发者社区"
        },
        {
            id: "hacker-news",
            name: "Hacker News",
            url: "https://news.ycombinator.com/show",
            description: "技术社区，展示个人项目和讨论",
            tag: "技术社区"
        },
        {
            id: "seo-box",
            name: "SEO Box",
            url: "https://seo.box/referring/",
            description: "收集通过Stripe平台收款的Top 100赚钱产品",
            tag: "产品分析"
        }
    ]
};

export default toolsData; 