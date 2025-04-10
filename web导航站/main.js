/**
 * 导航站辅助脚本 - SEO优化版
 */

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

// 在页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
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
