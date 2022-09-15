import Vue from 'vue'
import VueRouter from 'vue-router'
import IntegralTable from '@/pages/IntegralTable.vue'
import DataDictionary from '@/pages/DataDictionary.vue'
//调用 Vue.use()函数，把VueRouter 安装为Vue的插件
Vue.use(VueRouter);

//创建路由的实例对象
const router = new VueRouter({
    routes: [
        {
            path: '/IntegralTable',
            component: IntegralTable
        },
        {
            path: '/DataDictionary',
            component: DataDictionary
        }
    ]
});

//向外共享路由的实例对象
export default router
