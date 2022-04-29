<script setup lang="ts">
import IzAbout from '../About/index.vue';
import text from '/public/about-zh-CN.md';
</script>

<template>
  <iz-about :text="text" />
</template>
