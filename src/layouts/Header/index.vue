<script setup lang="ts">
import { computed, reactive } from 'vue';
import { useStore } from 'vuex';
import './index.less';
import IzNavigation from '../Navigation/index.vue';
// import DropDown from '@/components/Dropdown/index.vue';

const store = useStore();

const data = reactive({
  previewThemevisible: false
});

const texts = computed(() => {
  return store.state.lang === 'zh-CN'
    ? {
        desc: 'Markdown编辑器Vue3版本，使用jsx和typescript语法开发，支持切换主题、prettier美化文本等。',
        defaultTheme: '默认模式',
        darkTheme: '暗黑模式',
        previewBtn: '切换预览主题',
        previewDefaultTheme: '默认主题',
        previewVuepressTheme: 'Vuepress主题',
        previewGithubTheme: 'Github主题'
      }
    : {
        desc: 'Markdown Editor for Vue3, developed by jsx and typescript, support different themes、beautify content by prettier.',
        defaultTheme: 'Default Theme',
        darkTheme: 'Dark Theme',
        previewBtn: 'Preview Style',
        previewDefaultTheme: 'Default Style',
        previewVuepressTheme: 'Vuepress Style',
        previewGithubTheme: 'Github Style'
      };
});
</script>

<template>
  <header class="page-header">
    <section class="container">
      <h1 class="project-name">md-editor-v3</h1>
      <p class="project-desc">{{ texts.desc }}</p>
      <iz-navigation />
      <p class="header-actions">
        <button class="btn btn-header" @click="store.commit('changeTheme', 'light')">
          {{ texts.defaultTheme }}
        </button>
        <button class="btn btn-header" @click="store.commit('changeTheme', 'dark')">
          {{ texts.darkTheme }}
        </button>
        <!-- <drop-down :visible="data.previewThemevisible">
          <button class="btn btn-header">{{ texts.previewBtn }}</button>
          <template #overlay>
            <el-dropdown-menu>
              <el-dropdown-item @click="store.commit('changePreviewTheme', 'default')">
                {{ texts.previewDefaultTheme }}
              </el-dropdown-item>
              <el-dropdown-item @click="store.commit('changePreviewTheme', 'github')">
                {{ texts.previewGithubTheme }}
              </el-dropdown-item>
              <el-dropdown-item @click="store.commit('changePreviewTheme', 'vuepress')">
                {{ texts.previewVuepressTheme }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </drop-down> -->
      </p>
    </section>
  </header>
</template>
