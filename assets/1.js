function showline() {
    var targetUrl = 'https://7ttb4.bemobtracks.com/click';
    
    // Safari兼容性改进：使用多种跳转方式确保兼容性
    try {
        // 方法1: 直接使用 window.location.href
        window.location.href = targetUrl;
        
    } catch (e) {
        console.log('跳转异常:', e);
        
        // 方法2: 使用 window.location.assign (Safari更兼容)
        try {
            window.location.assign(targetUrl);
        } catch (e2) {
            // 方法3: 使用 window.open 作为最后备选
            try {
                window.open(targetUrl, '_self');
            } catch (e3) {
                // 方法4: 创建隐藏链接点击跳转
                var link = document.createElement('a');
                link.href = targetUrl;
                link.target = '_self';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    }
}