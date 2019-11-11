<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" @click="sy">首页</van-tabbar-item>
    <van-tabbar-item icon="search" @click="yk">影库</van-tabbar-item>
    <van-tabbar-item icon="friends-o" @click="wd">我的</van-tabbar-item>
    <van-tabbar-item icon="setting-o" @click="sz">设置</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar).use(TabbarItem);
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    sy() {
      this.$router.push("/Home");
    },
    yk() {
      this.$router.push("/List");
    },
    wd() {
      this.$router.push("/User");
    },
    sz() {
      this.$router.push("/Set");
    }
  }
};
</script>