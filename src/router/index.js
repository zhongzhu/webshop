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
      beforeEnter (to, _from, next) {
        let auth = this.$store.state.auth

        if (!auth.authenticated && to.path !== '/admin/login') {
          next({path: '/admin/login'})
        } else if (auth.authenticated && to.path === '/admin/login') {
          next({ path: '/admin/products' })
        } else {
          next()
        }
      },
      children: [
        { path: 'login', component: AdminLogin },
        { path: 'products', component: AdminProduct }
      ]
    }
  ]
})
