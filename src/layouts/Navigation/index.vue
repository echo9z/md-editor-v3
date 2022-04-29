<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import './index.less';

const store = useStore();
const router = useRouter();
const route = useRoute();

const prefix = store.state.lang === 'zh-CN' ? '/zh' : '';

const linkNames = computed(() => {
  return store.state.lang === 'zh-CN'
    ? {
        home: '首页',
        docs: '文档',
        demo: '示例',
        github: '源码',
        about: '关于',
        lang: 'English',
        langIcon: '#icon-d-en'
      }
    : {
        home: 'Home',
        docs: 'Docs',
        demo: 'Demo',
        github: 'Github',
        about: 'About',
        lang: '中文',
        langIcon: '#icon-d-cn'
      };
});

const changeLang = () => {
  store.commit('changeLang');
  if (store.state.lang === 'zh-CN') {
    router.push(`/zh${route.path}`);
  } else {
    router.push(`/${route.path.replace('/zh/', '')}`);
  }
};
</script>

<template>
  <ul class="nav-list">
    <li class="nav-item">
      <router-link :to="`${prefix}/`">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-d-online"></use>
        </svg>
        {{ linkNames.home }}
      </router-link>
    </li>
    <li class="nav-item">
      <router-link :to="`${prefix}/docs`">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-d-docs"></use>
        </svg>
        {{ linkNames.docs }}
      </router-link>
    </li>
    <li class="nav-item">
      <router-link :to="`${prefix}/demo`">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-d-demo"></use>
        </svg>
        {{ linkNames.demo }}
      </router-link>
    </li>
    <li class="nav-item">
      <a href="https://github.com/imzbf/md-editor-v3" target="_blank">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-d-github"></use>
        </svg>
        {{ linkNames.github }}
      </a>
    </li>
    <li class="nav-item">
      <router-link :to="`${prefix}/about`">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-d-about"></use>
        </svg>
        {{ linkNames.about }}
      </router-link>
    </li>
    <li class="nav-item" @click="changeLang">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="linkNames.langIcon"></use>
      </svg>
      {{ linkNames.lang }}
    </li>
  </ul>
</template>
