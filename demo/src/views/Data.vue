<template>
  <div  class="main">
    <el-button type="primary"
      @click="usersettiing = !usersettiing"
      class="setting"
      >新建</el-button
    >
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
          <th style="text-align:center;">操作</th>
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
          <td
            style="display: flex; align-items: center; justify-content: center"
          >
            <el-button type="primary" class="el-icon-edit" size="mini" @click="setting(item)">编辑</el-button>
            <el-button
              type="primary"
              icon="el-icon-delete"
              size="mini"
              @click="remove(item)"
            >删除</el-button>
          </td>
        </tr>
      </tbody>
    </table>
    <el-dialog title="新增用户" :visible.sync="usersettiing" width="30%">
      <span slot="footer" class="dialog-footer"></span>
        <el-form :label-position="labelPosition">
          <el-form-item label="id">
            <el-input placeholder="用户id" v-model="userid"></el-input>
          </el-form-item>
          <el-form-item label="用户名">
            <el-input placeholder="用户名" v-model="username"></el-input>
          </el-form-item>
          <el-form-item >
            <el-button type="primary" @click="datapush('usersettiing')">确定</el-button>
            <el-button @click="revoke('usersettiing')">取消</el-button>
          </el-form-item>
        </el-form>
    </el-dialog>
    <el-dialog title="编辑用户" :visible.sync="dialogVisible" width="30%">
      <span slot="footer" class="dialog-footer"></span>
        <el-form :label-position="labelPosition">
          <el-form-item label="id">
            <el-input placeholder="用户id" v-model="userid"></el-input>
          </el-form-item>
          <el-form-item label="用户名">
            <el-input placeholder="用户名" v-model="username"></el-input>
          </el-form-item>
          <el-form-item >
            <el-button type="primary" @click="set()">确定</el-button>
            <el-button @click="revoke('dialogVisible')">取消</el-button>
          </el-form-item>
        </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { data } from "../data/index.js";
export default {
  name: "Data",
  data() {
    return {
      data: data,
      tableData: data.slice(0, 10),
      tatalnum: data.length / 10 + 1,
      dialogVisible: false,
      usersettiing:false,
      labelPosition:'right',
      userid:"",
      username:"",
      //定义容器对象，储存被修改用户信息
      setobj:null
    };
  },
  methods: {
    switchdialo() {
      this.dialogVisible = !this.dialogVisible;
    },
    datapush(info){
      this[info] = !this[info];
      this.data.push({
        id:this.userid,
        name:this.username
      })
        this.userid = '';
        this.username = '';
    },
    revoke(info){
        this[info] = !this[info];
        this.userid = '';
        this.username = ''
    },
     change(page) {
      this.tableData = this.data.slice(page * 10 - 10, page * 10);
    },
    remove(item){
       this.$confirm('此操作将永久删除是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.tableData.splice(this.tableData.indexOf(item),1);
          this.data.splice(this.data.indexOf(item),1);
          this.$message({
            type: 'success',
            message: '删除成功!',
            duration:700
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
            duration:700
          });          
        });
    },
    setting(item){
      this.switchdialo();
      this.setobj = item;
    },
    set(){
      this.tableData.forEach(item =>{
        if(item.id === this.setobj.id){
          item.id = this.userid;
          item.name = this.username
          this.userid = '';
          this.username= "";
          this.switchdialo();
        }
         return
      })
    }
  },
};
</script>

<style >
table {
  width: 50%;
  margin: 60px auto;
}

tr {
  height: 40px;
  line-height: 40px;
}
td,
th {
  text-indent: 20px;
  text-align: start;
  border: 1px solid #ccc;
  height: 50px;
  line-height: 50px;
}
.shallow {
  background-color: #fbfbfd;
}
tr:hover{
  background-color: #d9dbe0;
}
.deep {
  background-color: #eceffd;
}
table {
  border-collapse: collapse;
}
.main{
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.setting{
  position: absolute;
  left: 25%;
  top: 20px;
}
.pagin{
  margin-top:20px;
}
</style>