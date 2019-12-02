
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('pages/Dashboard.vue')
      },
      {
        path: '/edit',
        name: 'edit',
        component: () => import('pages/Editor.vue')
      },
      {
        path: '/loading/:filePath',
        name: 'loading',
        component: () => import('pages/Loading.vue')
      },
      {
        path: '/demo',
        name: 'demo',
        component: () => import('pages/Demo.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
