// 处理 sitemap.xml 请求的函数
export async function onRequest(context) {
  // 从文件中读取 sitemap.xml 内容
  try {
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
      <loc>https://shiptools.space/</loc>
      <lastmod>2024-03-29</lastmod>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
   </url>
   <url>
      <loc>https://shiptools.space/nav-tools.html</loc>
      <lastmod>2024-03-29</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
   </url>
   <url>
      <loc>https://shiptools.space/complete-nav.html</loc>
      <lastmod>2024-03-29</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
   </url>
   <url>
      <loc>https://shiptools.space/nav-tools-optimized.html</loc>
      <lastmod>2024-03-29</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
   </url>
</urlset>`;

    // 返回 XML 内容，并设置正确的内容类型
    return new Response(sitemapContent, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=86400"
      }
    });
  } catch (error) {
    // 如果出现错误，返回错误信息
    return new Response(`Error serving sitemap: ${error.message}`, { status: 500 });
  }
} 