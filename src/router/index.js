import Vue from 'vue'
import Router from 'vue-router'
import AdminProduct from '@/components/admin/Product'
import AdminLogin from '@/components/admin/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin',
      component: {
        render (c) { return c('router-view') }
      },
      beforeEnter: (to, from, next) => {
        let authenticated = sessionStorage.getItem('authenticated')

        if (!authenticated && to.path !== '/admin/login') {
          next({path: '/admin/login'})
        } else if (authenticated && to.path === '/admin/login') {
          next({ path: '/admin/product' })
        } else {
          next()
        }
      },
      children: [
        { path: 'login', component: AdminLogin },
        { path: 'product', component: AdminProduct }
      ]
    }
  ]
})
