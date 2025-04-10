// 导入工具数据
import toolsData from './data.js';

// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化工具卡片
    initializeToolsCards();
    
    // 搜索功能
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', function() {
        performSearch(searchInput.value);
    });
    
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });
});

// 初始化所有工具卡片
function initializeToolsCards() {
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
}

// 渲染工具部分
function renderToolsSection(sectionId, tools) {
    const section = document.getElementById(sectionId);
    if (!section) {
        console.warn(`未找到ID为${sectionId}的元素`);
        return;
    }
    
    tools.forEach(tool => {
        const toolCard = createToolCard(tool);
        section.appendChild(toolCard);
    });
}

// 创建工具卡片
function createToolCard(tool) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.dataset.id = tool.id;
    
    card.innerHTML = `
        <h3>${tool.name}</h3>
        <p>${tool.description}</p>
        <div class="tool-links">
            <a href="${tool.url}" class="visit-btn" target="_blank">访问网站</a>
            <span class="tool-tag">${tool.tag}</span>
        </div>
    `;
    
    return card;
}

// 执行搜索
function performSearch(query) {
    query = query.toLowerCase().trim();
    
    if (!query) {
        resetSearch();
        return;
    }
    
    let foundCount = 0;
    
    // 在所有类别中搜索
    searchInCategory('research-tools', toolsData.researchTools, query, result => {
        foundCount += result;
    });
    
    searchInCategory('dev-tools', toolsData.devTools, query, result => {
        foundCount += result;
    });
    
    searchInCategory('seo-tools', toolsData.seoTools, query, result => {
        foundCount += result;
    });
    
    searchInCategory('ai-tools', toolsData.aiTools, query, result => {
        foundCount += result;
    });
    
    searchInCategory('website-templates', toolsData.websiteTemplates, query, result => {
        foundCount += result;
    });
    
    searchInCategory('community-platforms', toolsData.communityPlatforms, query, result => {
        foundCount += result;
    });
    
    // 显示搜索结果提示
    const resultMessage = document.createElement('div');
    resultMessage.className = 'search-result-message';
    
    if (foundCount === 0) {
        resultMessage.textContent = `未找到与 "${query}" 相关的工具。`;
    } else {
        resultMessage.textContent = `找到 ${foundCount} 个与 "${query}" 相关的工具。`;
        // 滚动到第一个匹配结果
        const firstMatch = document.querySelector('.highlight');
        if (firstMatch) {
            firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    
    // 添加或替换结果消息
    const oldMessage = document.querySelector('.search-result-message');
    if (oldMessage) {
        oldMessage.parentNode.replaceChild(resultMessage, oldMessage);
    } else {
        document.querySelector('.search-box').appendChild(resultMessage);
    }
}

// 在特定类别中搜索
function searchInCategory(sectionId, tools, query, callback) {
    const section = document.getElementById(sectionId);
    if (!section) {
        console.warn(`未找到ID为${sectionId}的元素`);
        callback(0);
        return 0;
    }
    
    const cards = section.querySelectorAll('.tool-card');
    let foundCount = 0;
    
    tools.forEach((tool, index) => {
        if (index >= cards.length) return;
        
        const card = cards[index];
        const matchName = tool.name.toLowerCase().includes(query);
        const matchDesc = tool.description.toLowerCase().includes(query);
        const matchTag = tool.tag.toLowerCase().includes(query);
        
        if (matchName || matchDesc || matchTag) {
            card.classList.add('highlight');
            card.style.display = 'block';
            foundCount++;
        } else {
            card.classList.remove('highlight');
            card.style.display = 'none';
        }
    });
    
    // 如果类别中没有找到匹配项，隐藏整个类别
    const categoryContainer = section.closest('.category-container');
    if (categoryContainer) {
        categoryContainer.style.display = foundCount > 0 ? 'block' : 'none';
    }
    
    callback(foundCount);
    return foundCount;
}

// 重置搜索结果
function resetSearch() {
    // 显示所有类别和卡片
    document.querySelectorAll('.category-container').forEach(container => {
        container.style.display = 'block';
    });
    
    document.querySelectorAll('.tool-card').forEach(card => {
        card.classList.remove('highlight');
        card.style.display = 'block';
    });
    
    // 移除搜索结果消息
    const resultMessage = document.querySelector('.search-result-message');
    if (resultMessage) {
        resultMessage.remove();
    }
} 