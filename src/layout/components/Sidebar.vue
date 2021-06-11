<template>
  <div class="sidebar_left h-full w-16">
    <div class="logo_wrap h-16 flex flex-col items-center justify-center">
      <img src="/logo.png" class="w-8">
    </div>
    <el-scrollbar>
      <div v-for="(item, index) in routes" :key="index" class="w-16 h-16 flex flex-col items-center justify-center">
        <div class="iconfont mb-1" :class="[item.meta.icon]"></div>
        <div class="">{{ item.meta.title }}</div>
      </div>
    </el-scrollbar>
  </div>
  <div class="sidebar_right h-full">
    <el-scrollbar>
      <el-menu
        unique-opened
        :default-active="activeMenu"
        @open="handleOpen"
        @close="handleClose"
        router
        :collapse="layoutStore.sidebar.collapse"
      >
        <div v-for="(item, index) in routes" :key="index">
          <el-submenu v-if="item.children.length > 1" :index="item.path">
            <template #title>
              <i class="iconfont" :class="[item.meta.icon]" />
              <span>{{ item.meta.title }}</span>
            </template>
            <el-menu-item
              v-for="(subItem, subIndex) in item.children"
              :key="subIndex"
              :index="subItem.path"
              @click="toPage(subItem.path)"
              >{{ subItem.meta.title }}</el-menu-item
            >
          </el-submenu>
          <el-menu-item
            v-if="item.children.length === 1"
            :index="item.children[0].path"
            @click="toPage(item.path)"
          >
            <i class="iconfont" :class="[item.children[0].meta.icon]" />
            <template #title
              ><span>{{ item.children[0].meta.title }}</span></template
            >
          </el-menu-item>
        </div>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { routes } from "@/router";
import { useLayoutStore } from "@/store/layout.js";

// 获取激活的菜单
const activeMenu = computed(() => {
  const route = useRoute();
  const { meta, path } = route;
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});

const layoutStore = useLayoutStore();

console.log(routes, activeMenu);

function handleOpen(e) {
  // console.log(e);
}
function handleClose(e) {
  // console.log(e);
}
function toPage(e) {
  // console.log(e);
  // router.push({
  //   path: e,
  // });
}
</script>

<style lang="postcss" scoped>
.sidebar_left{
  background: linear-gradient(90deg,#282c34,#000);
  color: #fff;
  .logo_wrap{
    width: 100px;
  }
}
</style>