<template>
  <div class="login">
    <div class="login-box">
      <!-- {{token}} -->
      <el-form ref="form" :model="account" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="account.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="account.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :loading="loading" @click="submit()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import locStore from "storejs";
import adminService from "@/api/admin-service";

export default {
  name: "Login",
  data() {
    return {
      loading: false,
      account: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    async submit() {
      this.loading = true;
      await this.login(this.account);
      this.loading = false;
      if (this.isLogin) {
        console.log("登录成功");
        this.$router.push("/");
      }
    },
    ...mapActions(["login"])
  },
  computed: {
    ...mapGetters({
      token: "token",
      isLogin: "isLogin"
    })
  }
};
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: $padding;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
}

.login-box {
  border: $border;
  padding: $padding;
  border-radius: $radius;
  background-color: #fff;
}
</style>
