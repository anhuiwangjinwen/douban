<template>
  <div class="set">
      <h1>设置</h1>
    <p><van-switch v-model="checked" />夜间模式</p>

    <p>
      <van-switch v-model="checked" disabled /> 免打扰模式
    </p>
   <p>
        <van-switch v-model="checked" active-color="#07c160" inactive-color="#ee0a24" />白天模式
   </p>
  </div>
</template>

<script>
import Vue from "vue";
import { Switch } from "vant";

Vue.use(Switch);
export default {
  data() {
    return {
      checked: true
    };
  }
};
</script>