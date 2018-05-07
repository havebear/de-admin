<template>
  <div class="m-catalog">
    <div class="data-content">
      <div class="data-head">
        <el-button type="primary" @click="openModal()">添加分类</el-button>
      </div>
      <div class="data-table">
        <el-table :data="catalogs" border style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}" v-loading="isLoading">
          <el-table-column type="index" width="50">
          </el-table-column>
          <el-table-column prop="name" label="名称">
          </el-table-column>
          <el-table-column sortable prop="create_time" label="创建时间">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="openModal(scope.$index)">编辑</el-button>
              <el-button size="mini" type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <!-- 添加/编辑分类 -->
    <el-dialog title="添加分类" :visible.sync="dialogFormVisible" width="40%">
      <el-form :model="form">
        <el-form-item label="分类名称" :label-width="formLabelWidth">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="是否启用" :label-width="formLabelWidth">
          <el-select v-model="form.isenable" placeholder="请选是否启用">
            <el-option label="不启用" :value="0"></el-option>
            <el-option label="启用" :value="1"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel()">取 消</el-button>
        <el-button type="primary" @click="submit()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import catalogService from "@/api/catalog-service";

export default {
  name: "MCatalog",
  data() {
    return {
      catalogs: [],
      dialogFormVisible: false,
      form: {
        name: null,
        isenable: null,
        id: null
      },
      formLabelWidth: "6em"
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

    // 获取分类数据
    getCatalogs() {
      catalogService.getCatalogs().then(res => {
        this.catalogs = this.processCatalogs(res.data.data);
        this.setLoading(false);
      });
    },

    // 处理分类数据
    processCatalogs(data = []) {
      let temps = [];
      if (data.length) {
        data.forEach(item => {
          item.create_time = this.$moment(item.create_time).format(
            "YYYY-MM-DD HH:mm"
          );
        });
        temps = [...data];
      }
      return temps;
    },

    // 打开修改/新增分类弹出框
    openModal(index = null) {
      this.dialogFormVisible = true;
      index != null ? this.setFrom(this.catalogs[index]) : this.emptyForm();
    },

    // 设置表单内容
    setFrom(data) {
      this.form.name = data.name;
      this.form.isenable = data.isenable;
      this.form.id = data.id;
    },

    // 清空表单
    emptyForm() {
      this.form.name = null;
      this.form.isenable = null;
      this.form.id = null;
    },

    // 提交修改/新增分类数据
    submit() {
      console.log(this.form);
    },

    // 取消修改/新增分类数据
    cancel() {
      this.emptyForm();
      this.dialogFormVisible = false;
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
.data-content {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.data-head {
  margin-bottom: $padding;
}

.data-table {
  height: 0;
  flex: 1;
}
</style>
