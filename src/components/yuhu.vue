<template>
  <div id="app">
    <ul>
          <van-count-down :time="time" />
      <li v-for="(item,index) of list" :key="index">
        <p>{{item.id}}</p>
        <p>{{item.title}}</p>
        <img :src="item.images[0]" style="width:200px;height:200px;" />
      </li>
    </ul>
    <van-rate v-model="value" color="#0f0" count="7" @change="check" />
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
      <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
    </van-goods-action>
  </div>
</template>


<script>

import { log } from "util";

import Vue from "vue";
Vue.prototype.$api = api;

import {
  Rate,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  CountDown
} from "vant";

Vue.use(Rate)
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(CountDown)
  .use(GoodsActionButton);

export default {
  name: "app",
  components: {
  },
  data() {
    return {
      list: [],
      value: 3,
      time: 30 * 60 * 60 * 1000
    };
  },
  methods: {
    check(val) {
      console.log(val);
    },
    onClickIcon() {
      Toast("点击图标");
    },
    onClickButton() {
      Toast("点击按钮");
    }
  },
  created() {
    let item = {
      method: "get",
      // url: "http://47.92.119.7:8081/advise/list"
      url:'https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0'
    };
    this.$api.getDetail(item).then(res => {
       console.log(res.data.data)
      this.list = res.data.data;
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
