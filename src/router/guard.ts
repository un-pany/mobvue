import type { Router } from "vue-router"
import { useKeepAliveStore } from "@/pinia/stores/keep-alive"
import { useUserStore } from "@/pinia/stores/user"
import { isWhiteList } from "@/router/whitelist"
import { useTitle } from "@@/composables/useTitle"
import { getToken } from "@@/utils/cache/cookies"
import NProgress from "nprogress"

NProgress.configure({ showSpinner: false })

const { setTitle } = useTitle()

const LOGIN_PATH = "/login"

export function registerNavigationGuard(router: Router) {
  // 全局前置守卫
  router.beforeEach((to, _from) => {
    NProgress.start()
    const userStore = useUserStore()
    // 如果没有登录
    if (!getToken()) {
      // 如果在免登录的白名单中，则直接进入
      if (isWhiteList(to)) return true
      // 其他没有访问权限的页面将被重定向到登录页面
      return LOGIN_PATH
    }
    // 如果已经登录，并准备进入 Login 页面，则重定向到主页
    if (to.path === LOGIN_PATH) return "/"
    // 判断有无该页面权限
    if (to.meta.roles ? userStore.roles.some(role => to.meta.roles!.includes(role)) : true) return true
    // 无权限则进入 403 页面
    return "/403"
  })
  // 全局后置钩子
  router.afterEach((to) => {
    const keepAliveStore = useKeepAliveStore()
    // 清除所有路由缓存
    if (to.path === LOGIN_PATH) keepAliveStore.delAllCachedRoutes()
    // 添加路由缓存
    keepAliveStore.addCachedRoute(to)
    // 设置标题
    setTitle(to.meta.title)
    NProgress.done()
  })
}
