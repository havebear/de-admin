<template>
  <div class="m-apply">
    <div class="data-table">
      <el-table :data="applys" border style="width: 100%" v-loading="isLoading">
        <el-table-column type="index" width="50">
        </el-table-column>
        <el-table-column prop="actual_name" label="姓名">
        </el-table-column>
        <el-table-column prop="phone" label="电话">
        </el-table-column>
        <el-table-column prop="actual_name" label="身份证">
        </el-table-column>
        <el-table-column prop="create_time" label="提交时间">
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
import applyService from "@/api/apply-service";

export default {
  name: "MApply",
  data() {
    return {
      applys: []
    };
  },
  created() {
    this.setLoading(true);
  },
  mounted() {
    this.getApplys();
  },
  methods: {
    ...mapMutations({
      setLoading: "setLoading"
    }),
    getApplys() {
      applyService.getApplys().then(res => {
        this.applys = res.data.data;
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
