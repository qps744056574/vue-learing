import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWold from './components/HelloWorld'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: HelloWold, meta: { requiresAuth: true } }
  ]
})
 new Vue({
  router,
  render:h => h(App),
}).$mount('#app')
