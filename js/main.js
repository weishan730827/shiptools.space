// 不再使用import语句，改用全局变量
// import toolsData from './data.js';

// 添加调试输出,用于跟踪脚本执行
console.log("main.js开始执行...");

// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM加载完成，初始化工具数据...");
    console.log("全局toolsData对象:", window.toolsData);
    
    // 确保toolsData可用
    if (!window.toolsData) {
        console.error("toolsData未定义！请检查data.js是否正确加载");
        return;
    }
    
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

// 初始化所有工具卡片
function initializeToolsCards() {
    try {
        console.log('开始初始化工具卡片...');
        
        // 添加需求收集和关键词调研工具
        renderToolsSection('research-tools', window.toolsData.researchTools);
        
        // 添加开发者工具
        renderToolsSection('dev-tools', window.toolsData.devTools);
        
        // 添加SEO工具
        renderToolsSection('seo-tools', window.toolsData.seoTools);
        
        // 添加AI工具
        renderToolsSection('ai-tools', window.toolsData.aiTools);
        
        // 添加社区平台
        renderToolsSection('community-platforms', window.toolsData.communityPlatforms);
        
        // 注意：websiteTemplates是一个包含两个数组的对象，不是数组
        // 使用专门的renderWebsiteTemplates函数来处理它，而不是这里
        // renderToolsSection('website-templates', window.toolsData.websiteTemplates);
        
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