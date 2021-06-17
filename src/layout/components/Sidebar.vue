<template>
  <div class="sidebar h-full w-18">
    <div class="logo_wrap h-18 flex flex-col items-center justify-center">
      <img src="/logo.png" class="w-8" />
    </div>
    <el-scrollbar>
      <div
        v-for="(item, index) in routes"
        :key="index"
        class="
          w-18
          h-18
          flex flex-col
          items-center
          justify-center
          cursor-pointer
          item
          transition-all
          duration-300
        "
        :class="{
          active: checkedActiveWrapMenu(item),
        }"
        @click="toPage(item)"
      >
        <div class="iconfont mb-1 text-lg" :class="[item.meta.icon]"></div>
        <div class="text-sm">{{ item.meta.title }}</div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { routes } from "@/router";

const route = useRoute();
const router = useRouter();

// 检测sider激活菜单(3级嵌套)
const checkedActiveWrapMenu = (routeItem) => {
  const allChildrenArr = []
  if (routeItem.children && Array.isArray(routeItem.children)) {
    routeItem.children.map(item => {
      allChildrenArr.push(item.path)
      if (item.children && Array.isArray(item.children)) {
        item.children.map(subItem => {
          allChildrenArr.push(subItem.path)
        })
      }
    })    
  }
  return allChildrenArr.includes(route.path)
};

function toPage(item) {
  router.push({ path: item.redirect || item.path })
}
</script>

<style lang="postcss" scoped>
.sidebar {
  background: #111316;
  color: #fff;
  .item.active {
    background: #1890ff;
  }
}
</style>