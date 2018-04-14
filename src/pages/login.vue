<template>
  <div class="login">
    <div class="login-box">
      {{token}}
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login(form)">登录</el-button>
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
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    submit() {
      adminService
        .login(this.form)
        .then(res => {
          const data = res.data;
          this.$store.commit("setToken", data.data.token);
          this.$store.commit("setUser", data.data.user);
          locStore("token", data.data.token);
          locStore("user", JSON.stringify(data.data.user));
        })
        .catch(err => {
          console.log(err);
        });
    },
    ...mapActions(["login"])
  },
  computed: {
    ...mapGetters({
      token: "token"
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
