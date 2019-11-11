# Vue上线项目的流程思路

### vue基本介绍和思想

````
vue的介绍：
	1.vue是一套用于构建用户构建页面的渐进式框架
	2.vue的一大特点在于，自底层向上逐层应用，也就是相当于css中的渐进增强
	3.vue的核心库只关注视图层，也就是意味用户的界面体验
	4.vue当然也能够为复杂的单页应用提供驱动，说白了就是可以提供一些功能组件
	5.基于MVVM模型开发：特点在于减少对于dom的操作，利用绑定的指令去操作原本需要获取dom节点的操作，
		行为和逻辑区分开，大大的增加了项目的性能和开发损耗，而且MVVM采用双向绑定，可以自动更新			ViewModel
	
	声明式渲染：
		var app = new Vue({
            el: '#app',
            data:{
                
            },
            methods: {
                
            }
            created () {
                
            }
		})
		
	条件与循环：
		v-for="item of list" {{item}}	v-if={{}}
	绑定指令：
		v-on:click(一般绑定事件) v-bind:(一般绑定变量)
		v-model(输入框绑定value值实现双向绑定)
	
	定义组件： Vue.component('header',{
        template: '<div>313</div>'
	})	
		调用：<ul><header /></ul>
	
````



````
第一步：下载vue  cnpm i vue
		开发时使用vue.js  因为包含了完整的警告和调试，有利于程序员规范代码格式
		生产时使用vue.min.js  删除了警告，减小了资源
