 ——-----------------------------常见疑问---------------------------------------
 ## 可以通过根实例参数注入的有哪些？
 > vue Router(router)          vuex(store)
 ## 插件
 > 使用插件  use()  
 > 开发插件  install （）  。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象
 > 可以看我写的例子，大神写的也是一样的（karmar-ui 每一个组件都是一个插件，然后在use安装在karmar-ui中，同时呢karmar-ui也是一个插件，其他地方在用的时候就可以安装使用）
 ## 作用域插槽是啥？
 > $scopedSlots 是作用域插槽，是一个对象，对象的每一个箱是插槽明为key 的插槽  在正常的情况下可以通过  slot name="aa"  v-bind:属性=属性  但是在render函数中，不能这么写，所以用$scopedSlots.default等来写 可以看插槽.html
 ## slot-scope和$scopedSlots 的区别是啥？
 >  slot-scope 在最新的版本中已经废除，$scopedSlots 是作用域插槽，在正常的情况下可以通过  slot name="aa"  v-bind:属性=属性  但是在render函数中，不能这么写，所以用$scopedSlots.default等来写 可以看插槽.html
 ## 依赖注入是什么？
>  provide 选项允许我们指定我们想要提供给后代组件的数据/方法。后代用inject 来注入。依赖注入.html
## mixin是什么？
>  定义一个混入对象(这个对象是vue实例的选项对象)  在任何地方只要混入就可以用，比依赖注入还强大，依赖注入只能注入数据/方法，混入可以是任何选项对象  https://cn.vuejs.org/v2/guide/mixins.html
## 什么是渲染函数，什么是jsx，有啥区别？
>  渲染函数就是render函数，有三个参数 。render函数用来代替部分html元素，由于render函数写的很痛苦，很麻烦，跟原生的模板html大相径庭，所有有了jsx，用于在 Vue 中使用 JSX 语法，它可以让我们回到更接近于模板的语法上。用jsx需要安装bable ，来解析这种语法。npm install @vue/babel-preset-jsx @vue/babel-helper-vue-jsx-merge-props     https://github.com/vuejs/jsx
## v-leave 没有生效
> 这个我也不知道，一般是v-leave-to和v-enter 配合使用的， 在dom视察中可以看出来 fade-leave 和 fade-enter 闪的很快 ，active 和 to 是共存的，先active 后to，所以可能存在样式覆盖的问题
.v-enter, .v-leave-to 设置的 时候一般这两个是成对出现的
## is用在什么地方？
> is可以用在动态组件或者是table中tr是组件可以有用  可以看我的示例 组件基础-动态组件
    `
    <table>
    <tr is="blog-post-row"></tr>
    </table>
    `
## 为什么组件在注册的时候，props 传递后，html中使用都是小写加- 呢？
> HTML 中的特性名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。这意味着当你使用 DOM 中的模板时，camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短横线分隔命名) 命名：重申一次，如果你使用字符串模板，那么这个限制就不存在了。发射事件也写小写，因此，我们推荐你始终使用 kebab-case 的事件名

## 用的props但是在子组件去改变数据的手，父组件的数据也变化了？
> 注意在 JavaScript 中对象和数组是通过引用传入的，所以对于一个数组或对象类型的 prop 来说，在子组件中改变这个对象或数组本身将会影响到父组件的状态。

## 非 Prop 的特性是啥意思？
> 一个非 prop 特性是指传向一个组件，但是该组件并没有相应 prop 定义的特性。然后这个 特性就会自动添加到 组件的根元素上。
## 作用域插槽是啥？
> 作用域插槽 可以在父组件中用子组件的数据，因为插槽的编译作用域是当前组件，比如变量a只能是当前组件的，如果想访问子组件的a就用到了作用域插槽

## Vue的字符串模板
> HTML 特性是不区分大小写的(不论大写的a标签还是小写的a标签，在dom渲染后都是小的的，所以在vue中飞字符串模板都写成小写)。所以，当使用的不是字符串模板时，camelCase (驼峰式命名) 的 prop 需要转换为相对应的 kebab-case (短横线分隔式命名)
  字符串模板：指的是在组件选项里用 template:"" 指定的模板，换句话说，写在 js 中的 template:"" 中的就是字符串模板。比如下面这个：
  `
    var tmp = new Vue({
        template:"<myComponent></myComponent>"
    })

    Vue.component('child', {
    // 在 JavaScript 中使用 camelCase
    props: ['myMessage'],
    template: '<span>{{ myMessage }}</span>'
    })
  `
  非字符串模板
  `
    <!-- 在 HTML 中使用 kebab-case -->
    <child my-message="hello!"></child>
  `
  非字符串模板：在单文件里用 <template></template> 指定的模板，换句话说，写在 html 中的就是非字符串模板。
