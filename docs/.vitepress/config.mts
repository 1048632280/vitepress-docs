import { defineConfig } from 'vitepress'
import { generateSidebar } from "vitepress-sidebar"
import markdownItTaskCheckbox from 'markdown-it-task-checkbox'
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
 *  配置TODO
*/

  markdown: {
    config: (md) => {
      md.use(markdownItTaskCheckbox) //todo
    }
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
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  themeConfig: {
    // 导航栏
    nav: [
      { text: '主页', link: '/' },
      { text: '服务器', link: '/introduction/info' }
    ],
    //侧边栏
    sidebar: generateSidebar({
      // 侧边栏的根目录，默认为docs
      documentRootPath: "/docs",
      // 使用h1的标题作为侧边栏的标题
      useTitleFromFileHeading: true,
      // 使用文件夹的index.md的标题
      useFolderTitleFromIndexFile: true,
      // 指向文件夹的链接
      useFolderLinkFromIndexFile: false,
      // 根据md文件的order进行排序
      sortMenusByFrontmatterOrder: true,
      // 排序之后将不是文件夹的放后面
      sortFolderTo: "top",
      // 菜单展开功能
      collapsed: false,
  }),
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
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

  }
})
