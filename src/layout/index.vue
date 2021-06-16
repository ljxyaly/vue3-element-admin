<template>
  <div class="flex h-full">
    <sidebar />
    <Aside />
    <div class="flex-1 bg-gray-50">
      <navbar />
      <tagviews />
      <app-main />
    </div>
  </div>    
</template>

<script setup>
import Aside from './components/Aside.vue'
import AppMain from './components/AppMain.vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import Tagviews from './components/tagviews.vue'
</script>

<style>

</style>
