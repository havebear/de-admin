
<template>
  <div class="main">
    <el-container>
      <el-header>
        <div class="nav-top">
          <div class="logo">
            远程教育 - Admin
          </div>
          <div class="nav-top-action">
            <span class="welcome-text">hi，兵哥哥</span>
            <el-dropdown trigger="click" placement="bottom">
              <!-- <el-badge is-dot class="item"> -->
              <div class="nta-cover">
                <img src="http://cdn.aixifan.com/dotnet/artemis/u/cms/www/201708/30161624zc6pqlpa.jpg" alt="">
              </div>
              <!-- </el-badge> -->
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="clearfix">
                  个人资料
                </el-dropdown-item>
                <el-dropdown-item class="clearfix">
                  修改密码
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span class="logout-btn" @click="logout">退出</span>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu :default-active="active" class="el-menu-vertical-demo" @select="toUrl">
            <el-menu-item index="/manager">
              <i class="el-icon-menu"></i>
              <span slot="title">主页</span>
            </el-menu-item>
            <el-menu-item index="/manager/teacher">
              <i class="el-icon-search"></i>
              <span slot="title">讲师</span>
            </el-menu-item>
            <el-menu-item index="/manager/catalog">
              <i class="el-icon-edit"></i>
              <span slot="title">分类</span>
            </el-menu-item>
            <el-menu-item index="/manager/course">
              <i class="el-icon-date"></i>
              <span slot="title">课程</span>
            </el-menu-item>
            <el-menu-item index="/manager/test">
              <i class="el-icon-tickets"></i>
              <span slot="title">测评</span>
            </el-menu-item>
            <el-menu-item index="/manager/apply">
              <i class="el-icon-message"></i>
              <span slot="title">申请</span>
            </el-menu-item>
            <el-menu-item index="/manager/feedback">
              <i class="el-icon-edit"></i>
              <span slot="title">反馈</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>讲师</el-breadcrumb-item>
          </el-breadcrumb> -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      active: "/manager"
    };
  },
  mounted() {
    console.log(this.$route.fullPath);
    this.active = this.$route.fullPath;
  },
  methods: {
    toUrl(index) {
      this.$router.push(index);
    },
    logout() {}
  }
};
</script>

<style scoped lang="scss">
.main,
.el-container {
  width: 100%;
  height: 100%;
}

.el-header,
.el-footer {
  background-color: #555;
}

.el-aside {
  background-color: #fff;
}

.el-main {
  background-color: #f3f3f3;
}

.nav-top {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  padding: 8px 10px;
  background-color: #333;
  font-size: 18px;
  color: #eee;
  border: 1px solid #666;
  border-radius: $radius;
}
.nav-top-action {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #eee;
}

.nta-cover {
  width: 40px;
  height: 40px;
  // margin-left: 20px;
  overflow: hidden;
  box-sizing: border-box;
  border: 2px solid #666;
  border-radius: 50%;
}

.nta-cover img {
  width: 100%;
  height: 100%;
}

.welcome-text {
  margin-right: 20px;
}

.logout-btn {
  margin-left: 20px;
  cursor: pointer;
}
</style>