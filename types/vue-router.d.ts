import "vue-router"

export {}

declare module "vue-router" {
  interface RouteMeta {
    /**
     * @description 页面标题
     */
    title?: string
    /**
     * @description 设置能进入该路由的角色，支持多个角色叠加，默认不限制角色
     * @default undefined
     */
    roles?: string[]
    /**
     * @description 是否缓存该路由页面，注意路由和页面都需要设置一致的 Name
     * @default false
     */
    keepAlive?: boolean
    /**
     * @description 布局配置
     */
    layout?: {
      /**
       * @description NavBar 配置
       */
      navBar?: {
        /**
         * @description 是否显示 NavBar
         * @default false
         */
        showNavBar?: boolean
        /**
         * @description 是否显示左侧箭头
         * @default false
         */
        showLeftArrow?: boolean
      }
      tabbar?: {
        /**
         * @description 是否显示 Tabbar
         * @default false
         */
        showTabbar?: boolean
        /**
         * @description 图标
         */
        icon?: string
      }
      /**
       * @description 是否显示 Footer
       * @default false
       */
      footer?: boolean
    }
  }
}
