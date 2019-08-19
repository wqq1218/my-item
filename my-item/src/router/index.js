import Vue from 'vue'
import VueRouter from 'vue-router'

import Cart from '../pages/Cart/Cart.vue'
import Identify from '../pages/Identify/Identify.vue'
import Home from '../pages/Home/Home.vue'
import Category from "../pages/Category/Category";
import Ucenter from "../pages/Ucenter/Ucenter";


Vue.use(VueRouter)
const router=new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/home',
            component:Home,
        },
        {
            path:'/category',
            component:Category,
        },
        {
            path:'/identify',
            component:Identify,
        },
        {
            path:'/cart',
            component:Cart,
        },
        {
            path:'/ucenter',
            component:Ucenter,
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})

export default router
