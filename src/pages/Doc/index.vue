<script setup lang="ts">
import { ref } from 'vue';
import type { PropType } from 'vue';
import MdEditor from 'md-editor-v3';
import { version } from '../../../package.json';
import { useStore } from 'vuex';
import text from '/public/doc-en-US.md';

const props = defineProps({
  text: {
    type: String as PropType<string>,
    default: text
  }
});

const MdCatalog = MdEditor.Catalog;
const scrollElement = document.documentElement;
const mdText = ref(props.text?.replace(/\$\{EDITOR_VERSION\}/g, version));
const store = useStore();
</script>

<template>
  <div class="container">
    <div class="doc">
      <div class="content">
        <md-editor
          editorId="doc-preview"
          :model-value="mdText"
          :theme="store.state.theme"
          :language="store.state.lang"
          :previewTheme="store.state.previewTheme"
          preview-only
          show-code-row-number
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