## 不要在选项属性或回调上使用箭头函数
> 比如 created: () => console.log(this.a) 或 vm.$watch('a', newValue => this.myMethod())。因为箭头函数并没有 this，this 会作为变量一直向上级词法作用域查找，直至找到为止，经常导致 Uncaught TypeError: Cannot read property of undefined 或 Uncaught TypeError: this.myMethod is not a function 之类的错误。    ----->来源于vue实例，实例的生命周期钩子
## 指令都有哪些？
> 自带指令（v- 开头的，比如v-if,v-for,v-on,v-bind，v-once等）和自定义指令，指令参数以：开始，比如 v-bind：href ,v-on:click，v-slot等
## 修饰符有哪些？
> 比如：v-on:click.submit    .prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()：  
    事件修饰符
        .stop
        .prevent
        .capture
        .self
        .once
        .passive
    按键修饰符
        .enter  keyCode 的事件用法已经被废弃了并可能不会被最新的浏览器支持。（所以最好不要直接写数字 enter 是13）
    系统修饰符
        .ctrl
        .alt
        .shift
        .meta
    exact 修饰符
        .exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。
            `<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
            <button @click.ctrl="onClick">A</button>

            <!-- 有且只有 Ctrl 被按下的时候才触发 -->
            <button @click.ctrl.exact="onCtrlClick">A</button>

            <!-- 没有任何系统修饰符被按下的时候才触发 -->
            <button @click.exact="onClick">A</button>`
    鼠标修饰符  这些修饰符会限制处理函数仅响应特定的鼠标按钮。
        .left
        .right
        .middle
    表单修饰符
        .lazy 在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步 (除了上述输入法组合文字时)。你可以添加 lazy 修饰符，从而转变为使用 change 事件进行同步：
        .number 如果想自动将用户的输入值转为数值类型 这通常很有用，因为即使在 type="number" 时，HTML 输入元素的值也总会返回字符串。如果这个值无法被 parseFloat() 解析，则会返回原始的值。
        .trim
## 缩写？
> Vue 为 v-bind 和 v-on 这两个最常用的指令，提供了特定简写：:和@     还有插槽的缩写是 v:slot 缩写为 #
## 大小写转换?
> 事件名：事件名不同于组件和 prop，事件名不存在任何自动化的大小写转换。而是触发的事件名需要完全匹配监听这个事件所用的名称。因此，我们推荐你始终使用 kebab-case 的事件名。
  组件名和props，声明的时候（在字符串模板中）都可以用驼峰命名法，在使用的时候（dom模板）用短线法，和事件的 话必须 用短线法
##  字符串模板指的是啥？
> 在vue中字符串模板指的是，template: 后面跟的内容就是字符串模板，比如
    `
        Vue.component('blog-post', {
        // 在 JavaScript 中是 camelCase 的
        props: ['postTitle'],
        template: '<h3>{{ postTitle }}</h3>'
        })
    `
    在dom中直接写的就是dom模板
