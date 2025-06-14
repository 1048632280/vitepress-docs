
# 文档站
===
## 本地开发
===
> 仅为本站开发使用
===
1. 即时演示
```bash
npm run docs:dev
```
2. 打包静态网页
```bash
npm run docs:build
```
3. 推送服务端
```bash
scp -r docs/.vitepress/dist/* root@asterx.top:/www/wwwroot/mc.asterx.top
```