import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes
})

// 全局前置中间件
router.beforeEach((to, from, next) => {
    // 获取仓库里的登录信息
    const auth = router.app.$options.store.state.auth

    // 如果当前用户已经登录，且目标路由包含 /auth/，就跳转到首页
    if (auth && to.path.indexOf('/auth/') !== -1) {
        next('/')
    } else{
        next()
    }
})

export default router