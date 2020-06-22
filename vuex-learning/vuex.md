# vuex   jianshu.com/p/f91cbb1ade41
> 它是一个专为 Vue.js 应用程序开发的状态管理模式,有的时候比如说 一个数据在多个组件存在，一旦数据改变，很多组件的数据都要变，这么多组件都变就麻烦了，尤其是兄弟组件，所以vuex诞生了
## 核心概念
* state state就是Vuex中的公共的状态, 将state看作是所有组件的data, 用于保存所有组件的公共数据。
* Getter 通俗的理解可以认为是getter里的函数就是vuex里的计算属性
* Mutations 将mutaions理解为store中的methods
* Actions 
    Action 类似于 mutation，不同在于：
    Action 提交的是 mutation，而不是直接变更状态。
    Action 可以包含任意异步操作！！！mutations中绝对不允许出现异步
* Modules 当应用变得非常复杂时，store 对象就有可能变得相当臃肿。为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）


## 下面就是示意图 可以看出来数据都是单向流动的
> dispatch 和 dispatch 都是2中方式，一种对象一种载荷


Vue.Component--(dispatch)-- Actions--(Commit)---Mutations--(Mutate)-- State--(Render)--Vue.Component 

