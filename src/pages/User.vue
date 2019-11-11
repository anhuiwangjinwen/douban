<template>
  <div class="user">
    <div class="content">
      <div class="header">
        <h2>
          <!-- <img :src="baseUrl + user.icon" alt="" style="border-radius:50%"/> -->
          <img src="../assets/img/banner1.jpg" alt style="border-radius:50%" />
        </h2>
        <div class="user-box">
          <a>{{ user.nikename }}</a>
          <a href="javescript: ;" @click="logout" style="margin-left:.3rem; color:red">注销</a>
        </div>
        <ul class="clear">
          <li>
            <!--  -->
            <p>
              关注：
              <em>111</em>
            </p>
          </li>
          <li>
            <p class="end">
              粉丝
              <em>222</em>
            </p>
          </li>
        </ul>
      </div>
      <div class="docList">
        <!-- <ul>
          <li class="gk-text">
            <i></i>
            <p>公开博文</p>
            <b></b>
            <span>0</span>
          </li>
          <li class="mm-text">
            <i></i>
            <p>秘密博文</p>
            <b></b>
            <span>0</span>
          </li>
          <li class="cg-text">
            <i></i>
            <p>草稿箱</p>
            <b></b>
            <span>0</span>
          </li>
          <li class="sc-text">
            <i></i>
            <p>收藏夹</p>
            <b></b>
            <span>0</span>
          </li>
          <li class="my_cz">
            <i></i>
            <p>收藏夹</p>
          </li>
        </ul> -->
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  beforeRouteEnter(to, from, next) {
    axios({
      url: "/api/user"
    }).then(res =>
      res.data.err === 0
        ? next(_this => (_this.user = res.data.data))
        : next("/login")
    );
  },
  methods: {
    logout() {
      axios({
        url: "/api/logout",
        method: "delete"
      }).then(res => (res.data.err === 0 ? this.$router.push("/Home") : null));
    }
  }
};
</script>

<style>
@import url("../assets/css/mydoc.css");
</style>