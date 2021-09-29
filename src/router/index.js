import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main'
import About from '@/components/About'
import Home from '@/components/Home'
import Men from '@/components/Mens'
import Women from '@/components/women'
import Kids from '@/components/kids'
import Classy from '@/components/classy'
import Contact from '@/components/Contact'
import News from '@/components/News'
import checkout from '@/components/checkout'

Vue.use(Router)

export default new Router({
       routes:[
           {
                path:'',
                component:Main,
                name:'main',
                children:[
                    {
                        path:'/',
                        component:Home,
                        name:'home'
                    },
                     {
                        path:'/about',
                        component:About,
                        name:'about'
                     },
                     {
                        path:'/shop/men',
                        component:Men,
                        name:'mens'
                     },
                     {
                        path:'/shop/women',
                        component:Women,
                        name:'women'
                     },
                     {
                        path:'/shop/kids',
                        component:Kids,
                        name:'kids'
                     },
                     {
                        path:'/shop/classy',
                        component:Classy,
                        name:'classy'
                     },
                     {
                        path:'/contactus',
                        component:Contact,
                        name:'contact'
                     },
                     {
                        path:'/news',
                        component:News,
                        name:'news'
                     },
                     {
                        path:'/checkout',
                        component:checkout,
                        name:'checkout'
                     }
        ]
    }]
       
    
})