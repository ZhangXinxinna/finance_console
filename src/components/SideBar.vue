<template>
  <div class="sidebar">
    <el-menu router
      :style="[{ height: windowHeight + 'px' }]"
      :default-active=this.$router.path
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">积分等级管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/a">积分等级列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-check"></i>
          <span slot="title">会员管理管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/IntegralTable">会员列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-tools"></i>
          <span slot="title">系统设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/DataDictionary">数据字典</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import router from '@/router';
export default {
  data() {
    return {
      isCollapse: false,
      windowHeight: document.documentElement.clientHeight,
    };
  },
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 15rem;
}
</style>