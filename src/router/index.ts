import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layouts/index.vue';

import ZhIndexPage from '@/pages/ZH/index.vue';
import ZhDocsPage from '@/pages/ZH/index.vue';
import ZhDemoPage from '@/pages/ZH/index.vue';
import ZhAboutPage from '@/pages/ZH/index.vue';

import IndexPage from '@/pages/Preview/template.vue';
import DocsPage from '@/pages/Doc/index.vue';
import DemoPage from '@/pages/Demo/index.vue';
import AboutPage from '@/pages/About/index.vue';

const zhRoute: RouteRecordRaw = {
  path: '/zh',
  name: 'ZhIndex',
  component: Layout,
  children: [
    {
      path: '',
      name: 'ZhIndexPage',
      component: ZhIndexPage
    },
    {
      path: 'docs',
      name: 'ZhDocsPage',
      component: ZhDocsPage
    },
    {
      path: 'demo',
      name: 'ZhDemoPage',
      component: ZhDemoPage
    },
    {
      path: 'about',
      name: 'ZhAboutPage',
      component: ZhAboutPage
    }
  ]
};

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Layout,
    children: [
      {
        path: '',
        name: 'IndexPage',
        component: IndexPage
      }
    ]
  },
  {
    path: '/docs',
    name: 'Docs',
    component: Layout,
    children: [
      {
        path: '',
        name: 'DocsIndex',
        component: DocsPage
      }
    ]
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Layout,
    children: [
      {
        path: '',
        name: 'DemoIndex',
        component: DemoPage
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: Layout,
    children: [
      {
        path: '',
        name: 'AboutIndex',
        component: AboutPage
      }
    ]
  },
  zhRoute
];
