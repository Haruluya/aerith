// 主动配置的路由。
const routes:Array<object> = 
    [
        { 
            path: '/', 
            component: '../layouts/index',
            routes:[
                { 
                    path: '/', 
                    component: 'Home' 
                },
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
                    path: '/feedback', 
                    component: 'FeedBack' 
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
                    path: '/addarticle', 
                    component: 'AddArticle' ,
                    wrappers: [
                        '@/wrappers/loginAuth',
                    ],
                },
                { 
                    path: '/gossip', 
                    component: 'Gossip' ,
                    wrappers: [
                        '@/wrappers/loginAuth',
                    ],
                },
                { 
                    path: '/userinfo',
                    wrappers: [
                        '@/wrappers/loginAuth',
                    ], 
                    component: 'UserInfo',
                    routes:[
                        {
                            path: '/userinfo/aboutaerith',
                            component: './UserInfo/AboutAerith'
                        },
                        {
                            path: '/userinfo/aboutharuluya',
                            component: './UserInfo/AboutHaruluya'
                        },
                        {
                            path: '/userinfo/mycomment',
                            component: './UserInfo/MyComment'
                        },
                        {
                            path: '/userinfo/myfocus',
                            component: './UserInfo/MyFocus',
                        },
                        {
                            path: '/userinfo/myfans',
                            component: './UserInfo/MyFans',
                        },
                        {
                            path: '/userinfo/myinfo',
                            component: './UserInfo/MyInfo',
                        },
                        {
                            path: '/userinfo/mylevel',
                            component: './UserInfo/MyLevel',
                        },
                        {
                            path: '/userinfo/mypost',
                            component: './UserInfo/MyPost'
                        },
                        {
                            component:'./404'
                        }
                    ]
                },
                {
                    component: './404',
                },
            ]
        },
    ];

export default routes;