/**
 * 导航站主脚本 - 工具数据加载与初始化
 */

// 不再使用import语句
// 直接使用全局变量toolsData

// 工具点击跟踪函数
function trackToolClick(toolName, category) {
    // 如果Google Analytics可用
    if (typeof gtag === 'function') {
        gtag('event', 'tool_click', {
            'tool_name': toolName,
            'category': category
        });
    }
    
    console.log(`工具点击: ${toolName}, 分类: ${category}`);
}

// 使函数全局可用，解决内联onclick问题
window.trackToolClick = trackToolClick;

// 在页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('页面加载完成，初始化工具数据');
    
    // 初始化所有工具数据
    initializeToolsCards();
    
    // 为所有工具卡片的访问按钮添加点击跟踪
    const toolLinks = document.querySelectorAll('.tool-card .visit-btn');
    
    toolLinks.forEach(link => {
        const toolCard = link.closest('.tool-card');
        const toolName = toolCard.querySelector('h3').innerText;
        const toolCategory = toolCard.querySelector('.tool-tag').innerText;
        
        // 添加点击事件监听器
        link.addEventListener('click', function(e) {
            trackToolClick(toolName, toolCategory);
        });
    });
});

// 初始化所有工具卡片
function initializeToolsCards() {
    try {
        console.log('开始初始化工具卡片...');
        
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
        
        // 添加模板分类渲染
        renderToolsSection('website-templates', toolsData.websiteTemplates);
        
        // 添加浏览器插件分类渲染
        renderToolsSection('browser-extensions-grid', toolsData.browserExtensions);
        
        // 添加设计工具分类渲染
        renderToolsSection('design-tools-grid', toolsData.designTools);
        
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
