<template>
  <div class="login-box" id="app">

    <el-form :model="loginForm" ref="loginForm" action="oauth2Login.action" method="post"
             label-position="left" label-width="0px" class="demo-ruleForm login-container">
      <h2 class="title">OA Authentication Platform</h2>
      <el-form-item
          prop="user.username"
          :rules="[
      { required: true, message: 'Please input username', trigger: 'blur' }
    ]">
        <el-input type="text" name="user.username" v-model="loginForm.user.username" auto-complete="off"
                  placeholder="username"></el-input>
      </el-form-item>
      <el-form-item
          prop="user.password"
          :rules="[
      { required: true, message: 'Please input password', trigger: 'blur' }
    ]">
        <el-input type="password" name="user.password" v-model="loginForm.user.password" auto-complete="off"
                  placeholder="password"></el-input>
      </el-form-item>
      <el-form-item style="width:100%; text-align:center;">
        <el-button type="primary" style="width:47%;" @click.native.prevent="reset">Reset</el-button>
        <el-button type="primary" style="width:47%;" @click="submitForm('loginForm')">Login</el-button>
      </el-form-item>
      </el-form>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      loginForm: {
        user: {"username": "", "password": ""},

      },
      action: "oauth2Login.action"
    }
  },
  methods: {
    reset: function() {
      this.loginForm.user.username = ''
      this.loginForm.user.password = ''
    },
    submitForm: function(loginForm){
      this.$refs[loginForm].validate(
          (valid) => {
            if (valid) {
              alert('submit!');
              this.$router.push("layout/" + this.loginForm.user.username)
            } else {
              console.log("login error")
              return false;
            }
          }

      )
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 100px auto;
  width: 320px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.title {
  margin: 0px auto 20px auto;
  text-align: center;
  color: #505458;
}
</style>