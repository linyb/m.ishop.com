import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index'
import GoodsList from '../page/goods/list'
import GoodsIntroduce from '../page/goods/introduce'
import GoodsDetail from '../page/goods/detail'
import GoodsEvaluate from '../page/goods/evaluate'
import Icon from '../page/dev/icon'

Vue.use(Router)

const routesList = [
  { path: '/', name: 'index', component: Index },
  { path: '/goods/list', name: 'goods', component: GoodsList },
  { path: '/goods/introduce', name: 'goodsDetail', component: GoodsIntroduce },
  { path: '/goods/detail', name: 'goodsDetail', component: GoodsDetail },
  { path: '/goods/evaluate', name: 'goodsEvaluate', component: GoodsEvaluate },
  { path: '/dev/icon', name: 'icon', component: Icon }
]
let isHans = true
isHans = typeof (history.pushState) === 'function'

const uaStr = window.navigator.userAgent
const router = new Router({
  mode: isHans ? 'history' : '',
  routes: routesList
})

export default router
