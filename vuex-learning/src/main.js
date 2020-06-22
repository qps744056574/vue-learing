import Vue from 'vue'
import App from './App.vue'

import store from './store'

Vue.config.productionTip = false

new Vue({
  store,//Vuex 通过 store 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中     // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件  https://vuex.vuejs.org/zh/guide/state.html  官网说的
  render: h => h(App),
}).$mount('#app')
