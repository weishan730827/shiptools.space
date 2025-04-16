// 不再使用import语句，改用全局变量
// import toolsData from './data.js';

// 添加调试输出,用于跟踪脚本执行
console.log("%c MAIN.JS STARTED - 唯一导航处理代码开始执行", "background: #4a90e2; color: white; font-size: 20px; padding: 5px;");

// 添加版本号和强制刷新提示，帮助排查缓存问题
console.log("%c 版本: 1.1.0 - 修复重复渲染问题 ", "background: #2ed573; color: white; font-size: 16px; padding: 5px;");

// 强制禁用页面缓存
if (window.location.search.indexOf('nocache') === -1) {
    console.log("%c 首次加载: 添加nocache参数强制刷新 ", "background: #ff6b81; color: white; font-size: 14px; padding: 3px;");
    
    // 仅在开发环境或本地调试时启用
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.hostname.includes('github.io')) {
        const separator = window.location.search ? '&' : '?';
        const nocacheParam = `nocache=${new Date().getTime()}`;
        // 如果不是通过nocache参数访问的，添加参数并刷新
        window.location.href = `${window.location.href}${separator}${nocacheParam}`;
    }
}

// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM加载完成，初始化工具数据...");
    console.log("全局toolsData对象:", window.toolsData);
    
    // 确保toolsData可用
    if (!window.toolsData) {
        console.error("toolsData未定义！请检查data.js是否正确加载");
        return;
    }
    
    // 强制清理所有可能的工具容器
    clearAllToolContainers();
    
    // 添加详细的HTML结构检查，检查渲染目标是否正确
    debugHtmlStructure();
    
    // 初始化工具卡片
    initializeToolsCards();
    
    // 导航菜单项点击事件
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.category-section');
    const contentHeaderTitle = document.querySelector('.content-header-left h2');
    const contentHeaderDesc = document.querySelector('.content-header-left p');
    
    // 调试信息：检查HTML结构
    console.log("HTML分析: 导航菜单项数量", navLinks.length);
    console.log("HTML分析: 分类区域数量", sections.length);
    
    // 检查导航链接的data-section属性
    navLinks.forEach(link => {
        console.log(`HTML分析: 导航项 "${link.textContent.trim()}" 的data-section="${link.getAttribute('data-section')}"`);
    });
    
    // 检查分类区域的ID
    sections.forEach(section => {
        console.log(`HTML分析: 分类区域ID="${section.id}"`);
    });
    
    // 特别检查templates相关元素
    const templatesLink = document.querySelector('.nav-link[data-section="templates"]');
    console.log("HTML分析: 网站模板导航项:", templatesLink ? "存在" : "不存在");
    if (templatesLink) {
        console.log(`HTML分析: 网站模板导航项data-section="${templatesLink.getAttribute('data-section')}"`);
    }
    
    const templatesSection = document.getElementById('website-templates');
    console.log("HTML分析: 网站模板区域(ID=website-templates):", templatesSection ? "存在" : "不存在");
    
    const rawTemplatesSection = document.getElementById('templates');
    console.log("HTML分析: 网站模板区域(ID=templates):", rawTemplatesSection ? "存在" : "不存在");
    
    // 搜索相关元素
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchClearBtn = document.getElementById('searchClearBtn'); // 可能存在的清除按钮
    
    // 当前激活的导航项
    let activeSection = 'dev-tools';
    
    // 导航ID映射表 - 将导航项data-section映射到实际的内容ID
    const sectionIdMap = {
        'research': 'research',
        'dev-tools': 'dev-tools',
        'website': 'website',
        'seo': 'seo',
        'ai': 'ai',
        'community': 'community',
        'templates': 'website-templates',
        'browser-extensions': 'browser-extensions',
        'design-tools': 'design-tools'
    };
    
    // 检查映射表是否正确
    console.log("main.js中的sectionIdMap:", sectionIdMap);
    console.log("检查 'templates' 映射:", sectionIdMap['templates']);
    
    // 工具数据ID映射表 - 将导航项ID映射到对应的工具数据
    const toolsDataMap = {
        'research': 'researchTools',
        'dev-tools': 'devTools',
        'website': 'websiteTools',
        'seo': 'seoTools',
        'ai': 'aiTools',
        'community': 'communityPlatforms',
        'templates': 'websiteTemplates',
        'browser-extensions': 'browserExtensions',
        'design-tools': 'designTools'
    };
    
    // 初始化页面状态 - 确保页面加载时状态正确
    // 找到当前激活的导航项
    const activeNavLink = document.querySelector('.nav-link.active');
    if (activeNavLink) {
        activeSection = activeNavLink.getAttribute('data-section') || 'dev-tools';
    }
    
    // 执行一次重置搜索操作，确保初始状态正确
    resetSearch();
    
    // 导航切换功能
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 如果搜索框不为空，先清空搜索
            if (searchInput && searchInput.value.trim() !== '') {
                searchInput.value = '';
                resetSearch();
            }
            
            // 更新导航项激活状态
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            
            // 获取要显示的部分
            const sectionId = this.getAttribute('data-section');
            console.log(`导航点击: 选择section="${sectionId}"`);
            
            if (sectionId) {
                activeSection = sectionId;
                
                // 更新标题和描述
                const linkText = this.textContent.trim();
                if (contentHeaderTitle) contentHeaderTitle.textContent = linkText;
                
                // 根据部分设置描述
                if (contentHeaderDesc) {
                    if (sectionId === 'dev-tools') {
                        contentHeaderDesc.textContent = '提升开发效率的必备工具';
                    } else if (sectionId === 'research') {
                        contentHeaderDesc.textContent = '了解市场和用户需求的工具';
                    } else if (sectionId === 'website') {
                        contentHeaderDesc.textContent = '帮助快速构建网站的资源';
                    } else if (sectionId === 'seo') {
                        contentHeaderDesc.textContent = '优化网站排名和推广的工具';
                    } else if (sectionId === 'ai') {
                        contentHeaderDesc.textContent = 'AI辅助工具和创新资源';
                    } else if (sectionId === 'community') {
                        contentHeaderDesc.textContent = '独立开发者社区和学习资源';
                    } else if (sectionId === 'templates') {
                        contentHeaderDesc.textContent = '优质网站模板和组件库';
                    } else if (sectionId === 'browser-extensions') {
                        contentHeaderDesc.textContent = '提高开发效率的浏览器插件';
                    } else if (sectionId === 'design-tools') {
                        contentHeaderDesc.textContent = '高效设计工具和视觉资源';
                    }
                }
                
                // 获取实际的section ID
                const actualSectionId = sectionIdMap[sectionId] || sectionId;
                console.log(`导航点击: 映射后实际ID="${actualSectionId}"`);
                
                // 隐藏所有部分，然后显示当前部分
                sections.forEach(section => section.classList.remove('active'));
                const targetSection = document.getElementById(actualSectionId);
                if (targetSection) {
                    targetSection.classList.add('active');
                    console.log(`导航点击: 成功激活section="${actualSectionId}"`);
                } else {
                    console.warn(`未找到ID为${actualSectionId}的分类section`);
                    console.error(`导航错误: 无法找到ID为"${actualSectionId}"的元素，请检查HTML结构和sectionIdMap映射`);
                }
            }
        });
    });
    
    // 监听搜索框输入变化 - 增强版
    if (searchInput) {
        // 初始时隐藏清除按钮
        if (searchClearBtn) {
            searchClearBtn.style.display = searchInput.value.trim() === '' ? 'none' : 'flex';
        }

        // 监听输入事件
        searchInput.addEventListener('input', function() {
            // 根据搜索框是否有内容来显示或隐藏清除按钮
            if (searchClearBtn) {
                searchClearBtn.style.display = this.value.trim() === '' ? 'none' : 'flex';
            }
            
            if (this.value.trim() === '') {
                resetSearch();
            }
        });
        
        // 监听搜索框失去焦点事件，作为额外的保障
        searchInput.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                resetSearch();
            }
        });
        
        // 添加清除事件，当搜索框被手动清空时
        searchInput.addEventListener('change', function() {
            if (this.value.trim() === '') {
                resetSearch();
            }
        });
    }
    
    // 如果有清除按钮，添加点击事件
    if (searchClearBtn) {
        searchClearBtn.addEventListener('click', function() {
            if (searchInput) {
                searchInput.value = '';
                searchClearBtn.style.display = 'none';
                resetSearch();
                // 聚焦回搜索框
                searchInput.focus();
            }
        });
    }
    
    // 搜索按钮点击事件
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            performSearch();
        });
    }
    
    // 搜索框按回车搜索
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // 执行搜索
    function performSearch() {
        if (!searchInput) return;
        
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm.trim() === '') {
            resetSearch();
            return;
        }
        
        // 搜索工具卡片
        const toolCards = document.querySelectorAll('.tool-card');
        let foundCount = 0;
        
        // 显示所有分类，以便搜索所有工具
        sections.forEach(section => section.classList.add('active'));
        
        toolCards.forEach(card => {
            const toolName = card.querySelector('h3') ? card.querySelector('h3').textContent.toLowerCase() : '';
            const toolDesc = card.querySelector('p') ? card.querySelector('p').textContent.toLowerCase() : '';
            const toolTag = card.querySelector('.tool-tag') ? card.querySelector('.tool-tag').textContent.toLowerCase() : '';
            
            if (toolName.includes(searchTerm) || toolDesc.includes(searchTerm) || toolTag.includes(searchTerm)) {
                card.style.display = 'block';
                card.classList.add('highlight');
                foundCount++;
            } else {
                card.style.display = 'none';
                card.classList.remove('highlight');
            }
        });
        
        // 更新标题显示
        if (contentHeaderTitle) {
            contentHeaderTitle.textContent = `搜索结果: ${foundCount} 个匹配`;
        }
        
        if (contentHeaderDesc) {
            contentHeaderDesc.textContent = `搜索 "${searchInput.value}" 的结果`;
        }
        
        // 如果有结果，滚动到第一个匹配项
        if (foundCount > 0) {
            const firstMatch = document.querySelector('.tool-card.highlight');
            if (firstMatch) {
                firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
        
        // 记录搜索事件
        if (typeof gtag === 'function') {
            gtag('event', 'search', {
                'search_term': searchTerm,
                'results_count': foundCount
            });
        }
    }
    
    // 重置搜索状态，恢复到搜索前的导航状态 - 增强版
    function resetSearch() {
        console.log('重置搜索状态');
        
        try {
            // 移除所有工具卡片的高亮和隐藏状态
            document.querySelectorAll('.tool-card').forEach(card => {
                card.classList.remove('highlight');
                card.style.display = 'block';
            });
            
            // 获取实际的section ID
            const actualSectionId = sectionIdMap[activeSection] || activeSection;
            console.log(`重置搜索: 当前激活的导航项="${activeSection}", 映射后ID="${actualSectionId}"`);
            
            // 恢复到当前激活的导航项 - 先确保所有section都不活跃
            sections.forEach(section => section.classList.remove('active'));
            
            // 然后只激活当前选中的section
            const activeElement = document.getElementById(actualSectionId);
            if (activeElement) {
                activeElement.classList.add('active');
                console.log(`重置搜索: 成功激活section="${actualSectionId}"`);
            } else {
                console.warn(`重置搜索时未找到ID为${actualSectionId}的分类section`);
                console.error(`重置搜索错误: 无法找到ID="${actualSectionId}"的元素，将尝试使用备用方案`);
                // 默认显示第一个section作为后备
                if (sections.length > 0) {
                    sections[0].classList.add('active');
                    console.log(`重置搜索: 使用第一个section="${sections[0].id}"作为备用`);
                    // 更新activeSection以保持一致性
                    const firstSectionId = sections[0].id;
                    // 查找firstSectionId对应的数据部分ID
                    for (const [key, value] of Object.entries(sectionIdMap)) {
                        if (value === firstSectionId) {
                            activeSection = key;
                            console.log(`重置搜索: 已更新activeSection="${activeSection}"`);
                            break;
                        }
                    }
                }
            }
            
            // 更新导航项的激活状态
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`.nav-link[data-section="${activeSection}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
                console.log(`重置搜索: 激活导航项data-section="${activeSection}"`);
            } else if (navLinks.length > 0) {
                // 如果找不到对应的导航项，激活第一个作为后备
                navLinks[0].classList.add('active');
                activeSection = navLinks[0].getAttribute('data-section') || 'dev-tools';
                console.log(`重置搜索: 使用第一个导航项data-section="${activeSection}"作为备用`);
            }
            
            // 恢复标题和描述
            if (activeLink && contentHeaderTitle && contentHeaderDesc) {
                const linkText = activeLink.textContent.trim();
                contentHeaderTitle.textContent = linkText;
                
                // 根据激活的部分设置描述
                if (activeSection === 'dev-tools') {
                    contentHeaderDesc.textContent = '提升开发效率的必备工具';
                } else if (activeSection === 'research') {
                    contentHeaderDesc.textContent = '了解市场和用户需求的工具';
                } else if (activeSection === 'website') {
                    contentHeaderDesc.textContent = '帮助快速构建网站的资源';
                } else if (activeSection === 'seo') {
                    contentHeaderDesc.textContent = '优化网站排名和推广的工具';
                } else if (activeSection === 'ai') {
                    contentHeaderDesc.textContent = 'AI辅助工具和创新资源';
                } else if (activeSection === 'community') {
                    contentHeaderDesc.textContent = '独立开发者社区和学习资源';
                } else if (activeSection === 'templates') {
                    contentHeaderDesc.textContent = '优质网站模板和组件库';
                } else if (activeSection === 'browser-extensions') {
                    contentHeaderDesc.textContent = '提高开发效率的浏览器插件';
                } else if (activeSection === 'design-tools') {
                    contentHeaderDesc.textContent = '高效设计工具和视觉资源';
                }
            } else {
                console.warn('恢复标题和描述时出现问题');
                // 如果找不到activeLink，尝试使用第一个导航链接
                if (navLinks.length > 0 && contentHeaderTitle) {
                    contentHeaderTitle.textContent = navLinks[0].textContent.trim();
                    if (contentHeaderDesc) {
                        contentHeaderDesc.textContent = '提升开发效率的必备工具';
                    }
                }
            }
        } catch (error) {
            console.error('重置搜索时出错:', error);
        }
    }

    // 添加网站模版渲染
    renderWebsiteTemplates();
});

// 添加HTML结构调试函数
function debugHtmlStructure() {
    console.log("%c 检查HTML结构中的工具卡片容器 ", "background: #ff6b6b; color: white; font-size: 16px; padding: 5px;");
    
    // 检查主要的工具卡片容器
    const containersToCheck = [
        'dev-tools', 'dev-tools-grid',
        'research-tools', 'research-tools-grid',
        'seo-tools', 'seo-tools-grid',
        'ai-tools', 'ai-tools-grid',
        'community-platforms', 'community-platforms-grid',
        'website-templates', 'navigation-templates', 'open-source-templates',
        'browser-extensions', 'browser-extensions-grid',
        'design-tools', 'design-tools-grid'
    ];
    
    containersToCheck.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            console.log(`找到ID为 "${id}" 的元素:`, element.tagName, '包含子元素数:', element.children.length);
            // 检查是否已经包含工具卡片
            const cards = element.querySelectorAll('.tool-card');
            if (cards.length > 0) {
                console.warn(`注意: ID="${id}"的元素已经包含${cards.length}个工具卡片，可能导致重复渲染`);
            }
        } else {
            console.log(`未找到ID为 "${id}" 的元素`);
        }
    });
}

// 初始化所有工具卡片
function initializeToolsCards() {
    try {
        console.log('开始初始化工具卡片...');
        
        // 开发工具部分 - 明确指定只渲染一次，选择正确的容器
        const devToolsGrid = document.getElementById('dev-tools-grid');
        if (devToolsGrid) {
            console.log('使用dev-tools-grid渲染开发工具');
            devToolsGrid.innerHTML = ''; // 再次确保容器为空
            renderToolsSection('dev-tools-grid', window.toolsData.devTools);
        } else {
            const devTools = document.getElementById('dev-tools');
            if (devTools) {
                console.log('找不到dev-tools-grid，退而求其次使用dev-tools');
                // 查找dev-tools下可能的工具网格
                const gridElement = devTools.querySelector('.tools-grid');
                if (gridElement) {
                    console.log('在dev-tools中找到.tools-grid元素，将用它来渲染工具');
                    gridElement.innerHTML = '';
                    gridElement.id = 'dev-tools-grid-dynamic'; // 动态设置ID
                    renderToolsSection('dev-tools-grid-dynamic', window.toolsData.devTools);
                } else {
                    console.log('直接在dev-tools中渲染开发工具');
                    renderToolsSection('dev-tools', window.toolsData.devTools);
                }
            } else {
                console.error('找不到任何可以渲染开发工具的容器!');
            }
        }
        
        // 添加需求收集和关键词调研工具 - 确认正确的ID
        if (document.getElementById('research-tools-grid')) {
            renderToolsSection('research-tools-grid', window.toolsData.researchTools);
        } else if (document.getElementById('research-tools')) {
            renderToolsSection('research-tools', window.toolsData.researchTools);
        }
        
        // 添加SEO工具 - 确认正确的ID
        if (document.getElementById('seo-tools-grid')) {
            renderToolsSection('seo-tools-grid', window.toolsData.seoTools);
        } else if (document.getElementById('seo-tools')) {
            renderToolsSection('seo-tools', window.toolsData.seoTools);
        }
        
        // 添加AI工具 - 确认正确的ID
        if (document.getElementById('ai-tools-grid')) {
            renderToolsSection('ai-tools-grid', window.toolsData.aiTools);
        } else if (document.getElementById('ai-tools')) {
            renderToolsSection('ai-tools', window.toolsData.aiTools);
        }
        
        // 添加社区平台 - 确认正确的ID
        if (document.getElementById('community-platforms-grid')) {
            renderToolsSection('community-platforms-grid', window.toolsData.communityPlatforms);
        } else if (document.getElementById('community-platforms')) {
            renderToolsSection('community-platforms', window.toolsData.communityPlatforms);
        }
        
        // 注意：websiteTemplates是一个包含两个数组的对象，不是数组
        // 使用专门的renderWebsiteTemplates函数来处理它，而不是这里
        
        // 添加浏览器插件分类渲染
        console.log('浏览器插件数据:', window.toolsData.browserExtensions);
        renderToolsSection('browser-extensions-grid', window.toolsData.browserExtensions);
        
        // 添加设计工具分类渲染
        renderToolsSection('design-tools-grid', window.toolsData.designTools);
        
        console.log('工具卡片初始化完成');
    } catch (error) {
        console.error('初始化工具卡片时出错:', error);
    }
}

// 渲染工具部分
function renderToolsSection(sectionId, tools) {
    console.log(`尝试渲染section: ${sectionId}`);
    const section = document.getElementById(sectionId);
    if (!section) {
        console.warn(`未找到ID为${sectionId}的元素`);
        return;
    }
    
    // 添加清空容器的代码，解决重复渲染问题
    section.innerHTML = '';
    
    if (!tools || !Array.isArray(tools)) {
        console.warn(`工具数据无效: ${sectionId}`);
        return;
    }
    
    console.log(`为${sectionId}渲染${tools.length}个工具`);
    tools.forEach(tool => {
        if (tool) {
            const toolCard = createToolCard(tool);
            section.appendChild(toolCard);
        }
    });
}

// 创建工具卡片
function createToolCard(tool) {
    if (!tool || !tool.name || !tool.url) {
        console.warn('无效的工具数据');
        return document.createElement('div');
    }
    
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.dataset.id = tool.id || '';
    
    card.innerHTML = `
        <h3>${tool.name}</h3>
        <p>${tool.description || ''}</p>
        <div class="tool-links">
            <a href="${tool.url}" class="visit-btn" target="_blank" onclick="trackToolClick('${tool.name}', '${tool.tag || ''}')">访问网站</a>
            <span class="tool-tag">${tool.tag || '工具'}</span>
        </div>
    `;
    
    return card;
}

function renderWebsiteTemplates() {
    try {
        console.log('开始渲染网站模板...');
        const navigationTemplatesSection = document.getElementById('navigation-templates');
        const openSourceTemplatesSection = document.getElementById('open-source-templates');
        
        if (!window.toolsData || !window.toolsData.websiteTemplates) {
            console.error('无法找到websiteTemplates数据');
            return;
        }
        
        console.log('websiteTemplates数据:', window.toolsData.websiteTemplates);
        
        if (navigationTemplatesSection && window.toolsData.websiteTemplates.navigationTemplates) {
            // 清空导航模板容器
            navigationTemplatesSection.innerHTML = '';
            
            window.toolsData.websiteTemplates.navigationTemplates.forEach(template => {
                if (template) {
                    const templateCard = createToolCard(template);
                    navigationTemplatesSection.appendChild(templateCard);
                }
            });
        } else {
            console.warn('未找到navigation-templates区域或数据');
        }
        
        if (openSourceTemplatesSection && window.toolsData.websiteTemplates.openSourceTemplates) {
            // 清空开源模板容器
            openSourceTemplatesSection.innerHTML = '';
            
            window.toolsData.websiteTemplates.openSourceTemplates.forEach(template => {
                if (template) {
                    const templateCard = createToolCard(template);
                    openSourceTemplatesSection.appendChild(templateCard);
                }
            });
        } else {
            console.warn('未找到open-source-templates区域或数据');
        }
        
        console.log('网站模板渲染完成');
    } catch (error) {
        console.error('渲染网站模板时出错:', error);
    }
}

// 添加强制清理函数，清除所有可能的工具容器
function clearAllToolContainers() {
    console.log("%c 强制清理所有工具容器，防止重复渲染 ", "background: #ff4757; color: white; font-size: 16px; padding: 5px;");
    
    // 所有可能包含工具卡片的容器
    const allPossibleContainers = [
        // 开发工具相关容器
        'dev-tools', 'dev-tools-grid',
        // 其他所有可能的容器
        'research-tools', 'research-tools-grid',
        'seo-tools', 'seo-tools-grid',
        'ai-tools', 'ai-tools-grid',
        'community-platforms', 'community-platforms-grid',
        'website-templates', 'navigation-templates', 'open-source-templates',
        'browser-extensions', 'browser-extensions-grid',
        'design-tools', 'design-tools-grid'
    ];
    
    // 清空所有可能的容器
    allPossibleContainers.forEach(id => {
        const container = document.getElementById(id);
        if (container) {
            // 保留容器的原始HTML结构（如标题等），仅清除工具卡片
            const toolCards = container.querySelectorAll('.tool-card');
            if (toolCards.length > 0) {
                console.log(`清理容器 "${id}": 移除 ${toolCards.length} 个工具卡片`);
                toolCards.forEach(card => card.remove());
            }
            
            // 如果是grid容器，则完全清空
            if (id.endsWith('-grid')) {
                container.innerHTML = '';
                console.log(`完全清空grid容器 "${id}"`);
            }
        }
    });
}