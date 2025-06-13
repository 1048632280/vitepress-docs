import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
/*
 * 配置聚光灯
*/
  vite: { 
    optimizeDeps: {
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client', 
        'vitepress', 
        '@nolebase/ui', 
      ], 
    },
    ssr: { 
      noExternal: [ 
        // 如果还有别的依赖需要添加的话，并排填写和配置到这里即可 //
        '@nolebase/vitepress-plugin-enhanced-readabilities', 
        '@nolebase/ui', 
      ], 
    }, 
  }, 
/*
 *  配置主要功能
*/

  title: "Minecraft Server",
  description: "MC生电服务器",
  lang: "zh-CN",
  locales: {
    "/": {
      label: "简体中文",
      lang: "zh-CN",
    },
  },
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
  ],
  themeConfig: {
    // 导航栏
    nav: [
      { text: '主页', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    //侧边栏
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/1048632280/vitepress-docs' }
    ],

    //移动端主题切换的文字 Appearance
    darkModeSwitchLabel: "切换主题",
    //侧边栏文字更改(移动端)
    sidebarMenuLabel: '目录',

    //返回顶部文字修改(移动端)
    returnToTopLabel: '返回顶部',

    // 文章翻页
    docFooter: {
      prev: "上一篇", //Next page
      next: "下一篇", //Previous page
    },
    // 当前页面 On this page
    outlineTitle: "页面内容",
    // 搜索栏
    search: {
      provider: "local",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025 All rights reserved. ",
    },
    //404页面的配置
    notFound: {
      title: "页面未找到",
      quote: "哎呀，您好像迷失在网络的小胡同里啦，别着急，赶紧回头是岸！",
      linkText: "返回首页",
    },
        // 最后更新日期
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

  }
})
