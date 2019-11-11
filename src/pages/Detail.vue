<template>
  <div class="detail">
    <van-image round width="3rem" height="3rem" :src="list.data[($route.params.id)-1].img" />

    <span>片名：{{this.list.data[($route.params.id)-1].title}}</span>

    <p>
      评分：
      <van-rate
        v-model="value"
        :size="25"
        color="#ee0a24"
        void-icon="star"
        void-color="#eee"
        @change="change"
      />
    </p>

    <p>故事背景：{{this.list.data[($route.params.id)-1].content}}</p>


  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import {
  Image,
  Rate,
} from "vant";
Vue.use(Image)
  .use(Rate)
  
export default {
  name: "detail",
  data() {
    return {
      list: [],
      value: 4
    };
  },
  mounted() {
    console.log(this.list[this.$route.params.id - 1]);

    axios({
      url: "/list.json"
    }).then(res => (this.list = res.data));
  },
  methods: {
    change() {
      alert("感谢宁的评分！");
    }
  }
};
</script>