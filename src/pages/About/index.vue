<script setup lang="ts">
import { ref } from 'vue';
import type { PropType } from 'vue';
import MdEditor from 'md-editor-v3';
import { useStore } from 'vuex';
import { version } from '../../../package.json';
import text from '/public/about-en-US.md';

const props = defineProps({
  text: {
    type: String as PropType<string>,
    default: text
  }
});

const mdText = ref(props.text?.replace(/\$\{EDITOR_VERSION\}/g, version));
const store = useStore();
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
