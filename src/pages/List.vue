<template>
  <div class="list">
    <ul>
      <!-- <router-link to="/Detail/1" tag="li">
          <img style="width:100px;height:100px" :src= this.list.data[2].img />
          <span>{{this.list.data[2].title}}</span>
      </router-link>-->
      <!-- <router-link to="/Detail/1" tag="li" v-for = "(item,index) of list.data" :key="index">
        <img :src=item.img />
        <span style="margin-left:100px;color:blue;height:40px">{{item.title}}</span>
      </router-link>-->
      <li v-for="(item,index) of list.data" :key="index">
        <router-link :to="'/Detail/' + item.id">
          <img :src="item.img" />
          <span style="margin-left:100px;color:blue;height:40px">{{item.title}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    axios({
      method: "get",
      url: "./list.json"
    }).then(res => (this.list = res.data));
  }
};
</script>
<style>
span {
  display: block;
}
ul{display: flex;align-items: center;flex-direction: column;}
</style>