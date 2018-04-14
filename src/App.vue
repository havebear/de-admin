<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import locStore from "storejs";

export default {
  name: "App",
  created() {
    this.setAccount();
  },
  methods: {
    async setAccount() {
      const token = await locStore("token");
      const user = await locStore("user");
      if (token && user) {
        this.$store.commit("setToken", token);
        this.$store.commit("setUser", JSON.parse(user));
      } else {
        this.$router.push("/login");
      }
    }
  }
};
</script>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
