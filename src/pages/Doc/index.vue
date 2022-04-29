<script setup lang="ts">
import { ref } from 'vue';
import MdEditor, { HeadList } from 'md-editor-v3';
import { version } from '../../../package.json';
import { useStore } from 'vuex';

import docText from './doc-zh-CN.md';

const MdCatalog = MdEditor.Catalog;
const scrollElement = document.documentElement;
const mdText = ref(docText.replace(/\$\{EDITOR_VERSION\}/g, version));
const catalogList = ref<Array<HeadList>>([]);
const store = useStore();

const onGetCatalog = (arr: any[]) => {
  catalogList.value = arr;
};
</script>

<template>
  <div class="container">
    <div class="doc">
      <div class="content">
        <md-editor
          editorId="doc-preview"
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
            editorId="doc-preview"
            :theme="store.state.theme"
            :scrollElement="scrollElement"
          />
        </div>
      </div>
    </div>
  </div>
</template>
