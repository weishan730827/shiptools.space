<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap - 独立开发者导航站</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 14px;
            color: #333333;
            background: #f8f9fa;
            margin: 0;
            padding: 0;
          }
          .header {
            background: linear-gradient(135deg, #228B22, #FF4500);
            color: white;
            padding: 20px;
            text-align: center;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
          .header h1 {
            margin: 0;
            padding: 10px 0;
            font-size: 28px;
          }
          .container {
            max-width: 1200px;
            margin: 20px auto;
            padding: 20px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          }
          .intro {
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #eee;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
          }
          th {
            background-color: #228B22;
            color: white;
            padding: 12px;
            text-align: left;
          }
          td {
            padding: 12px;
            border-bottom: 1px solid #eee;
            vertical-align: top;
          }
          tr:hover {
            background-color: #f5f5f5;
          }
          a {
            color: #FF7E00;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
            color: #FF4500;
          }
          .priority-high {
            background-color: #FFF3CD;
          }
          .priority-medium {
            background-color: #F8F9FA;
          }
          .priority-low {
            background-color: #F8F9FA;
          }
          .footer {
            text-align: center;
            padding: 10px;
            font-size: 12px;
            color: #777;
            margin-top: 20px;
          }
          .back-link {
            display: inline-block;
            margin-top: 20px;
            background-color: #FF7E00;
            color: white;
            padding: 8px 16px;
            border-radius: 4px;
            transition: background-color 0.3s;
          }
          .back-link:hover {
            background-color: #FF4500;
            text-decoration: none;
            color: white;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>网站地图 - 独立开发者导航站</h1>
          <p>此页面列出了所有可供搜索引擎爬取的站点页面</p>
        </div>
        <div class="container">
          <div class="intro">
            <p>此站点地图包含 <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> 个URL。</p>
            <a href="https://shiptools.space/" class="back-link">返回网站首页</a>
          </div>
          <table>
            <tr>
              <th>URL</th>
              <th>最后修改</th>
              <th>更新频率</th>
              <th>优先级</th>
            </tr>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <xsl:variable name="priorityClass">
                <xsl:choose>
                  <xsl:when test="sitemap:priority &gt;= 0.8">priority-high</xsl:when>
                  <xsl:when test="sitemap:priority &gt;= 0.5">priority-medium</xsl:when>
                  <xsl:otherwise>priority-low</xsl:otherwise>
                </xsl:choose>
              </xsl:variable>
              <tr class="{$priorityClass}">
                <td>
                  <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                </td>
                <td>
                  <xsl:value-of select="sitemap:lastmod"/>
                </td>
                <td>
                  <xsl:value-of select="sitemap:changefreq"/>
                </td>
                <td>
                  <xsl:value-of select="sitemap:priority"/>
                </td>
              </tr>
            </xsl:for-each>
          </table>
        </div>
        <div class="footer">
          <p>生成于 <xsl:value-of select="format-dateTime(current-dateTime(), '[Y]-[M]-[D] [H]:[m]:[s]')"/></p>
          <p>© 2024 独立开发者导航站 - 由 Shiptools.space 提供</p>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet> 