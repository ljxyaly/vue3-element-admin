<template>
  <div class="sidebar_left h-full w-16">
    <div class="logo_wrap h-16 flex flex-col items-center justify-center">
      <img src="/logo.png" class="w-8" />
    </div>
    <el-scrollbar>
      <div
        v-for="(item, index) in routes"
        :key="index"
        class="
          w-16
          h-16
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
  <!-- <div class="sidebar_right h-full w-48">
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
              @click="toPage(subItem)"
              >{{ subItem.meta.title }}</el-menu-item
            >
          </el-submenu>
          <el-menu-item
            v-if="item.children.length === 1"
            :index="item.children[0].path"
            @click="toPage(item)"
          >
            <i class="iconfont" :class="[item.children[0].meta.icon]" />
            <template #title
              ><span>{{ item.children[0].meta.title }}</span></template
            >
          </el-menu-item>
        </div>
      </el-menu>
    </el-scrollbar>
  </div> -->
  <div class="sidebar_right h-full w-48">
    <div class="h-16 flex flex-col items-center justify-center">
      vue3 后台数据管理
    </div>
    <el-scrollbar>
      <!-- <el-menu
        unique-opened
        :default-active="state.defaultActive"
        @open="handleOpen"
        @close="handleClose"
        router
        :collapse="layoutStore.sidebar.collapse"
      >
        <div v-for="(item, index) in getInnerMenu" :key="index">
          <el-menu-item
            :index="item.path"
            @click="toPage(item)"
          >
            <i class="iconfont" :class="[item.meta.icon]" />
            <template #title
              ><span>{{ item.meta.title }}</span></template
            >
          </el-menu-item>
        </div>
      </el-menu> -->
      <div v-for="(item, index) in getInnerMenu" :key="index">
        <div>
          <div
            class="
              pl-6
              pr-6
              flex
              items-center
              justify-start
              h-12
              cursor-pointer
              transition-all
              hover:bg-blue-400
              hover:text-white
            "
            :class="{ 'bg-blue-400': item.path === activeMenu, 'text-white': item.path === activeMenu }"
          >
            <i class="iconfont mr-3" :class="[item.meta.icon]" />
            <span>{{ item.meta.title }}</span>
          </div>
        </div>
      </div>
    </el-scrollbar>
  </div>
  <!-- <div>
    <div class="sidebar_left h-full w-52">
      <div class="logo_wrap h-16 flex flex-col items-center justify-center">vue3 后台数据管理</div>
      <el-scrollbar>
        <div v-for="(item, index) in routes" :key="index">
          <div v-if="item.children.length === 1" class="pl-6 pr-6 flex items-center justify-start h-12 cursor-pointer transition-all hover:bg-blue-500">
            <i class="iconfont mr-3" :class="[item.meta.icon]" />
            <span>{{ item.meta.title }}</span>
          </div>
          <div v-if="item.children.length > 1">
            <div class="pl-6 pr-6 flex items-center justify-between h-12 cursor-pointer transition-all hover:bg-blue-500">
              <span>
                <i class="iconfont mr-3" :class="[item.meta.icon]" />
                <span>{{ item.meta.title }}</span>
              </span>
              <i class="el-icon-arrow-right" />
            </div>
            <div class="pl-6 pr-6 flex justify-center items-center flex-wrap">
              <div v-for="(subItem, subIndex) in item.children" :key="subIndex" class="w-3/6 leading-10">
                <span class="p-2 mt-1 mb-1 text-sm transition-all cursor-pointer rounded-sm hover:bg-blue-500" @click="toPage(subItem)">{{ subItem.meta.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </el-scrollbar>      
    </div>
  </div> -->
</template>

<script setup>
import { computed, reactive } from "vue";
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router";
import { routes } from "@/router";
import { useLayoutStore } from "@/store/layout.js";

const router = useRouter();
const route = useRoute();

// 获取激活的菜单
const activeMenu = computed(() => {
  const { meta, path } = route;
  return path;
});

// 获取内层菜单
const getInnerMenu = computed(() => {
  const { path } = route;
  const arr = routes.filter((item) => {
    return item.children.some((subItem) => {
      return subItem.path === path;
    });
  });
  return arr.length === 1 ? arr[0].children : [];
});

const layoutStore = useLayoutStore();

// 检测外层激活菜单
const checkedActiveWrapMenu = (routeItem) => {
  if (routeItem.children && Array.isArray(routeItem.children)) {
    return routeItem.children.some((item) => {
      return item.path === activeMenu.value;
    });
  }
  return false;
};

function handleOpen(e) {
  // console.log(e);
}
function handleClose(e) {
  // console.log(e);
}
function toPage(item) {
  
  item.redirect
    ? router.push({ path: item.redirect })
    : router.push({ path: item.path });
    console.log(activeMenu)
}
const state = reactive({
  defaultActive: route.path,
});

// 路由更新时
onBeforeRouteUpdate((to) => {
  console.log(to);
  state.defaultActive = to.path;
});
</script>

<style lang="postcss" scoped>
.sidebar_left {
  /* background: linear-gradient(90deg, #ecf0f8, #000); */
  background: #111316;
  color: #fff;
  .item.active {
    background: #1890ff;
  }
}
.sidebar_right {
  background: #fff;
  /* color: #fff; */
}
</style>