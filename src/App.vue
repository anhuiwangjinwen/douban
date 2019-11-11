<template>
  <div id="app">
  <Heade></Heade>
  <router-view></router-view>
  <Footer></Footer>
  </div>
</template>


<script>


import Vue from "vue";
import Heade from './components/Heade'
import Footer from './components/Footer'


export default {
  name: "app",
  components: {
    Heade,
    Footer,
  },
  data() {
    return {
    };
  },
  methods: {
  }
}
</script>


