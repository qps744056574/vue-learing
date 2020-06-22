<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    connt {{$store.state.count}}
    <!-- getters {{$store.getters.countAdd()}} -->
    <a @click="goAdd" style="margin-right:20px">commit添加</a>
    <a @click="goAdd1" style="margin-right:20px">dispatch添加</a>
    
    <a @click="goMinus">减少</a>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  created(){
    console.log('this',this);
    
  },
  methods:{
    goAdd:function(){
      this.$store.commit('inc',{ amount: 10})
      // this.$store.commit('inc',{
      //   type:'increment',
      //   amount: 10
      // })
    },
      goAdd1:function(){
        /* 
        Actions 支持同样的载荷方式和对象方式进行分发：
        
        
        */
      // this.$store.dispatch('increment',{ amount: 10})//载荷
      this.$store.dispatch({
        type:'increment',
        amount: 10
      })//对象
    },
    goMinus:function(){
       this.$store.commit('dec')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
