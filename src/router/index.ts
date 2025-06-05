import type { RouteRecordRaw } from "vue-router"
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
import { registerNavigationGuard } from "@/router/guard"

const VITE_PUBLIC_PATH = import.meta.env.VITE_PUBLIC_PATH

const VITE_ROUTER_HISTORY = import.meta.env.VITE_ROUTER_HISTORY

/** 系统页面 */
export const systemRoutes: RouteRecordRaw[] = [
  {
    path: "/403",
    component: () => import("@/pages/error/403.vue"),
    name: "403",
    meta: {
      title: "403"
    }
  },
  {
    path: "/404",
    component: () => import("@/pages/error/404.vue"),
    name: "404",
    meta: {
      title: "404"
    },
    alias: "/:pathMatch(.*)*"
  }
]

/** 业务页面 */
export const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: () => import("@/pages/login/index.vue"),
    name: "Login",
    meta: {
      title: "登录"
    }
  },
  {
    path: "/",
    component: () => import("@/pages/home/index.vue"),
    name: "Home",
    meta: {
      title: "首页",
      layout: {
        navBar: {
          showNavBar: false,
          showLeftArrow: false
        },
        tabbar: {
          showTabbar: true,
          icon: "home-o"
        }
      }
    }
  },
  {
    path: "/me",
    component: () => import("@/pages/me/index.vue"),
    name: "Me",
    meta: {
      title: "我的",
      layout: {
        navBar: {
          showNavBar: true,
          showLeftArrow: false
        },
        tabbar: {
          showTabbar: true,
          icon: "user-o"
        },
        footer: true
      }
    }
  }
]

/** 示例页面 */
export const demoRoutes: RouteRecordRaw[] = [
  {
    path: "/keep-alive",
    component: () => import("@/pages/demo/keep-alive.vue"),
    name: "KeepAlive",
    meta: {
      title: "路由缓存",
      keepAlive: true,
      layout: {
        navBar: {
          showNavBar: true,
          showLeftArrow: true
        }
      }
    }
  },
  {
    path: "/watermark",
    component: () => import("@/pages/demo/watermark.vue"),
    name: "Watermark",
    meta: {
      title: "带防御的水印",
      layout: {
        navBar: {
          showNavBar: true,
          showLeftArrow: true
        }
      }
    }
  },
  {
    path: "/permission",
    component: () => import("@/pages/demo/permission.vue"),
    name: "Permission",
    meta: {
      title: "按钮级权限",
      layout: {
        navBar: {
          showNavBar: true,
          showLeftArrow: true
        }
      }
    }
  },
  {
    path: "/no-permission-page",
    component: () => {},
    name: "NoPermissionPage",
    meta: {
      title: "因无权限而进不去的页面",
      roles: ["SuperAdmin"]
    }
  },
  {
    path: "/color",
    component: () => import("@/pages/demo/color.vue"),
    name: "Color",
    meta: {
      title: "灰色模式、色弱模式",
      layout: {
        navBar: {
          showNavBar: true,
          showLeftArrow: true
        }
      }
    }
  },
  {
    path: "/i18n",
    component: () => import("@/pages/demo/i18n.vue"),
    name: "I18n",
    meta: {
      title: "国际化 / i18n",
      layout: {
        navBar: {
          showNavBar: true,
          showLeftArrow: true
        }
      }
    }
  }
]

/** 空示例页面 */
export const emptyDemoRoutes: RouteRecordRaw[] = [
  {
    path: "/markdown",
    component: () => import("@/pages/demo/markdown.vue"),
    name: "Markdown",
    meta: {
      title: "Markdown 解析",
      layout: {
        navBar: {
          showNavBar: true,
          showLeftArrow: true
        }
      }
    }
  },
  {
    path: "/chart",
    component: () => import("@/pages/demo/chart.vue"),
    name: "Chart",
    meta: {
      title: "图表",
      layout: {
        navBar: {
          showNavBar: true,
          showLeftArrow: true
        }
      }
    }
  }
]

/** 路由实例 */
export const router = createRouter({
  history: VITE_ROUTER_HISTORY === "hash" ? createWebHashHistory(VITE_PUBLIC_PATH) : createWebHistory(VITE_PUBLIC_PATH),
  routes: [...systemRoutes, ...routes, ...demoRoutes, ...emptyDemoRoutes]
})

// 注册路由导航守卫
registerNavigationGuard(router)