## 非 Prop 的 Attribute 是啥？
> 一个非 prop 的 attribute 是指传向一个组件，但是该组件并没有相应 prop 定义的 attribute。这些 attribute 会被添加到这个组件的根元素上。
## 替换/合并已有的 Attribute?
> date-picker-theme-dark，这是从组件的父级传入的
对于绝大多数 attribute 来说，从外部提供给组件的值会替换掉组件内部设置好的值。所以如果传入 type="text" 就会替换掉 type="date" 并把它破坏！庆幸的是，class 和 style attribute 会稍微智能一些，即两边的值会被合并起来，
## 禁用 Attribute 继承? 注意 inheritAttrs: false 选项不会影响 style 和 class 的绑定。
> 如果你不希望组件的根元素继承 attribute，你可以在组件的选项中设置 inheritAttrs: false；https://cn.vuejs.org/v2/guide/components-props.html#%E7%A6%81%E7%94%A8-Attribute-%E7%BB%A7%E6%89%BF
## 禁用继承后  $attrs的用处？
> 禁用后，根元素没有办法禁用，子元素哪个想用哪个就用 v-bind="$attrs" 
## 将原生事件绑定到组件？ https://cn.vuejs.org/v2/guide/components-custom-events.html#%E5%B0%86%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A%E5%88%B0%E7%BB%84%E4%BB%B6
>  你可能有很多次想要在一个组件的根元素上直接监听一个原生事件。这时，你可以使用 v-on 的 .native 修饰符：
    `
        <base-input v-on:focus.native="onFocus"></base-input>
    `
    在有的时候这是很有用的，不过在你尝试监听一个类似 <input> 的非常特定的元素时，这并不是个好主意。比如上述 <base-input> 组件可能做了如下重构，所以根元素实际上是一个 <label> 元素：
    `
        <label>
        {{ label }}
        <input
            v-bind="$attrs"
            v-bind:value="value"
            v-on:input="$emit('input', $event.target.value)"
        >
        </label>
    `
    为了解决这个问题，Vue 提供了一个 $listeners 属性（包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用。），它是一个 对象  ，里面包含了作用在这个组件上的所有监听器 ，就跟$attr 一样


##  .sync 修饰符
> 不幸的是，真正的双向绑定会带来维护上的问题，因为子组件可以修改父组件，且在父组件和子组件都没有明显的改动来源。
这也是为什么我们推荐以 update:myPropName 的模式触发事件取而代之.(this.$emit('update:title', newTitle)) 相当余发射了一个update:属性的事件  .sync 修饰符 其实也是一个语法糖 
  `
    <text-document
    v-bind:title="doc.title"
    v-on:update:title="doc.title = $event"
    ></text-document>
    <text-document v-bind:title.sync="doc.title"></text-document>
  `

 ——----------------------------- md笔记---------------------------------------
# 基础

# 深入了解组件

## 动态组件&异步组件
### 动态组件是什么?
    > 有的时候，在不同组件之间进行动态切换是非常有用的，比如在一个多标签的界面里：上述内容可以通过 Vue 的 <component> 元素加一个特殊的 is attribute 来实现： is可以是已注册组件的名字，或
    一个组件的选项对象，为什么component是动态组件呢，因为is可以是任何组件
### 在动态组件上使用keep-alive组件
    > 用keep-alive组件能够被在它们第一次被创建的时候缓存下来， 组件不会重新创建(不会走keep-alive)，只是到了缓存中 比如在某个组件中浏览到了某个位置 当切换回来的时候 还是那个位置（这对记录用户的当时的状态是非常有用的）  可以看官网的文章也挺好 https://cn.vuejs.org/v2/guide/components-dynamic-async.html
    
## 插槽
### 插槽的编译作用域是啥？
    > 如果插槽的内容是一个变量，那么这个变量的作用域是当前实例的作用域 父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。 https://cn.vuejs.org/v2/guide/components-slots.html#%E7%BC%96%E8%AF%91%E4%BD%9C%E7%94%A8%E5%9F%9F
### 插槽的后备内容是啥？
    > 有时为一个插槽设置具体的后备 (也就是默认的) 内容是很有用的.
        ` <slot>Submit</slot>`
### 具名插槽？
    > <slot name="header"></slot>    <template v-slot:header></template>   
### 作用域插槽？
        插槽的编译作用域是在当前组件，如果我们想作用域是子组件怎们办呢，作用域插槽就诞生了。有时让插槽内容能够访问子组件中才有的数据是很有用的。方法是：
        `
        <slot v-bind:user="user">
            {{ user.lastName }}
        </slot>

        <template v-slot:default="slotProps">
            {{ slotProps.user.firstName }}
        </template>
        `
        绑定在 <slot> 元素上的 attribute 被称为插槽 prop
    #### 解构插槽 Prop       https://cn.vuejs.org/v2/guide/components-slots.html#%E8%A7%A3%E6%9E%84%E6%8F%92%E6%A7%BD-Prop
        > 作用域插槽的内部工作原理是将你的插槽内容包括在一个传入单个参数的函数里：这意味着 v-slot 的值实际上可以是任何能够作为函数定义中的参数的 JavaScript 表达式。你也可以使用 ES2015 解构来传入具体的插槽 prop
        `
            <current-user v-slot="{ user }">
            {{ user.firstName }}
            </current-user>
        ` 
