<template>
  <div class="aside border-r">
    <div class="flex justify-center items-center h-18">Vue3 Element Admin</div>
    <el-scrollbar>
      <el-menu router default-active="route.path" class="w-52 border-none">
        <div v-for="(item, index) in layoutStore.aside.menu" :key="index">
          <!-- 单级无children -->
          <div v-if="!item.children || item.children.length === 0">
            <el-menu-item
              :index="item.path"
              :class="{ active: item.path === layoutStore.route.currentPath }"
            >
              <i class="iconfont mr-3" :class="[item.meta.icon]" />
              <template #title>{{ item.meta.title }}</template>
            </el-menu-item>
          </div>
          <!-- 单级有children -->
          <div v-if="item.children && item.children.length === 1">
            <el-menu-item
              :index="item.children[0].path"
              :class="{
                active: item.children[0].path === layoutStore.route.currentPath,
              }"
            >
              <i class="iconfont mr-3" :class="[item.children[0].meta.icon]" />
              <template #title>{{ item.children[0].meta.title }}</template>
            </el-menu-item>
          </div>
          <!-- 多级 -->
          <div v-if="item.children && item.children.length > 1">
            <el-submenu :index="item.path">
              <template #title>
                <i class="iconfont mr-3" :class="[item.meta.icon]" />
                <span>{{ item.meta.title }}</span>
              </template>
              <el-menu-item
                v-for="(subItem, subIndex) in item.children"
                :key="subIndex"
                :index="subItem.path"
                :class="{
                  active: subItem.path === layoutStore.route.currentPath,
                }"
                >{{ subItem.meta.title }}</el-menu-item
              >
            </el-submenu>
          </div>
        </div>
      </el-menu>
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

function toPage(item) {
  router.push({ path: item.redirect || item.path });
}
</script>

<style lang="postcss" scoped>
.aside {
  /* background: color-mod(#fff blend(#1890ff 10%)); */
  & .el-menu {
    overflow-x: hidden;
    & .el-menu-item{
      &.active {
        background-color: #e8f4ff;
        color: #1890ff;
        & i {
          color: #1890ff;
        }
      }
      &:hover{
        background-color: #e8f4ff;
        color: #1890ff;
        & i {
          color: #1890ff;
        }
      }
    }
  }
}

</style>
