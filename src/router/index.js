import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main'
import About from '@/components/About'
import Home from '@/components/Home'
import Men from '@/components/Mens'

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
                     }
        ]
    }]
       
    
})