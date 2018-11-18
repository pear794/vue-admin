<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
        <h3 class="title">系统登录</h3>
        <el-form-item prop="account">
        <el-input type="text" v-model="ruleForm.account" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <!-- <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox> -->
        <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="logining">登录</el-button>
        </el-form-item>
  </el-form>
</template>

<script>
    import { requestLogin } from '../api/api.js'
    export default {
        name : "login",
        data (){
            return {
                logining : false,
                ruleForm : {
                    account : "admin",
                    checkPass : "123456"
                },
                rules : { //用于表单验证
                    account : [
                        {required : true,message : "请输入账号",trigger : "blur"}
                    ],
                    checkPass : [
                        {required:true,message:"；请输入密码",trigger : "blur"}
                    ]
                },
                checked : true
            }
        },
        methods : {
            handleSubmit (e){
                let that = this;
                this.$refs.ruleForm.validate( (valid) => {
                    if(valid){
                       this.logining = true;
                       let loginParams = { username:this.ruleForm.account,password:this.ruleForm.checkPass };
                       requestLogin(loginParams).then(data => {
                           this.logining = false;
                           let { msg,code,user } = data;
                           if(code !== 200){
                               this.$message({
                                   message : msg,
                                   type : "error"
                               })
                           }else{
                                sessionStorage.setItem('user', JSON.stringify(user));
                                this.$router.push({ path: '/index' });
                           }
                       })
                    }
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .login-container {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        margin: 180px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
        .title {
            margin: 0px auto 40px auto;
            text-align: center;
            color: #505458;
        }
        .remember {
            margin: 0px 0px 35px 0px;
        }
  }
</style>
