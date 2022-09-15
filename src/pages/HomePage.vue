<template>
  <div class="homepage" :style="[{ 'height':windowHeight + 'px'}]">
    <Side />
    <el-card>
      <router-view />
    </el-card>
  </div>
</template>

<script>
import Side from "@/components/SideBar.vue";
export default {
  name: "App",
  components: {
    Side
  },
  data() {
    return {
      windowHeight: document.documentElement.clientHeight - 30
    }
  },
};
</script>

<style scoped>
.homepage {
  display: flex;
}
.el-card {
  width: 100%;
  margin: 2rem 2rem 0 2rem;
}
</style>