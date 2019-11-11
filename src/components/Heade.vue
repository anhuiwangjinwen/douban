<template>
  <div class="Heade">
    <van-nav-bar
      title="豆瓣"
      left-text=""
      right-text="VIP"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>>
<script>
import Vue from "vue";
//引入组件
import { NavBar } from "vant";
//使用组件
Vue.use(NavBar);
export default {
  name: "Heade",
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
    //   console.log(this.$router);
    //  this.$router.push("/Set")
    }
  }
};
</script>