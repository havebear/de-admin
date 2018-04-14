<template>
  <div class="m-teacher">
    <div class="data-table">
      <el-table :data="teachers" border style="width: 100%">
        <el-table-column type="index" width="50">
        </el-table-column>
        <el-table-column prop="actual_name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="idc_number" label="身份证号码">
        </el-table-column>
        <el-table-column prop="phone" label="电话">
        </el-table-column>
        <el-table-column prop="create_time" label="注册日期">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import teacherService from "@/api/teacher-service";

export default {
  name: "MTeacher",
  data() {
    return {
      teachers: []
    };
  },
  mounted() {
    this.getTeachers();
  },
  methods: {
    getTeachers() {
      teacherService.getTeachers().then(res => {
        this.teachers = res.data.data;
      });
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("确认下架该讲师, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "下架成功!"
          });
        })
        .catch(() => {
          // this.$message({
          //   type: 'info',
          //   message: '已取消删除'
          // });
        });
    }
  }
};
</script>

<style scoped lang="scss">

</style>
