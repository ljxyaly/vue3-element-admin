<template>
  <router-view v-slot="{ Component }" class="p-4">
    <component :is="Component" />
  </router-view>
</template>

<script setup>

</script>

<style>
</style>
