<template>
  <div class="flex h-full">
    <sidebar />
    <div class="flex-1">
      <navbar />
      <app-main />
    </div>
  </div>    
</template>

<script setup>
import AppMain from './components/AppMain.vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<style>

</style>
