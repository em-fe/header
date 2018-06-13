const base = process.env.GH ? '/header/' : '/'

module.exports = {
  title: '头部',
  base,
  head: [
    ['link', { rel: 'header', href: `/logo.png` }]
  ],
  dest: './docs',
  serviceWorker: true,
  port: 8880,
  themeConfig: {
    repo: 'em-fe/header',
    editLinks: false,
    lastUpdated: '上次更新', // string | boolean
    searchMaxSuggestions: 5,
    docsDir: '',
    editLinkText: '帮助我们改善此页面！',
    sidebar: [
      '/',
      '/header/zh-cn',
    ]
  }
}
