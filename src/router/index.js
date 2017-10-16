import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index'
import GoodsList from '../page/goods/list'
import GoodsIntroduce from '../page/goods/introduce'
import GoodsDetail from '../page/goods/detail'
import GoodsEvaluate from '../page/goods/evaluate'
import OrderDetail from '../page/order/detail'
import AddrList from '../page/addr/list'
import AddrAdd from '../page/addr/add'
import Icon from '../page/dev/icon'

Vue.use(Router)

const routesList = [
  { path: '/', name: 'index', component: Index },
  { path: '/goods/list', name: 'goods', component: GoodsList },
  { path: '/goods/introduce', name: 'goodsDetail', component: GoodsIntroduce },
  { path: '/goods/detail', name: 'goodsDetail', component: GoodsDetail },
  { path: '/goods/evaluate', name: 'goodsEvaluate', component: GoodsEvaluate },
  { path: '/dev/icon', name: 'icon', component: Icon },
  { path: '/order/detail', name: 'orderDetail', component: OrderDetail },
  { path: '/addr/list', name: 'AddrList', component: AddrList },
  { path: '/addr/add', name: 'AddrAdd', component: AddrAdd }
]
let isHans = true
isHans = typeof (history.pushState) === 'function'

const uaStr = window.navigator.userAgent
const router = new Router({
  mode: isHans ? 'history' : '',
  routes: routesList
})

export default router