第二步：安装vue的脚手架， cnpm i vue-cli -g
	   vue init webpack myapp  //创建自己的项目
	   Project name (myapp) 项目名称   回车
          Project description A Vue.js project  项目描述
          Author  项目作者
          ? Vue build (Use arrow keys)
        > Runtime + Compiler: recommended for most users   // 选这一个
          Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) 		  are ONLY allowed in .vue files - render functions are required elsewhere

          ? Install vue-router? (Y/n)  要不要安装路由  敲回车
          ? Use ESLint to lint your code? (Y/n) 要不要代码格式验证 敲回车
          > Standard (https://github.com/standard/standard) // 选这个
          Airbnb (https://github.com/airbnb/javascript)
          none (configure it yourself)
          ? Set up unit tests (Y/n) // 要不要测试  敲回车
            Jest
          > Karma and Mocha  // 选这个
            none (configure it yourself)
          ? Setup e2e tests with Nightwatch? (Y/n) 测试
            Yes, use NPM
            Yes, use Yarn
          > No, I will handle that myself // 选这个
第三步：查看目录结构：
			myapp
            - build   webpack的相关配置
              build.js 生产环境构建代码
              check-versions.js  检查 node、npm等的版本
              logo.png  
              utils.js  构建工具相关
              vue-loader.config.js  vue单文件的解析器的相关配置
              webpack.base.config.js  webpack的基本配置
              webpack.dev.config.js  webpack的开发配置
              webpack.prod.config.js  webpack的生产配置
              webpack.test.config.js  webpack的测试配置
            - config  vue的基本配置（监听的端口，打包输出等配置）
              dev.env.js  开发环境下的环境变量
              index.js  项目的基本配置 (合作开发时将localhost改为0.0.0.0，还可以设置反向代理解决跨				域问题)
              prod.env.js 生产环境下的环境变量
              test.env.js 测试环境下的环境变量
            - node_modules 依赖包
            - src   资源文件夹，以后就在这里写代码
              - assets 静态资源（css,js）
              - components 公共组件编写的地方
              - qunar 去哪网的scss库
              - pages   页面编写的地方
              - router  路由文件 控制页面的切换
                main.js 程序的入口文件
            - static 静态资源（图片，json数据）
            - test  单元测试、代码测试
              .babelrc es6语法的编译配置，浏览器不可以将所有的es6语法解析，需要借助它
              .editorcofig 定义代码格式
              .eslintignore  定义哪些文件夹或者文件不需要进行代码格式校验
              .eslintrc.js    代码校验设置
              .postcssrc.js  转换css的工具
              index.html    页面入口
              package.json    项目的基本信息
              README.md     项目的说明
第四步： 添加了去哪儿网的scss库，方便样式的编写，在src下添加page和qunar两个文件夹

第五步：修改路由，主页面全部放在page文件夹里，修改rouer/routes.js路由规则
		import ... from '@/page/..'
第六步：拆分路由index.js，方便管理，把 routes放在routes.js中编写
		import ... from '@/page/..'
		
		const routes = [
            {
                path:  '/**',
                name:  '...', 
                component: ...
            }
		]
		
		export default routes
		最后把这个路由文件暴露出去方便router/index.js中获取到
		index.js中：
		import routes from './routes'
		
		const router = new Router({
            routes
		})
		其他无需修改
		接下来就可以书写想要的页面了。
		（以电商移动端网页为例）
		page目录下新建:Home.vue   Kind.vue   Cart.vue  Mine.vue 首字母最好大写
		然后在router/routes中的routes中为新页面添加路由
		router/routes.js中：
		import Home from '@/page/home'
		import Kind from '@/page/Kind'
		import Cart from '@/page/Cart'
		import Mine from '@/page/Mine'
		const routes = [
		{
            path: '/',           //路由的重定向 redirect
            redirect: '/home'
          }
		{
            path: '/home',
            name: 'Home',
            component: 'Home'
		},{
            path: '/kind',
            name: 'Kind',
            component: 'Kind'
		},{
            path: '/cart',
            name: 'Cart',
            component: 'Cart'
		},{
            path: '/mine',
            name: 'Mine',
            component: 'Mine'
		}]
第七步：构建应用的基本结构
		App.vue文件中增添结构（上中下）
		<div id='app'>
			<div id = 'container'>
				<header class='header'></header>
				<div class = 'content'></div>
			</div>
			<footer calss='footer'></footer>
		</div>

第八步：书写页面样式：创建main.scss全局样式，在main.js中引入main.scss报错，缺少sass-loader模块，
		又因为此模块依赖于node-sass模块，所以需要两个都安装
		cnpm i node-sass sass-loader -D  开发环境用-D  生产环境用 -S
第九步：更改App.vue实现底部选项卡切换
		contenter中的呢荣用router-view 替代， 因为每个页面的内容不一样
		footer因为共用所以直接在app.vue全局样式中书写
		页面间的跳转使用router-link to='跳转的页面' tag='保持原标签名' router-link默认为a标签
		<template>
          <div id="app">
            <router-view />
            <footer class="footer">
              <ul>
                <router-link to="/home" tag="li">
                  <span></span>
                  <p>首页</p>
                </router-link>
                <router-link  to="/kind" tag="li">
                  <span></span>
                  <p>分类</p>
                </router-link>
                <router-link  to="/cart" tag="li">
                  <span></span>
                  <p>购物车</p>
                </router-link>
                <router-link  to="/user" tag="li">
                  <span></span>
                  <p>我的</p>
                </router-link>
              </ul>
            </footer>
          </div>
        </template>
第十步：页面结构完成时需要渲染数据：
		fetch很麻烦，需要转换数据类型
		此时需要引入axios请求方式
		cnpm i axios -S    Vue全家桶的依赖全是 -S
		为了方便管理我们可以在src目录下创建一个api目录
		src/api/home/index.js
		在这个里面去书写home页面所需要用到的页面请求
		用promise实现异步操作
		import axios from 'axios'
		
		const api = {
            requestList () {
              return new Promise((resolve, reject) => {
                  axios.get('...')
                  .then(data => resolve(data.data))
                  .catch(err => reject(err)
              })    
            }
		}
		export default api
第十一步： 同样是实现管理的方便我们可以在components/home/list.vue中书写home页面的数据渲染部分
		components/home/list.vue
		
		<template>
          <ul class="movielist">
            <li v-for="item of list" :key="item.id">
              <div class="movieimg">
                <img :src="item.images.small" :alt="item.alt">
              </div>
              <div class="info">
                <h3>{{ item.title }}</h3>
              </div>
            </li>
          </ul>
        </template>

        <script>
        export default {
          name: 'homelist',
          props: {
            list: {
              type: Array,
              required: true
            }
          }
        }
        </script>
        数据请求在home页面执行：通过传值传给子组件
        在home.vue中的created() {
            api.requestlist().then(data => {
                this.list = data
            })
        }
        data () {
            return {
                list: []
            }
        }
        在调用list组件的地方通过 :list = "list" 传值给子组件
第十二步： 用的页面用不到footer底部：所以需要抽离出去
		  抽离到components/Footer.vue
		App.vue剩余：
		<div id="app">
            <router-view />
            <router-view name = "footer"/>
          </div>
         此时需要修改router/routes.js
         修改路由的配置：
         {
              path: '',
              name: '',
              components: {
                default: ,
                footer: Footer // 如果没有底部，那么可以不写他
              }
            }
第十三步：如果需要用到回退功能的话，可以顶一个控制组件componennts/common/Back.vue
			<template>
                  <button @click="back">返回</button>
                </template>

                <script>
                export default {
                  name: 'back',
                  methods: {
                    back () {
                      console.log(this)
                      this.$router.go(-1)
                    }
                  }
                }
                </script>
第十四步：增添详情页：通过url进行声明式跳转，或者编程式跳转到详情页
	路由中需要修改为：path: '/detail/:id'
	www.***.com/list/1234

		声明式：<router-link tag="li"
     			 :to = "{name: 'detail', params: {id: item.id}}"></router-link>
     	编程式： this.$router.push({name: 'detail',params: {id}})  添加点击方法
     	
    www.***.com/list?id=1234
    	声明式：<router-link tag="li"
      			:to = "{name: 'detail', query: {id: item.id}}"></router-link>
     	编程式：  this.$router.push('/detail?id=' + id)
                  this.$router.push({name: 'detail',query: {id}})
                  this.$router.push({path: '/detail',query: {id}})
第十五步：在详情页获取url中传的值，并渲染数据
		在Detail组件中通过this.$route.query.id 获取/list?id=1234的id值
						this.$route.params.id 获取/list/1234 的 1234值
第十六步：当需要判断是否登录时：可以用到导航守卫
            router.beforeEach((to, from, next) => {
              console.log(to)
              if (to.path === '/cart') {
                if (localStorage.getItem('isLogin') === 'ok') {
                  next()
                } else {
                  // alert('小样，没有登录还想进去？')
                  next('/register')
                }
              } else {
                next()
              }
            })
            
            推荐在组件内书写，不影响整体的布局
第十七步： 当某些功能需要UI库中有的时候我们可以直接调用
		  以mint-ui为例：
		  	cnpm i mint-ui -S
		  	cnpm i babel-plugin-component -D
		  	修改.babelrc文件
		  	 {
                "presets": [
                  ["env", {
                    "modules": false,
                    "targets": {
                      "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
                    }
                  }],
                  "stage-2"
                ],
                "plugins": ["transform-vue-jsx", "transform-runtime", ["component", [
                  {
                    "libraryName": "mint-ui",
                    "style": true
                  }
                ]]],
                "env": {
                  "test": {
                    "presets": ["env", "stage-2"],
                    "plugins": ["transform-vue-jsx", "istanbul"]
                  }
                }
              }
         在main.js处导入全局mint
         	import MintUI from 'mint-ui'
     		Vue.use(MintUI)
     	 比如首页中添加轮播图组件
              import Vue from 'vue'
              复制api中的组件
              Vue.use(组件)
第十八步：项目上线：
	修改config/index.js中的build: {
        assetsPublicPath: './'
	}
	执行cnpm run build 打包项目
	压缩生成的dist文件为dist.zip
	把dist.zip上传的服务器的public文件夹下直接就可以访问
````
####  

### 性能的优化

````
路由的懒加载：
 const Home = () => import(/* webpackChunkName: "group-footer" */ '@/pages/Home')
 
 最后的写法是 components:{
     default: () => import(/* webpackChunkName: "group-footer" */ '@/pages/Home')
 }
 
 状态管理器：
 cnpm i vuex -S
 创建store/index.js
 import Vue from 'vue'
 import Vuex from 'vuex'
 
 Vue.vue(Vuex)
 
 const store = new VueX.Store({
     modules: {
         
     }
 })
 
 export default store
 
 在main.js中引入store，这样任何一个组件可以通过this.$store访问状态管理器
  import store from '@/store'
    new Vue({
      el: '#app',
      router,
      store, // 在任何一个组件可以通过 this.$store访问到状态管理器
      components: { App },
      template: '<App/>'
    })
    
   以分类为例：
   创建store/kind/index.js
   const store = {
       state: {
       		list: []
           //存放当前页面的状态值
       }, 
       getters: {
           //状态的衍生值，其实就是state中的计算属性
       }，
       actions： {
       		requestData(){
                api.requestListData().then(data =>{
                    context.commit('changeListData',data)
                })
       		}
       		})
		//处理组件中的异步操作
   	   },
   	   mutations: {
   	   	changeListData (state,data) {
            state.list = data
   	   	}
           //唯一改变当前页面的状态的地方
   	   }
   	   export default store
   	   
   	   此时在store/index.js中引入关于分类的状态管理器
   	   import kindStore drom './kind'
   	   
   	   modules: {
		kindStore
		}
		
		在页面组件中的created()中去触发此函数{
            this.$store.dispatch('requestListData')
		}
````

### UI库

````
移动端：mint-ui  https://mint-ui.github.io/#!/zh-cn
	   vant     https://youzan.github.io/vant/#/zh-CN/intro
PC端：element-ui http://element.eleme.io/#/zh-CN
      iview      https://www.iviewui.com/
````

### Vue数据双向绑定的原理

````
vue数据双向绑定的原理
  https://www.cnblogs.com/libin-1/p/6893712.html
  通过数据劫持结合发布者-订阅者模式的方式来实现的
    数据劫持（每一个属性都有setter和getter(set方法和get方法)）
      Object.defineProperty()  它可以来控制一个对象属性的一些特有操作，比如读写权、是否可以枚举
    发布-订阅者模式


    MVVM思想：数据变化更新视图，视图变化更新数据（数据的改变会引起视图的二次渲染）
    |-------|                   |         |
    | view  |                   |   data  |
    |-------|                   |         |

    实现数据的双向绑定，首先要对数据进行劫持监听，所以我们需要设置一个监听器Observer，用来监听所有属性。如果属性发上变化了，就需要告诉订阅者Watcher看是否需要更新。因为订阅者是有很多个，所以我们需要有一个消息订阅器Dep来专门收集这些订阅者，然后在监听器Observer和订阅者Watcher之间进行统一管理的。接着，我们还需要有一个指令解析器Compile，对每个节点元素进行扫描和解析，将相关指令对应初始化成一个订阅者Watcher，并替换模板数据或者绑定相应的函数，此时当订阅者Watcher接收到相应属性的变化，就会执行对应的更新函数，从而更新视图。因此接下去我们执行以下3个步骤，实现数据的双向绑定：

    1.实现一个监听器Observer，用来劫持并监听所有属性，如果有变动的，就通知订阅者。

    2.实现一个订阅者Watcher，可以收到属性的变化通知并执行相应的函数，从而更新视图。

    3.实现一个解析器Compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器
````

# Vue知识点

## nextTick

````
当你用数据渲染了一部分页面的时，但是当你想对新页面进行下一步操作时，你会发现，你无法获取到Dom，那是因为赋值只完成了数据的变更，视图的更新还没有完成。此时我们就需要用到nextTick
````
