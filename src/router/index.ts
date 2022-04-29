import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layouts/index.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    redirect: '/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'IndexPage',
        component: () => import('@/pages/Preview/template.vue')
      }
    ]
  },
  {
    path: '/docs',
    name: 'Docs',
    redirect: '/docs/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'DocsIndex',
        component: () => import('@/pages/Doc/index.vue')
      }
    ]
  },
  {
    path: '/demo',
    name: 'Demo',
    redirect: '/demo/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'DemoIndex',
        component: () => import('@/pages/Demo/index.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    redirect: '/about/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'AboutIndex',
        component: () => import('@/pages/About/index.vue')
      }
    ]
  }
];
