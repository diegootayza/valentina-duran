import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-exact-active',
    routes: [
        {
            path: '/',
            component: () => import('@/layouts/LDefault.vue'),
            children: [
                {
                    path: '',
                    name: 'home',
                    component: () => import('@/views/VHome.vue'),
                    meta: { middlewares: [] },
                },
            ],
        },
        {
            path: '/auth',
            component: () => import('@/layouts/LAuth.vue'),
            children: [
                {
                    path: 'sign-in',
                    name: 'sign-in',
                    component: () => import('@/views/auth/VSignIn.vue'),
                    meta: { middlewares: ['guest'] },
                },
                {
                    path: 'sign-up',
                    name: 'sign-up',
                    component: () => import('@/views/auth/VSignUp.vue'),
                    meta: { middlewares: ['guest'] },
                },
            ],
        },
    ],
})

router.beforeEach((to, from, next) => {
    const store = localStorage.getItem('user')
    const user = store ? JSON.parse(store) : null
    // const middlewares = to.meta.middlewares as string[]

    next()
})

export default router
