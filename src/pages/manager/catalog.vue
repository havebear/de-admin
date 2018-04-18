<template>
  <div class="m-catalog">
    <div class="data-table">
      <el-table :data="catalogs" border style="width: 100%" v-loading="isLoading">
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
import catalogService from "@/api/catalog-service";

export default {
  name: "MCatalog",
  data() {
    return {
      catalogs: []
    };
  },
  created() {
    this.setLoading(true);
  },
  mounted() {
    this.getCatalogs();
  },
  methods: {
    ...mapMutations({
      setLoading: "setLoading"
    }),
    getCatalogs() {
      catalogService.getCatalogs().then(res => {
        this.catalogs = res.data.data;
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
