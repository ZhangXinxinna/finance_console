<template>
  <div>
    <el-button
      type="success"
      size="small"
      plain
      icon="el-icon-plus"
      style="margin: 1rem; float: right"
      @click="handleAdd"
      >添加</el-button
    >
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="{ 'text-align': 'center' }"
      :fit="true"
      :height="tableHeight"
    >
      <el-table-column type="index" :index="indexMethod"> </el-table-column>
      <el-table-column
        v-for="(p, i) in columnData"
        :key="i"
        :prop="p.prop"
        :label="p.label"
      >
        <template slot-scope="scope">
          <div v-if="scope.$index == editRow">
            <el-button
              size="mini"
              @click="decrease(scope.$index, scope.column.property)"
              >-</el-button
            >
            <el-input
              style="width: 35%"
              v-model="scope.row[p.prop]"
              ref="input"
            ></el-input>
            <el-button
              size="mini"
              @click="addition(scope.$index, scope.column.property)"
              >+</el-button
            >
          </div>
          <div v-else>{{ scope.row[p.prop] }}</div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="small"
            type="warning"
            @click="handleSave(scope.$index)"
            v-if="scope.$index == editRow"
            >保存
          </el-button>
          <el-button size="small" @click="handleEdit(scope.$index)" v-else
            >编辑</el-button
          >
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.row.id, scope.$index)"
            >删除</el-button
          >
        </template>
        <el-input></el-input>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEdit: true,
      isSave: true,
      columnData: [
        { prop: "limit", label: "资金额度" },
        { prop: "Startinterval", label: "积分开始区间" },
        { prop: "Endnterval", label: "积分结束区间" },
      ],
      tableData: [
        {
          id: 1,
          limit: "10000",
          Startinterval: "1",
          Endnterval: "2",
        },
        {
          id: 2,
          limit: "100100",
          Startinterval: "1",
          Endnterval: "3",
        },
        {
          id: 3,
          limit: "10000",
          Startinterval: "1",
          Endnterval: "5",
        },
        {
          id: 4,
          limit: "10000",
          Startinterval: "1",
          Endnterval: "20",
        },
        {
          id: 5,
          limit: "10000",
          Startinterval: "1",
          Endnterval: "222",
        },
      ],
      editRow: null,
      tableHeight:document.documentElement.clientHeight - 30 - 100
    };
  },
  methods: {
    indexMethod(index) {
      return index + 1;
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2) {
        return "success-row";
      }
      return "";
    },
    handleEdit(row) {
      if (this.isSave) {
        this.editRow = row;
        this.isEdit = false;
        this.$nextTick(function () {
          this.$refs["input"][0].focus();
        });
        this.isSave = false;
      } else alert("您还未保存！");
    },
    handleAdd() {
      if (this.isSave) {
        this.tableData.push({
          limit: "",
          Startinterval: null,
          Endinterval: null,
        });
        this.editRow = this.tableData.length - 1;
        this.$nextTick(function () {
          this.$refs["input"][0].focus();
        });
        this.isSave = false;
      } else alert("您还未保存！");
    },
    handleSave(row) {
      this.isEdit = true;
      this.editRow = null;
      this.isSave = true;
    },
    handleDelete(id, row) {
      if (this.editRow == row) {
        this.isSave = true;
      }
      if (this.isSave) {
        alert("您确定要删除此条数据吗");
        this.tableData = this.tableData.filter((data) => data.id !== id);
        console.log(row.id);
        this.editRow = null;
      } else alert("您还未保存！");
    },
    decrease(index, name) {
      this.tableData[index][name]--;
    },
    addition(index, name) {
      this.tableData[index][name]++;
    },
  },
};
</script>

<style>
  .el-table .warning-row {
    background-color: oldlace;
  }
  
  .el-table .success-row {
    background-color: #f0f9eb;
  }
  .el-input {
    margin: 0.2rem;
    text-align: center;
  }
  </style>
  
