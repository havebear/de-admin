
<template>
  <div class="m-course">
    <div class="data-table">
      <el-table :data="courses" border style="width: 100%" v-loading="isLoading">
        <el-table-column type="index" width="50">
        </el-table-column>
        <el-table-column prop="name" label="名称">
        </el-table-column>
        <el-table-column prop="create_time" label="创建时间">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini">编辑</el-button>
            <el-button size="mini" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import courseService from "@/api/course-service";

export default {
  name: "MCourse",
  data() {
    return {
      courses: []
    };
  },
  created() {
    this.setLoading(true);
  },
  mounted() {
    this.getCourses();
  },
  methods: {
    ...mapMutations({
      setLoading: "setLoading"
    }),
    getCourses() {
      courseService.getCourses().then(res => {
        this.courses = res.data.data;
        this.setLoading(false);
      });
    }
  },
  computed: {
    ...mapGetters({
      isLoading: "isLoading"
    })
  }
};
</script>

<style scoped lang="scss">

</style>

