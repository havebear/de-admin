<template>
  <div class="m-feedback">
    <div class="data-table">
      <el-table :data="feedbacks" border style="width: 100%" v-loading="isLoading">
        <el-table-column type="index" width="50">
        </el-table-column>
        <el-table-column prop="to_id" label="用户">
        </el-table-column>
        <el-table-column prop="content" label="内容">
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
import feedbackService from "@/api/feedback-service";

export default {
  name: "MFeedback",
  data() {
    return {
      feedbacks: []
    };
  },
  created() {
    this.setLoading(true);
  },
  mounted() {
    this.getFeedbacks();
  },
  methods: {
    ...mapMutations({
      setLoading: "setLoading"
    }),
    getFeedbacks() {
      feedbackService.getFeedbacks().then(res => {
        this.feedbacks = res.data.data;
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


