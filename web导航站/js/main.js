// 导入工具数据
import toolsData from './data.js';

// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化工具卡片
    initializeToolsCards();
    
    // 导航菜单项点击事件
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.category-section');
    const contentHeaderTitle = document.querySelector('.content-header-left h2');
    const contentHeaderDesc = document.querySelector('.content-header-left p');
    
    // 搜索相关元素
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    // 当前激活的导航项
    let activeSection = 'dev-tools';
    
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
                    }
                }
                
                // 隐藏所有部分，然后显示当前部分
                sections.forEach(section => section.classList.remove('active'));
                const targetSection = document.getElementById(sectionId);
                if (targetSection) {
                    targetSection.classList.add('active');
                }
            }
        });
    });
    
    // 监听搜索框输入变化
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            if (this.value.trim() === '') {
                resetSearch();
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
    
    // 重置搜索状态，恢复到搜索前的导航状态
    function resetSearch() {
        // 移除所有工具卡片的高亮和隐藏状态
        document.querySelectorAll('.tool-card').forEach(card => {
            card.classList.remove('highlight');
            card.style.display = 'block';
        });
        
        // 恢复到当前激活的导航项
        sections.forEach(section => section.classList.remove('active'));
        const activeElement = document.getElementById(activeSection);
        if (activeElement) {
            activeElement.classList.add('active');
        }
        
        // 找到当前激活的导航链接
        const activeLink = document.querySelector(`.nav-link[data-section="${activeSection}"]`);
        if (activeLink && contentHeaderTitle && contentHeaderDesc) {
            // 恢复标题和描述
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
            }
        }
    }
});

// 初始化所有工具卡片
function initializeToolsCards() {
    try {
        // 添加需求收集和关键词调研工具
        renderToolsSection('research-tools', toolsData.researchTools);
        
        // 添加开发者工具
        renderToolsSection('dev-tools', toolsData.devTools);
        
        // 添加SEO工具
        renderToolsSection('seo-tools', toolsData.seoTools);
        
        // 添加AI工具
        renderToolsSection('ai-tools', toolsData.aiTools);
        
        // 添加社区平台
        renderToolsSection('community-platforms', toolsData.communityPlatforms);
        
        // 新增模板分类渲染
        renderToolsSection('website-templates', toolsData.websiteTemplates);
    } catch (error) {
        console.error('初始化工具卡片时出错:', error);
    }
}

// 渲染工具部分
function renderToolsSection(sectionId, tools) {
    const section = document.getElementById(sectionId);
    if (!section) {
        console.warn(`未找到ID为${sectionId}的元素`);
        return;
    }
    
    if (!tools || !Array.isArray(tools)) {
        console.warn(`工具数据无效: ${sectionId}`);
        return;
    }
    
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