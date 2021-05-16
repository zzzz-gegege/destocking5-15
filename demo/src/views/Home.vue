<template>
  <div class="home">
    <el-button type="primary" style="position:absolute;top:0px;right:100px"
      @click="setting"
    >数据管理</el-button>
    <el-pagination
      background
      layout="prev, pager, next"
      class="pagin"
      :page-size="10"
      @current-change="change"
      :total="data.length"
    >
    </el-pagination>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>名字</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) of tableData"
          :key="index"
          :class="index % 2 === 0 ? 'deep' : 'shallow'"
        >
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { data } from "../data/index.js";
console.log(data.length / 10);
export default {
  name: "Home",
  data() {
    return {
      data: data,
      tableData: data.slice(0, 10),
      tatalnum: data.length / 10 + 1,
    };
  },
  methods: {
    change(page) {
      this.tableData = this.data.slice(page * 10 - 10, page * 10);
    },
    setting(){
      this.$router.push("/data")
    }
  },
};
</script>
<style scoped>
table {
  width: 50%;
  margin: 60px auto;
  
}

tr {
  height: 40px;
  line-height: 40px;
}
tr:hover{
  background-color: #d9dbe0;
}
td,
th {
   text-align: center;
  border: 1px solid #ccc;
}
.shallow {
  background-color: #fbfbfd;
}
.deep {
  background-color: #eceffd;
}
table {
  border-collapse: collapse;
}
.pagin {
  margin-top: 40px;
  text-align: center;
}
.home {
  position: relative;
}
</style>

