<template>
  <div class="homeBox">
    <el-card class="signup-content">
      <img src="../../assets/image/惠民购logo.png" alt="">
      <p class="slogen">惠民购——提供价格导向购物的解决方案</p>
      <div class="register" v-show="nowStatus === 'register'">
        <el-form :model="registerForm" :rules="registerRules" ref="registerForm" label-width="0px">
          <el-form-item prop="name" class="no-label">
            <el-input placeholder="请输入用户名" v-model="registerForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="email" class="no-label">
            <el-input placeholder="请输入邮箱" v-model="registerForm.email"></el-input>
          </el-form-item>
          <el-form-item prop="password" class="no-label">
            <el-input type="password" placeholder="请输入密码" v-model="registerForm.password"></el-input>
          </el-form-item>
          <el-form-item prop="passwordEnsure" class="no-label">
            <el-input type="password" placeholder="请再次输入密码" v-model="registerForm.passwordEnsure"></el-input>
          </el-form-item>
          <el-form-item prop="submit">
            <el-button class="submit-btn" type="primary" @click="submitForm('registerForm')">注册</el-button>
          </el-form-item>
        </el-form>

        <div class="el-footer register-footer">
        <span>
          注册即代表同意
          <a href="#">《惠民购》协议</a>
          <a href="#">《隐私保护指引》</a>
        </span>
          <a href="#">注册机构号</a>
        </div>
      </div>


      <div class="login" v-show="nowStatus === 'login'">
        <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="0px">
          <el-form-item prop="username" class="no-label">
            <el-input placeholder="手机号或邮箱" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password" class="no-label">
            <el-input placeholder="请输入密码" v-model="loginForm.password" type="password"></el-input>
          </el-form-item>

          <div class="others">
            <span class="l1"> <a href="#">手机验证码登录</a></span>
            <span class="l2"> <a href="#">忘记密码？</a></span>
          </div>
          <el-form-item prop="submit">
            <el-button class="submit-btn" type="primary" @click="submitForm('loginForm')">登录</el-button>
          </el-form-item>
        </el-form>

        <div class="el-footer login-footer">
        <span>
          <a href="#">二维码登录</a>&nbsp·
          <a href="#">海外手机登录</a>&nbsp·
          <a href="#">社交帐号登录</a>
        </span>
        </div>
      </div>

      <div class="switcher">
        {{ tips[nowStatus].base }}
        <span @click="nowStatus=nowStatus==='register'?'login':'register'">
        {{ tips[nowStatus].link }}
      </span>
      </div>
    </el-card>
  </div>
</template>

<script>
import GlobalVariable from "../GlobalVariable";
export default {
  name: "login",
  data() {

    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.registerForm.passwordEnsure != '') {
          this.$refs.registerForm.validateField('passwordEnsure');
        }
        callback();
      }
    };

    const validatePassEnsure = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致'));
      } else {
        callback();
      }
    };

    return {
      nowStatus: 'login',
      tips: {
        register: {
          base: '已有帐号？',
          link: '登录',
        },
        login: {
          base: '没有账号？',
          link: '注册',
        },
      },
      registerForm: {
        username: '',
        email: '',
        password: '',
        passwordEnsure: '',
      },
      registerRules: {
        email: [
          {required: true, message: '请输入邮箱', trigger: 'blur'},//trigger:'blur'表示当光标离开这里时如果满足条件就出触发提示
          {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']},
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {validator: validatePass, trigger: 'blur'},
        ],
        passwordEnsure: [
          {required: true, message: '请再次输入密码', trigger: 'blur'},
          {validator: validatePassEnsure, trigger: 'blur'},
        ],
      },
      loginForm: {
        username: '',
        password: '',
      },
      loginRules: {
        username: [
          {required: true, message: '请输入用户名或邮箱', trigger: 'blur'},
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
        ],
      },
    };
  },
  methods: {
    submitForm(formname) {
      this.$refs[formname].validate((valid) => {
        if (valid) {
          if (this.nowStatus === 'register') {
            $.ajax({
              "url":GlobalVariable.serverUserAddr+"/register",
              "type":"post",
              "data":{"username":this.registerForm.username,"password":this.registerForm.password,
                "email":this.registerForm.email},
              "success":function (data){
                //data=eval(data);
                alert(data);
                this.nowStatus="login"
              },
              "error":function (xhr, textStatus, errorThrow){
                alert(JSON.stringify(xhr));
              }
            })
          } else {
            $.ajax({
              "url":GlobalVariable.serverUserAddr+"/login",
              "type":"post",
              "data":{"username":this.loginForm.username,"password":this.loginForm.password},
              "success":function (data){
                alert(data);
                document.location.href="/?isLogin=true";
              },
              "error":function (xhr, textStatus, errorThrow){
                alert(JSON.stringify(xhr));
              }
            })
          }
        } else {
          this.$Message.error('error submit');
          return false;
        }
        return '';
      });
    },
  },
};
</script>

<style scoped>
.homeBox {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 70px;
  left: 0px;
  background: url("../../assets/bkimg.jpg") no-repeat;
  background-size: cover;
}

.signup-content {
  clear: both;
  position: relative;
  width: 40%;
  left: 30%;
  top: 50px;
  text-align: center;
}

.signup-content img {
  width: 70px;
  height: 70px;
}

.slogen {
  font-family: 华文楷体;
  font-weight: bold;
  font-size: larger;
}

.no-label {
  width: 80%;
  position: relative;
  left: 10%;
}

.l1 {
  position: relative;
  right: 25%;
  font-family: 黑体;
  font-size: small;
  font-weight: bold;
}

.l2 {
  position: relative;
  left: 25%;
  font-family: 黑体;
  font-size: small;
  font-weight: bold;
}

.submit-btn {
  clear: both;
  width: 80%;
  margin-top: 20px;
}

a {
  text-decoration: none;
  color: gray;
}

a:hover {
  color: black;
  font-weight: bolder;
}

.switcher {
  margin-top: 30px;
  padding: 20px 0 20px 0;
  background: #eeeeee;
}

.switcher span {
  color: blue;
}

.switcher span:hover {
  cursor: pointer;
}
</style>
