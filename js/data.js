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
        },
        {
            id: "railway",
            name: "Railway",
            url: "https://railway.app/",
            description: "简化云服务部署的平台，一键部署后端、数据库和前端项目，支持自动化CI/CD",
            tag: "部署平台"
        },
        {
            id: "supabase",
            name: "Supabase",
            url: "https://supabase.com/",
            description: "开源的Firebase替代品，提供PostgreSQL数据库、身份验证和实时订阅功能",
            tag: "后端服务"
        },
        {
            id: "mongodb-atlas",
            name: "MongoDB Atlas",
            url: "https://www.mongodb.com/atlas/database",
            description: "MongoDB的云数据库服务，提供自动扩展、备份和安全功能，有免费层可用",
            tag: "数据库服务"
        },
        {
            id: "render",
            name: "Render",
            url: "https://render.com/",
            description: "现代云平台，支持静态站点、Web服务、后端API和数据库的快速部署和扩展",
            tag: "云平台"
        },
        {
            id: "planetscale",
            name: "PlanetScale",
            url: "https://planetscale.com/",
            description: "基于Vitess的MySQL兼容的无服务器数据库平台，提供分支和无停机架构更改",
            tag: "数据库服务"
        },
        {
            id: "upstash",
            name: "Upstash",
            url: "https://upstash.com/",
            description: "无服务器的Redis和Kafka解决方案，按请求计费，适合Serverless和Edge部署",
            tag: "数据库服务"
        },
        {
            id: "clerk",
            name: "Clerk",
            url: "https://clerk.com/",
            description: "完整的用户管理和身份验证系统，为Web应用提供登录、注册和用户管理功能",
            tag: "身份认证"
        },
        {
            id: "splitbee",
            name: "Splitbee",
            url: "https://splitbee.io/",
            description: "简单易用的网站分析工具，提供用户行为跟踪、转化漏斗和A/B测试功能",
            tag: "分析工具"
        },
        {
            id: "stripe",
            name: "Stripe",
            url: "https://stripe.com/",
            description: "完整的支付解决方案，为独立开发者提供在线支付处理、订阅管理和发票功能",
            tag: "支付服务"
        },
        {
            id: "linear",
            name: "Linear",
            url: "https://linear.app/",
            description: "现代化的项目和问题跟踪工具，优雅的界面和快捷键支持，为软件团队提供高效工作流程",
            tag: "项目管理"
        },
        {
            id: "raycast",
            name: "Raycast",
            url: "https://www.raycast.com/",
            description: "Mac上的生产力工具，可通过快捷键快速访问应用和服务，支持自定义脚本和工作流扩展",
            tag: "效率工具"
        },
        {
            id: "gumroad",
            name: "Gumroad",
            url: "https://gumroad.com/",
            description: "简单易用的数字产品销售平台，让创作者轻松销售电子书、课程、软件和订阅服务",
            tag: "销售平台"
        },
        {
            id: "nextjs",
            name: "Next.js",
            url: "https://nextjs.org/",
            description: "现代化的React框架，提供高性能的Web应用开发解决方案，支持服务端渲染和静态站点生成",
            tag: "Web框架"
        },
        {
            id: "atlassian",
            name: "Atlassian",
            url: "https://home.atlassian.com/",
            description: "企业级协作和开发工具套件，提供Jira、Confluence等项目管理和团队协作解决方案",
            tag: "开发协作"
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
            url: "https://theresanaiforthat.com/requests/",
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
        },
        {
            id: "dify-ai",
            name: "Dify.AI",
            url: "https://dify.ai/",
            description: "开源的LLM应用开发平台，快速构建AI助手、聊天机器人和Agent应用，提供完整的开发运维能力",
            tag: "AI开发平台"
        },
        {
            id: "claude",
            name: "Claude",
            url: "https://claude.ai/",
            description: "Anthropic开发的AI助手，专注于有益、无害和诚实的对话体验，在长文本理解和安全性方面表现出色",
            tag: "AI助手"
        },
        {
            id: "groq",
            name: "Groq",
            url: "https://groq.com/",
            description: "超高速AI推理引擎，提供毫秒级LLM响应速度，支持Llama和Mixtral等开源模型的超快速处理",
            tag: "AI基础设施"
        },
        {
            id: "replicate",
            name: "Replicate",
            url: "https://replicate.com/",
            description: "在云端运行开源AI模型的平台，支持Stable Diffusion、Llama和其他流行模型，提供简单API访问",
            tag: "AI部署"
        },
        {
            id: "perplexity",
            name: "Perplexity AI",
            url: "https://www.perplexity.ai/",
            description: "AI驱动的智能搜索引擎，结合大语言模型提供实时、可引用的网络搜索结果和完整解答",
            tag: "AI搜索"
        },
        {
            id: "ollama",
            name: "Ollama",
            url: "https://ollama.com/",
            description: "在本地运行大型语言模型的开源工具，支持Llama、Mistral等模型的本地部署和使用",
            tag: "AI本地部署"
        },
        {
            id: "together-ai",
            name: "Together AI",
            url: "https://www.together.ai/",
            description: "AI基础设施平台，提供开源模型的托管和微调服务，支持模型部署和推理API",
            tag: "AI基础设施"
        },
        {
            id: "openrouter",
            name: "OpenRouter.ai",
            url: "https://openrouter.ai/",
            description: "AI模型聚合平台，提供多种大语言模型的统一接口，支持灵活的模型选择和调用",
            tag: "AI模型平台"
        },
        {
            id: "siliconflow",
            name: "SiliconFlow",
            url: "https://siliconflow.cn/zh-cn/models",
            description: "中国本地的AI模型平台，提供高性能的AI模型和云服务，专注于加速AGI技术普惠人类",
            tag: "AI模型平台"
        },
        {
            id: "google-ai-studio",
            name: "Google AI Studio",
            url: "https://aistudio.google.com/apikey",
            description: "Google提供的AI模型开发和API访问平台，支持Gemini等先进AI模型的调用和集成",
            tag: "AI开发平台"
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
        },
        {
            id: "wordpress",
            name: "WordPress",
            url: "https://wordpress.com/discover",
            description: "全球最流行的内容管理系统和网站建设平台，提供丰富的主题和插件生态",
            tag: "建站工具"
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
        },
        {
            id: "juejin",
            name: "掘金",
            url: "https://juejin.cn/",
            description: "中国最大的开发者技术社区，分享技术文章、项目经验和职场见解",
            tag: "技术社区"
        },
        {
            id: "csdn",
            name: "CSDN",
            url: "https://www.csdn.net/",
            description: "中国最大的IT技术社区，提供技术博客、论坛和技术资讯",
            tag: "技术社区"
        },
        {
            id: "quora",
            name: "Quora",
            url: "https://fr.quora.com/",
            description: "全球知名的问答社区平台，用户可以分享知识、交流经验和探讨各种话题",
            tag: "问答社区"
        }
    ],
    
    // 浏览器插件工具
    browserExtensions: [
        {
            id: "tampermonkey",
            name: "篡改猴 (Tampermonkey)",
            url: "https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo",
            description: "强大的用户脚本管理器，可运行自定义JavaScript脚本，增强网站功能，自动化重复任务",
            tag: "开发工具"
        },
        {
            id: "wappalyzer",
            name: "Wappalyzer",
            url: "https://chrome.google.com/webstore/detail/wappalyzer-technology-pro/gppongmhjkpfnbhagpmjfkannfbllamg",
            description: "识别网站使用的技术栈、框架和库，了解竞争对手的技术实现",
            tag: "技术分析"
        },
        {
            id: "live-css-editor",
            name: "Live CSS Editor",
            url: "https://chrome.google.com/webstore/detail/live-editor-for-css-less/ifhikkcafabcgolfjegfcgloomalapol",
            description: "实时编辑和预览CSS样式，无需刷新页面，大幅提高前端开发效率",
            tag: "前端开发"
        },
        {
            id: "json-formatter",
            name: "JSON Formatter",
            url: "https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa",
            description: "格式化和可视化JSON数据，提高API调试和数据分析效率",
            tag: "开发工具"
        },
        {
            id: "react-devtools",
            name: "React Developer Tools",
            url: "https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi",
            description: "React应用调试工具，检查组件层次结构、props和state",
            tag: "前端开发"
        },
        {
            id: "tailwind-devtools",
            name: "Tailwind CSS DevTools",
            url: "https://chrome.google.com/webstore/detail/tailwind-css-devtools/hdibiejochkophpjigdcgobcdekghcgc",
            description: "Tailwind CSS开发工具，帮助检查和应用Tailwind类",
            tag: "前端开发"
        },
        {
            id: "gofullpage",
            name: "GoFullPage",
            url: "https://chrome.google.com/webstore/detail/gofullpage-full-page-scre/fdpohaocaechififmbbbbbknoalclacl",
            description: "捕获整个网页的高质量截图，用于UI文档和错误报告",
            tag: "设计工具"
        },
        {
            id: "colorzilla",
            name: "ColorZilla",
            url: "https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp",
            description: "高级颜色拾取器和分析工具，快速获取网页上任何元素的颜色",
            tag: "设计工具"
        },
        {
            id: "web-data-scraper",
            name: "Easy Web Data Scraper",
            url: "https://chrome.google.com/webstore/detail/easy-web-data-scraper/ddabenjldcoegcnnbpaiafhbnkllnhih",
            description: "轻松提取网页数据为CSV或Excel格式，无需编写爬虫代码",
            tag: "数据工具"
        },
        {
            id: "get-cookies",
            name: "Get cookies.txt",
            url: "https://chrome.google.com/webstore/detail/get-cookiestxt-locally/cclelndahbckbenkjhflpdbgbibeiafp",
            description: "导出网站cookie为Netscape格式文件，用于API测试和会话调试",
            tag: "开发工具"
        },
        {
            id: "crx-extractor",
            name: "CRX Extractor/Downloader",
            url: "https://chrome.google.com/webstore/detail/crx-extractordownloader/ajkhmmldknmfjnmeedkbkkojgobmljda",
            description: "提取和下载Chrome扩展的CRX文件，学习和研究扩展实现",
            tag: "开发工具"
        },
        {
            id: "sider-chatgpt",
            name: "Sider: ChatGPT",
            url: "https://chrome.google.com/webstore/detail/sider-chatgpt-sidebar-gpt/difoiogjjojoaoomphldepapgpbgkhng",
            description: "在浏览器侧边栏直接访问ChatGPT，辅助编程和问题解决",
            tag: "AI工具"
        },
        {
            id: "prompt-navigator",
            name: "Prompt Navigator",
            url: "https://chrome.google.com/webstore/detail/promptnavigator/ineglkdaijjnebignbdajaajjdccfono",
            description: "管理和优化AI提示词，提高AI辅助编程效率",
            tag: "AI工具"
        },
        {
            id: "gptzero",
            name: "GPTZero",
            url: "https://chrome.google.com/webstore/detail/gptzero/likflbdnlpdfbplamedpeogakckiegei",
            description: "检测内容是否由AI生成，确保内容的真实性和原创性",
            tag: "AI工具"
        },
        {
            id: "aitdk-seo",
            name: "AITDK SEO Extension",
            url: "https://chrome.google.com/webstore/detail/aitdk/kekoinogcphaljhiohppffpbgeciflec",
            description: "AI驱动的SEO分析工具，提供网站优化建议和关键词分析",
            tag: "SEO工具"
        },
        {
            id: "seoquake",
            name: "SEOquake",
            url: "https://chrome.google.com/webstore/detail/seoquake/akdgnmcogleenhbclghghlkkdndkjdjc",
            description: "全面的SEO审查工具，分析网页SEO指标和排名因素",
            tag: "SEO工具"
        },
        {
            id: "similarweb",
            name: "Similarweb",
            url: "https://chrome.google.com/webstore/detail/similarweb-traffic-rank-w/hoklmmgfnpapgjgcpechhaamimifchmp",
            description: "分析网站流量、用户行为和竞争情报的工具",
            tag: "分析工具"
        },
        {
            id: "trends-radar",
            name: "Trends Radar",
            url: "https://chrome.google.com/webstore/detail/trends-radar/bfjmolbnaknkoiecpkgcmhgkmanffjnp",
            description: "发现和追踪技术趋势和热门话题，把握技术方向",
            tag: "分析工具"
        },
        {
            id: "obsidian-web",
            name: "Obsidian Web",
            url: "https://chrome.google.com/webstore/detail/obsidian-web/edoacekkjanmingkbkgjndalhkpgmgno",
            description: "将网页内容直接保存到Obsidian知识库，构建开发资源库",
            tag: "生产力工具"
        },
        {
            id: "gmail-checker",
            name: "Checker Plus for Gmail",
            url: "https://chrome.google.com/webstore/detail/checker-plus-for-gmail/oeopbcgkkoapgobdbedcemjljbihmemj",
            description: "无需打开Gmail即可管理邮件，减少工作中断提高专注度",
            tag: "生产力工具"
        },
        {
            id: "ublock-origin",
            name: "uBlock Origin",
            url: "https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm",
            description: "高效的广告拦截器，提高浏览速度和安全性，减少干扰",
            tag: "生产力工具"
        },
        {
            id: "game-site-monitor",
            name: "Game Site Monitor",
            url: "https://chrome.google.com/webstore/detail/game-site-monitor/nlmmmmpllclkhkcoiihcgbhidpnddpnj",
            description: "监控网站变化和更新，自动跟踪竞品和依赖更新",
            tag: "监控工具"
        }
    ],
    
    // 设计工具（新增分类）
    designTools: [
        {
            id: "figma",
            name: "Figma",
            url: "https://www.figma.com/",
            description: "基于云的协作设计工具，支持UI/UX设计、原型制作和设计系统管理，实时多人协作功能",
            tag: "UI设计"
        },
        {
            id: "canva",
            name: "Canva",
            url: "https://www.canva.com/",
            description: "简易平面设计工具，提供模板和拖放式编辑器，适合非专业设计师创建营销图片和社交媒体内容",
            tag: "平面设计"
        },
        {
            id: "adobe-xd",
            name: "Adobe XD",
            url: "https://www.adobe.com/products/xd.html",
            description: "Adobe的UI/UX设计工具，提供矢量设计、线框图和交互原型功能，与Creative Cloud无缝集成",
            tag: "UI设计"
        },
        {
            id: "sketch",
            name: "Sketch",
            url: "https://www.sketch.com/",
            description: "Mac专属的矢量图形编辑器，适用于UI、移动端、Web和图标设计，强大的插件生态系统",
            tag: "UI设计"
        },
        {
            id: "midjourney",
            name: "Midjourney",
            url: "https://www.midjourney.com/",
            description: "AI图像生成工具，通过文本描述创建专业级别的艺术作品和视觉内容，适合概念设计和灵感收集",
            tag: "AI设计"
        }
    ]
};

// 改为全局变量方式，不使用ES6模块导出
window.toolsData = toolsData; 