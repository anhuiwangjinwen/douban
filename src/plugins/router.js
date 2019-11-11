import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../pages/Home'
import List from '../pages/List'
import Login from '../pages/Login'
import Reg from '../pages/Reg'
import Set from '../pages/Set'
import User from '../pages/User'
import Detail from '../pages/Detail'
import Error from '../pages/Error'


let routes = [
    {path:"/home",component:Home},
    {path:"/List",component:List},
    {path:"/Login",component:Login},
    {path:"/Reg",component:Reg},
    {path:"/Set",component:Set},
    {path:"/User",component:User},
    {path:"/Detail/:id",component:Detail},
    {path:'/',component:Home},
    {path:'*',component:Error}
]


export default new VueRouter({
    mode:"hash",
    routes
})