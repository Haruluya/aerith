// 主动配置的路由。
const routes:Array<object> = 
    [
        { 
            path: '/', 
            component: '../layouts/index',
            routes:[
                { 
                    path: '/home', 
                    component: 'Home' 
                },
                { 
                    path: '/login', 
                    wrappers: [
                        '@/wrappers/loginAuth',
                    ],
                    component: 'Login',
                },
                { 
                    path: '/aboutPoj', 
                    component: 'AboutPoj' 
                },
                { 
                    path: '/activity', 
                    component: 'Activity' 
                },
                { 
                    path: '/articleDetail', 
                    component: 'ArticleDetail' 
                },
                { 
                    path: '/official', 
                    component: 'Official' 
                },
                { 
                    path: '/strategy', 
                    component: 'Strategy' 
                },
                {
                    component: './404',
                },
            ]
        },
    ];

export default routes;