### 具名插槽的缩写
    即把参数之前的所有内容 (v-slot:) 替换为字符 #。例如 v-slot:header 可以被重写为 #header：
## 处理边界情况
    > 这里记录的都是和处理边界情况有关的功能，即一些需要对 Vue 的规则做一些小调整的特殊情况。
    ### 访问元素&组件
    > 访问根实例 $root  父组件的实例 $parent   访问子组件实例或子元素  ref
    ### 依赖注入   provide  和 inject
## 模板定义的tidaipn
    ### 内联模板
    ### X-Template
## 强制更新 
> $forceUpdate  vm.$forceUpdate()  迫使 Vue 实例重新渲染。注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。
## 过 v-once 指令 创建低开销的静态组件 
# 过渡&动画
过渡 transition 会有默认有类名 v-enter v-enter-active v-enter-to   v-leave v-leave-aceive v-enter-to v可以通过transition 的name 来替换  也可以用下面的js钩子，其实和类名是对应的
`
    <transition
  v-on:before-enter="beforeEnter"
  v-on:enter="enter"
  v-on:after-enter="afterEnter"
  v-on:enter-cancelled="enterCancelled"

  v-on:before-leave="beforeLeave"
  v-on:leave="leave"
  v-on:after-leave="afterLeave"
  v-on:leave-cancelled="leaveCancelled"
>
  <!-- ... -->
</transition>
`
### 单元素组件和过渡  
> transition 里面直接写
### 过个元素的过渡
> 对于原生标签可以使用 v-if/v-else。最常见的多标签过渡是一个列表和描述这个列表为空消息的元素：在一些场景中，也可以通过给同一个元素的 key attribute 设置不同的状态来代替 v-if 和 v-else
### 多个组建的过渡
> 多个组件的过渡简单很多 - 我们不需要使用 key attribute。相反，我们只需要使用动态组件：
### 过渡模式
>  in-out：新元素先进行过渡，完成之后当前元素过渡离开。 就是先进来在出去
   out-in：当前元素先进行过渡，完成之后新元素过渡进入。 就是先出去在进来
### 列表过渡
> 使用 <transition-group> 组件
# 可复性&组合
## 混入
    > 混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。
    provide 选项允许我们指定我们想要提供给后代组件的数据/方法   跟依赖注入的区别是依赖注入只能是数据或者方法，混入可以是任何选项对象


## 自定义指令  https://cn.vuejs.org/v2/guide/custom-directive.html
> 全局和局部  钩子函数 bind inserted update 等 ，钩子函数参数 （el、binding、vnode 和 oldVnode）

## 渲染函数&jsx     https://cn.vuejs.org/v2/guide/render-function.html
> Vue 推荐在绝大多数情况下使用模板来创建你的 HTML。然而在一些场景中，你真的需要 JavaScript 的完全编程的能力。这时你可以用渲染函数，它比模板更接近编译器。
>  渲染函数就是render函数，有三个参数 。render函数用来代替部分html元素，由于render函数写的很痛苦，很麻烦，跟原生的模板html大相径庭，所有有了jsx，用于在 Vue 中使用 JSX 语法，它可以让我们回到更接近于模板的语法上。用jsx需要安装bable ，来解析这种语法。npm install @vue/babel-preset-jsx @vue/babel-helper-vue-jsx-merge-props   
>  jsx 使用教程 https://github.com/vuejs/jsx#installation
> $scopedSlots 是作用域插槽，在正常的情况下可以通过  slot name="aa"  v-bind:属性=属性  但是在render函数中，不能这么写，所以用$scopedSlots.default等来写 可以看插槽.html
> 下面是jsx写法的$scopedSlots 可以看出来了是个对象
`
    render() {
        const scopedSlots = {
            header: () => <header>header</header>,
            footer: () => <footer>footer</footer>
        }

        return <MyComponent scopedSlots={scopedSlots} />
    }
`
## 过滤器
> 过滤器.html



        
        
    
    
    

    