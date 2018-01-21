import Vue from 'vue'
import Layout from './components/layout'
import CqContent from  './pages/cqcontent'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import  VueRouter from 'vue-router'
import GroupList from './pages/groupList'
import PrdList from './pages/prdList'
import PrdDetail from './pages/productDetail'
import PrdVedio from './pages/prdVedio'
import axios from 'axios'

Vue.use(iView)
Vue.use(VueRouter)
Vue.prototype.$ajax = axios
// Vue.prototype.$http = axios

let router = new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      component:CqContent
    },
    {
      path:'/:active/',
      component:CqContent
    },
    {
      path:'/groupList/:active/',
      component:GroupList
    },
    {
      path:'/prdList/:active/:groupId/',
      component:PrdList
    },
    {
      path:'/prdDetail/:active/:productId/',
      component:PrdDetail
    },
    {
      path:'/prdFilm/:active/',
      component:PrdVedio
    }
  ]
})




new Vue({
  el: '#app',
  render: h => h(Layout),
  router,
  template:'<Layout/>',
  components:{ Layout}
})

