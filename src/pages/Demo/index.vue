<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import MdEditor, { HeadList } from 'md-editor-v3';
import axios from '@/utils/request';
import { version } from '../../../package.json';
import { useStore } from 'vuex';

const MdCatalog = MdEditor.Catalog;

const mdText = ref();
const catalogList = ref<Array<HeadList>>([]);
const store = useStore();
const scrollElement = document.documentElement;
const queryMd = () => {
  axios
    .get(`/demo-${store.state.lang}.md`)
    .then(({ data }) => {
      mdText.value = (data as string).replace(/\$\{EDITOR_VERSION\}/g, version);
    })
    .catch((e) => {
      console.log(e);

      mdText.value = '文档读取失败！';
    });
};

onMounted(queryMd);
watch(() => store.state.lang, queryMd);

const onGetCatalog = (arr: any[]) => {
  catalogList.value = arr;
};
</script>

<template>
  <div class="container">
    <div class="doc">
      <div class="content">
        <md-editor
          editorId="demo-preview"
          v-model="mdText"
          :theme="store.state.theme"
          :language="store.state.lang"
          :previewTheme="store.state.previewTheme"
          preview-only
          show-code-row-number
          @onGetCatalog="onGetCatalog"
        />
      </div>
      <div class="catalog">
        <div class="affix">
          <md-catalog
            editorId="demo-preview"
            :theme="store.state.theme"
            :scrollElement="scrollElement"
          />
        </div>
      </div>
    </div>
  </div>
</template>
