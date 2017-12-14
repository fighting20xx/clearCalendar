import App from '../app'           //这是主入口 app.vue  把这个定义为主组件，以后的页面都在这个主组件里面切换
import Login from '../pages/login/login.vue'
/**
 * auth true登录才能访问，false不需要登录，默认true
 */
export default [
    {
        path: '/',
        component: Login,
    },
    {
        path: '/app',
        component: App,                                //这里的每一个xx.vue文件 导入的话，都当成一个组件来看待
        children: [
            {
                path: '/',            //默认的首页
                meta: { auth: false },
                component: resolve => require(['../pages/index/index.vue'], resolve)
            },
            {
                path: '/signout',  //退出
                component: resolve => require(['../pages/signout/signout.vue'], resolve)
            },
            {
                path: '/home', //个人主页
                component: resolve => require(['../pages/home/home.vue'], resolve),
                children:[
                    {
                        path: '/home/page1', //登录
                        component: resolve => require(['../pages/home/myPages/page1.vue'], resolve)
                    },
                    {
                        path: '/home/page2', //登录
                        component: resolve => require(['../pages/home/myPages/page2.vue'], resolve)
                    }
                ]
            },
            {
                path: '/systemjoin', //退出
                component: resolve => require(['../pages/systemjoin/systemjoin.vue'], resolve)
            },
            {
                path: '/testPage', //退出
                component: resolve => require(['../pages/testPage/testPage.vue'], resolve)
            },
            {
                path: '/testPage2', //退出
                component: resolve => require(['../pages/testPage/testPage2.vue'], resolve)
            },
            { path: '/sys/:moduleName'},                                                 //动态路由所有的从数据库读出来的路由都放到这里
            {
                path: '*', //其他页面，强制跳转到登录页面
                redirect: '/'
            }
        ]
    }
]