<template>
  <div class="login">
    <el-form class="form">
      <h2 style="color:#fff;">登录</h2>
       <el-form-item style="position:relative;">
         <i class="el-icon-user" style="position:absolute;top:13px;left:14px;"></i>
        <el-input v-model="username" placeholder="用户名" class="user" style="width:300px;"></el-input>
      </el-form-item>
       <el-form-item style="position:relative;">
        <i class="el-icon-unlock" style="position:absolute;top:13px;left:14px;"></i>
        <el-input v-model="password" placeholder="密码" class="pass" style="width:300px;"></el-input>
      </el-form-item>
     
      <el-button type="primary" class="button" @click="login">login</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
     username:"",
     password:"",    
    };
  },
  methods:{
    login(){
      if(!(this.username&&this.password)){
        this.$message.error('登录失败');
        return
      }
      this.$router.push("/home");
    }
  }
};
</script>
<style>
  .form{
   position:absolute;
   box-sizing: border-box;
   padding-top:40px;
   left: 50%;
   top: 50%;
    width: 300px;
    height: 320px;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .login{
    width: 100vw;
    height: 100vh;
    background-color:#241938;
  }
  body{
    margin: 0;
    padding: 0;
  }
  
  .button{
    width: 300px;
    height: 30px;
    padding: 0px !important;
  }
  i{
    z-index: 10;
  }
  .el-input__inner{
    padding: 0 28px !important;
  }
</style>