import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
            path: '/',
            name: 'Home',
            component: () => import('../components/Home')
        },
    {
            path: '/List',
            name: 'List',
            component: () => import('../components/List')
        },
        {
            path: '/create',
            name: 'Create',
            component: () => import('../components/Create')
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: () => import('../components/Edit')
        },
     {
            path: '/tips',
            name: 'Tips',
            component: () => import('../components/Tips')
        }
]

const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes
})

export default router
