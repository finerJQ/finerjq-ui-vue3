
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // PC
  // 首页
  {
    path: '/zh-CN',
    name: 'PCHome',
    component: () => import('./../views/PCHome'),
    meta: { name: 'PCHome', title: 'finerJQ-UI' },
  },
  {
    path: '/zh-CN/pc-support',
    name: 'PCSupport',
    component: () => import('./../views/PCSupport'),
    meta: { name: 'PCSupport', title: '支持赞助' },
  },
  // 组件
  {
    path: '/zh-CN/pc-component',
    component: () => import('./../views/PCComponent'),
    meta: { name: 'PCComponent', title: '组件' },
    children: [
      // 默认页
      // { path: '', name: 'PCComponent', component: () => import('./../views/PCInstall') },
      { path: '', name: 'PCComponent', component: () => import('./../views/components/PCUpdateLog') },
      // 跟新日志
      { path: 'pc-updatelog', name: 'PCUpdateLog', component: () => import('./../views/components/PCUpdateLog') },
      // input组件
      { path: 'pc-input', name: 'PCInput', component: () => import('./../views/components/PCInput') }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router