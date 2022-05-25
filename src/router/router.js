import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)
const routes = [{
        path: '/',
        component: () =>
            import ('../App.vue'),
        redirect: '/login',
        children: [{
                path: '/login',
                component: () =>
                    import ('../pages/login.vue')
            },
            {
                path: '/index',
                meta: { title: '首页' },
                component: () =>
                    import ('../pages/index.vue'),
                children: [{
                        path: '/field',
                        meta: { title: '场地管理' },
                        component: () =>
                            import ('../pages/Field.vue')
                    },
                    {
                        path: '/equipment',
                        meta: { title: '设备管理' },
                        component: () =>
                            import ('../pages/Equipment.vue')
                    },
                    {
                        path: '/staff',
                        meta: { title: '员工管理' },
                        component: () =>
                            import ('../pages/Staff.vue')
                    },
                    {
                        path: '/district',
                        meta: { title: '区管管理' },
                        component: () =>
                            import ('../pages/District.vue'),
                        children: [{
                            path: '/xixio',
                            meta: { title: '员工管理' },
                            component: () =>
                                import ('../pages/Coyp.vue')
                        }, ]
                    },

                ]
            }
        ]
    },
    {
        path: '*',
        component: () =>
            import ('../pages/404.vue')
    }

]
const router = new VueRouter({
    routes
})
export default router