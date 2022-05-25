<template>
  <el-submenu v-if="meuns.children" :index="meuns.url">
    <template slot="title">
      <i :class="meuns.icon"></i>
      <span slot="title">{{ meuns.name }}</span>
    </template>
    <nav-menu v-for="(item, index) in meuns.children" :key="index" :meuns="item"></nav-menu>
  </el-submenu>
  <el-menu-item v-else :index="meuns.url">
    <i :class="meuns.icon"></i>
    <span slot="title">{{ meuns.name }}</span>
  </el-menu-item>
</template>
<script>
export default {
  name: "NavMenu",
  props: {
    meuns: {
      type: Object,
      required: true,
    },
  },
  methods: {
    hea() {
      console.log(1)
    }
  },
};
</script>
<style  scoped>
</style>>