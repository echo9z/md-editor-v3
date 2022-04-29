<script lang="ts" setup>
import { watch, onMounted } from 'vue';
import { useStore } from 'vuex';
import IzHeader from './Header/index.vue';
import FixedFooter from '../components/FixedFooter/index.vue';

const store = useStore();

const changeClass = () => {
  if (store.state.theme === 'dark') {
    document.documentElement.className = 'theme-dark';
  } else {
    document.documentElement.className = '';
  }
};

watch(
  () => store.state.theme,
  () => {
    if (store.state.theme === 'dark') {
      document.documentElement.className = 'theme-dark';
    } else {
      document.documentElement.className = '';
    }
  }
);

onMounted(changeClass);
</script>

<template>
  <div class="docs-page">
    <iz-header />
    <router-view />
    <fixed-footer />
  </div>
</template>
