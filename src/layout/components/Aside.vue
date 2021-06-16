<template>
  <!-- <el-menu
    router
    default-active="route.path"
    class="text-sm"
    @open="handleOpen"
    @close="handleClose">
    <div v-for="(item, index) in getInnerMenu" :key="index"> -->
  <!-- 单级无children -->
  <!-- <div v-if="!item.children || item.children.length === 0">
        <el-menu-item :index="item.path">
          <i class="iconfont" :class="[item.meta.icon]" />
          <template #title>{{ item.meta.title }}</template>
        </el-menu-item>
      </div> -->
  <!-- 单级有children -->
  <!-- <div v-if="item.children && item.children.length === 1">
        <el-menu-item :index="item.children[0].path">
          <i class="iconfont" :class="[item.children[0].meta.icon]" />
          <template #title>{{ item.children[0].meta.title }}</template>
        </el-menu-item>
      </div> -->
  <!-- 多级 -->
  <!-- <div v-if="item.children && item.children.length > 1">
        <el-submenu :index="item.path">
          <template #title>
            <i class="iconfont" :class="[item.meta.icon]" />
            <span>{{ item.meta.title }}</span>
          </template>
          <el-menu-item v-for="(subItem, subIndex) in item.children" :key="subIndex" :index="subItem.path">{{ subItem.meta.title }}</el-menu-item>
        </el-submenu>
      </div>
    </div>
  </el-menu> -->
  <div class="h-full w-48 shadow-md">
    <div
      class="
        h-16
        flex flex-col
        items-center
        justify-center
        border-b border-gray-100 border-r
      "
    >
      vue3 后台数据管理
    </div>
    <el-scrollbar>
      <div v-for="(item, index) in getMenu" :key="index">
        <!-- 单级 -->
        <div v-if="!item.children || item.children.length === 0">
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
              hover:text-blue-600
            "
            :class="{
              'text-blue-500': item.path === route.path,
              'bg-blue-100': item.path === route.path,
            }"
            @click="toPage(item)"
          >
            <i class="iconfont mr-3" :class="[item.meta.icon]" />
            <span>{{ item.meta.title }}</span>
          </div>
        </div>
        <!-- 多级 -->
        <div v-if="item.children && item.children.length > 1">
          <el-collapse>
            <el-collapse-item>
              <template #title>
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
                    hover:text-blue-600
                  "
                >
                  <i class="iconfont mr-3" :class="[item.meta.icon]" />
                  <span>{{ item.meta.title }}</span>
                </div>
              </template>
              <div
                v-for="(subItem, subIndex) in item.children"
                :key="subIndex"
                class="
                  pl-6
                  pr-6
                  flex
                  items-center
                  justify-start
                  h-12
                  cursor-pointer
                  transition-all
                  hover:text-blue-500
                "
                @click="toPage(subItem)"
              >
                <i class="iconfont mr-3" :class="[subItem.meta.icon]" />
                <span>{{ subItem.meta.title }}</span>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useLayoutStore } from "@/store/layout.js";
import { routes } from "@/router";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const layoutStore = useLayoutStore();

// 获取aside菜单
const getMenu = computed(() => {
  const arr = routes.filter((item) => {
    return item.children.some((subItem) => {
      return subItem.path === route.path;
    });
  });
  return arr.length === 1 ? arr[0].children : [];
});

function toPage(item) {
  router.push({ path: item.redirect || item.path })
}

</script>



<style>
</style>
