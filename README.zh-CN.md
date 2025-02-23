<div align="center">
  <img alt="logo" width="120" height="120" src="./public/favicon.png">
  <h1>Mobile + Vue = MobVue</h1>
</div>

[![github release](https://img.shields.io/github/v/release/un-pany/mobvue?style=flat)](https://github.com/un-pany/mobvue/releases)
[![github stars](https://img.shields.io/github/stars/un-pany/mobvue?style=flat)](https://github.com/un-pany/mobvue/stargazers)
[![gitee stars](https://gitee.com/un-pany/mobvue/badge/star.svg)](https://gitee.com/un-pany/mobvue/stargazers)

<b><a href="./README.md">English</a> | 中文</b>

## 简介

MobVue 是一个精心制作的移动端 H5 模板，基于 Vue3、Vite、TypeScript、Vant 等主流技术

## 通知

> [!NOTE]
> 为爱发电！所有源码均免费开源，如果对你有帮助，欢迎点个 Star 支持一下！

> [!TIP]
> 正式推出付费服务，如果不想自己动手，但想移除 TS 或其他模块？试试懒人套餐！[点击看看](https://github.com/un-pany/mobvue/issues/2)

## 使用

<details>
<summary>推荐环境</summary>

<br>

- 新版 `Visual Studio Code`
- 安装 `.vscode/extensions.json` 文件中推荐的插件
- `node` 20.x 或 22+
- `pnpm` 9.x 或 10+

</details>

<details>
<summary>本地开发</summary>

<br>

```bash
# 安装依赖
pnpm i

# 启动服务
pnpm dev
```

</details>

<details>
<summary>打包构建</summary>

<br>

```bash
# 打包构建预发布环境
pnpm build:staging

# 打包构建生产环境
pnpm build
```

</details>

<details>
<summary>本地预览</summary>

<br>

```bash
# 先执行打包构建命令生成 dist 目录后再执行以下预览命令
pnpm preview
```

</details>

<details>
<summary>代码检查</summary>

<br>

```bash
# 代码校验与格式化
pnpm lint

# 单元测试
pnpm test
```

</details>

<details>
<summary>代码提交规范</summary>

<br>

`feat` 新功能

`fix` 修复错误

`perf` 性能优化

`refactor` 重构代码

`docs` 文档和注释

`types` 类型相关

`test` 单测相关

`ci` 持续集成、工作流

`revert` 撤销更改

`chore` 琐事（更新依赖、修改配置等）

</details>

## 链接

**在线预览**：[github-pages](https://un-pany.github.io/mobvue)

**文档教程**：[链接](https://juejin.cn/column/7472609448201666599)

**国内仓库**：[gitee](https://gitee.com/un-pany/mobvue)

**交流群**：[查看进群方式](https://github.com/un-pany/mobvue/issues/3)

**捐赠**：[请作者喝咖啡](https://github.com/un-pany/mobvue/issues/1)

**发行版 & 更新日志**：[releases](https://github.com/un-pany/mobvue/releases)

## 特性

🔥 最新的 [语法](https://vuejs.org/api/sfc-script-setup.html)、[配置](./vite.config.ts)、[依赖](./package.json)

📍 [纯一级路由设计](./src/router/index.ts) - 清晰且缓存友好

📱 移动端适配 [px2vw](./postcss.config.ts) - 并且宽屏友好

🌐 浏览器适配 [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy) + [autoprefixer](https://github.com/postcss/autoprefixer) + [browserslist](https://github.com/browserslist/browserslist) - 兼容多种浏览器和低版本浏览器

🧩 [布局系统](./src/layout) - 配置化的

🔒 权限控制 [页面级](./src/router/guard.ts)、[按钮级](./src/pages/demo/permission.vue)

🌗 主题模式 [Dark Mode](./src/common/assets/styles/variables.css)

🫧 [拥抱原子化 CSS](./uno.config.ts)

🔧 [组件](https://github.com/unplugin/unplugin-vue-components) 和 [API](https://github.com/unplugin/unplugin-auto-import) 自动按需导入

🔎 [Husky](./.husky/pre-commit) + [lint-staged](./package.json) + [ESLint](./eslint.config.js) - 规范代码

💪🏻 依然 [TypeScript](./tsconfig.json) - 严格模式且无 `any`

👀 更多功能 - [路由缓存](./src/pinia/stores/keep-alive.ts)、[带防御的水印](./src/common/composables/useWatermark.ts)、[灰色模式, 色弱模式](./src/common/composables/useGrayscaleAndColorblind.ts)、[SVG Loader](https://github.com/jpkleemans/vite-svg-loader)、[VConsole](./src/plugins/console.ts)、[白屏加载动画](./public/app-loading.css)、[单元测试](./tests)

## 技术栈

**Vue3**：采用 Vue3 + script setup 最新的 Vue3 组合式 API

**Vant**：轻量、可定制的移动端 Vue 组件库

**Pinia**: 传说中的 Vuex5

**Vite**：真的很快

**Vue Router**：路由路由

**TypeScript**：JavaScript 语言的超集

**pnpm**：更快速的，节省磁盘空间的包管理工具

**ESlint**：代码校验与格式化

**Axios**：发送网络请求（已封装好）

**UnoCSS**：具有高性能且极具灵活性的即时原子化 CSS 引擎

## 项目预览图

![preview](./src/common/assets/images/preview.png)

## License

[MIT](./LICENSE) License © 2025-PRESENT [pany](https://github.com/pany-ang)
