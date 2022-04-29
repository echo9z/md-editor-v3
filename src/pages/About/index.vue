<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import MdEditor from 'md-editor-v3';
import axios from '@/utils/request';
import { version } from '../../../package.json';
import { useStore } from 'vuex';

const mdText = ref();
const store = useStore();

const queryMd = () => {
  axios
    .get(`/about-${store.state.lang}.md`)
    .then(({ data }) => {
      mdText.value = (data as string).replace(/\$\{EDITOR_VERSION\}/g, version);
    })
    .catch((e) => {
      console.error(e);

      mdText.value = '文档读取失败！';
    });
};

onMounted(queryMd);
watch(() => store.state.lang, queryMd);
</script>

<template>
  <div class="container">
    <div class="doc">
      <div class="content">
        <md-editor
          :theme="store.state.theme"
          :modelValue="mdText"
          :previewTheme="store.state.previewTheme"
          preview-only
          show-code-row-number
        />
      </div>
    </div>
  </div>
</template>
