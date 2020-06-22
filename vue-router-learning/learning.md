## router 和 route 的区别
> router 是路由器  route是当前路由    
## 两种导航方式？
> 声明式导航（router-link） 和 编程式导航 （push replace go 等） 
## 编程式导航，如果提供了 path，params 会被忽略,而代之的是下面例子的做法，你需要提供路由的 name 或手写完整的带有参数的 path：啥意思？
> 因为path 就是路径，params 也是在路径上动手脚，要么写完整的path（path/sdf）,要不写那么 加 params
`
    const userId = '123'
    router.push({ name: 'user', params: { userId }}) // -> /user/123
    router.push({ path: `/user/${userId}` }) // -> /user/123
    // 这里的 params 不生效
    router.push({ path: '/user', params: { userId }}) // -> /user

`
##  如果目的地和当前路由相同，只有参数发生了改变 怎么处理？
> 需要使用 beforeRouteUpdate 来响应这个变化 (比如抓取用户信息)。看下面导航守卫
## 命名视图是啥？
> 有时候想同时 (同级) 展示多个视图，而不是嵌套展示，例如创建一个布局，有 sidebar (侧导航) 和 main (主内容) 两个视图，这个时候命名视图就派上用场了。你可以在界面中拥有多个单独命名的视图，而不是只有一个单独的出口。如果 router-view 没有设置名字，那么默认为 default。
> 其他的都正常写就行了 只是在路由器的components改一下就好了，因为只是路由插座多了，来区分一下
`
    <router-view class="view one"></router-view>
    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view>

    const router = new VueRouter({
    routes: [
        {
        path: '/',
        components: {
            default: Foo,
            a: Bar,
            b: Baz
        }
        }
    ]
    })
`
## 重定向路由怎么弄？
>  { path: '/a', redirect: '/b' }
## 别名是啥？
> /a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样。
`
    const router = new VueRouter({
    routes: [
        { path: '/a', component: A, alias: '/b' }
    ]
    }
`
## 路由组件传参
> 通过路由的组件来传递参数，通过props来实现，但是不经常用
## histoy 模式
> 都是单页有应用，只不过在history模式下没有了# ，而且也需要后台配合，所以最好不用这种模式
## 导航守卫是啥？
> 来检测每个人进入离开导航或者在导航内参数的变化。以下是它的分类。

|全局的|单个路由独享的|或者组件级的|
|---|---------------|-----------|
| beforeEach|beforeEnter|beforeRouteEnter beforeRouteUpdate beforeRouteLeave|

> beforeRouteUpdate   举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候

## 路由元信息是什么鬼？
> 可以在meta 中配置数据，通过$route.meta 获取或者是matched来获取
## 路由懒加载是啥？
> 结合异步组件和webpck 的代码分隔功能可以让在路由到此路径的时候才加载组件，这样就稍微快点
## 把代码按组分块？
> 有时候我们想把某个路由下的所有组件都打包在同个块 (chunk) 中,只需要使用 命名 chunk，一个特殊的注释语法来提供 chunk name (需要 Webpack > 2.4)。
`
    const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
    const Bar = () => import(/* webpackChunkName: "group-foo" */ './Bar.vue')
    const Baz = () => import(/* webpackChunkName: "group-foo" */ './Baz.vue')
`
    