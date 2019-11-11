<template>
  <div class="app">
    
<van-notice-bar
  text="一部极其朴实、诚恳的纪录片悄无声息地出现，当时没能激起什么水花，没背景没资本没观众没口碑，整整13集，近400分钟，以2.6万的低价卖给了爱奇艺。 去年，这部纪录片"
  left-icon="volume-o"
/>

    <van-search placeholder="来搜索你想看的影片吧" v-model="value" />

    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item><img style="width:100%;height:100%" src="../assets/img/banner1.jpg"/></van-swipe-item>
      <van-swipe-item><img style="width:100%;height:100%" src="../assets/img/banner2.jpg"/></van-swipe-item>
      <van-swipe-item><img style="width:100%;height:100%" src="../assets/img/banner3.jpg"/></van-swipe-item>
      <van-swipe-item><img style="width:100%;height:100%" src="../assets/img/banner4.jpg"/></van-swipe-item>
    </van-swipe>
  </div>
</template>>

<script>
import Vue from "vue";
//引入组件 
import {  Search , Swipe, SwipeItem ,NoticeBar } from "vant";
//使用组件
Vue.use(Search).use(Swipe).use(SwipeItem).use(NoticeBar);

export default {
  name: "app",
  data(){
    return{
      list:[]
    }
  },
 
};
</script>