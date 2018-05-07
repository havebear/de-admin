<template>
  <div class="m-test">
    <div class="data-table">
      <el-table :data="tests" border style="width: 100%" v-loading="isLoading">
        <el-table-column type="index" width="50">
        </el-table-column>
        <el-table-column prop="title" label="名称">
        </el-table-column>
        <el-table-column prop="type_id" label="分类">
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
import testService from "@/api/test-service";

export default {
  name: "MTest",
  data() {
    return {
      tests: []
    };
  },
  created() {
    this.setLoading(true);
  },
  mounted() {
    this.getTests();
  },
  methods: {
    ...mapMutations({
      setLoading: "setLoading"
    }),
    getTests() {
      testService.getTests().then(res => {
        this.tests = res.data.data;
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
