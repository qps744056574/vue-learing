import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export default new Vuex.Store({
    state: {
        count: 0
    },
    getters: { // getters
        countAdd: function (state) {
            return state.count++
        }
    },
    mutations: {
        inc: (state,payload) => {
            state.count=state.count+payload.amount
        },
        dec: state => state.count--
    },
    actions: {
        incAsync ({ commit }) {
          setTimeout(() => {
            commit('inc')
          }, 1000)
        },
        increment (context,payload) {
            context.commit('inc',payload)
          }
      }
})