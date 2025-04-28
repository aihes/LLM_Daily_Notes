<template>
  <div class="theme">
    <Layout>
      <template #nav-bar-content-before>
        <CustomNav />
      </template>
    </Layout>
  </div>
</template>

<script setup>
import { Layout } from 'vitepress/theme'
import CustomNav from './components/CustomNav.vue'
</script>

<style>
/* 可以添加额外的全局样式 */
</style>
