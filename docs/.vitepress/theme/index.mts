import { h } from 'vue'
import type { App } from 'vue'
import type { Router } from 'vitepress'
import DefaultTheme from 'vitepress/theme'



import './style/index.css';

//图片缩放

import mediumZoom from 'medium-zoom';
import { onMounted, nextTick } from 'vue';
import { useRoute } from 'vitepress';

//聚光灯

import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
//开关
const ENABLE_ENHANCED_READABILITIES = false; // 设置为 false 即禁用显示


// 彩虹背景动画样式
import { watch } from 'vue';
let homePageStyle: HTMLStyleElement | undefined


export default {
  extends: DefaultTheme,
  //图片缩放
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },


  //聚光灯
  Layout: () => {
  return h(DefaultTheme.Layout, null, {
    'nav-bar-content-after': () =>
      ENABLE_ENHANCED_READABILITIES ? h(NolebaseEnhancedReadabilitiesMenu) : null,
    'nav-screen-content-after': () =>
      ENABLE_ENHANCED_READABILITIES ? h(NolebaseEnhancedReadabilitiesScreenMenu) : null,
  })
},


 enhanceApp({ app, router }: { app: App; router: Router }) {

    // 彩虹背景动画样式
    if (typeof window !== 'undefined') {
      watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(location.pathname === '/'),
        { immediate: true },
      )
    }

  },

}
// 彩虹背景动画样式
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return

    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  } else {
    if (!homePageStyle) return

    homePageStyle.remove()
    homePageStyle = undefined
  }
}