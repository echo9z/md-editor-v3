<script setup lang="ts">
import './index.less';

const backTop = () => {
  document.documentElement.scroll({
    top: 0,
    behavior: 'smooth'
  });
};
</script>

<template>
  <div class="fixed-footer">
    <div class="back-top" @click="backTop">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-top"></use>
      </svg>
    </div>
  </div>
</template>
