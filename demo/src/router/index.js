import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Rank from '@/components/Rank'
import Shop from '@/components/Shop'
import Me from '@/components/Me'
import Detail from '@/components/Detail'
import Shijing from "@/components/Shijing"
import Qiujun from "@/components/Qiujun"

Vue.use(Router)

let router= new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank,
      children:[
          {
            path:"shijing",
            name:"shijing",
            component:Shijing
          },
          {
            path:"qiujun",
            name:"qiujun",
            component:Qiujun
          },
          {
            path:"/rank",
            redirect:"/rank/shijing"
          }
      ]
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ],
  scrollBehavior(to,from,savePosition){
    console.log(savePosition);
    if(savePosition){
      return savePosition
    }else{
      return {x:0,y:0}
    }
  }
})

export default router
//全局守卫
router.beforeEach((to,from,next)=>{
    if(to.name=="shop"){
        if(localStorage.getItem("info")){
            next();
        }else{
          next({
              path:"/me",
              query:{redirect:to.fullPath}
          })
        }
    }else{
        next();
    }
  
})