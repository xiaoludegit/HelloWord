<template>
  <div class="registered">
    <el-card class="registered-header">
      <div style="width:72%;margin:0 auto;padding: 0 9px 20px;">
        <div class="header-left">
          <i class="logo" @click="openHome"></i>
          <span class="title">注册百度账号</span>
        </div>
        <div class="header-right">
          <span class="text">我已注册，现在就</span>
          <el-button class="reg-btn" @click="jumpLogin">登陆</el-button>
        </div>
      </div>
    </el-card>
    <div class="registered-body">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
      >
        <el-form-item label="用户名" prop="userName" required>
          <el-input
            v-model="ruleForm.userName"
            placeholder="请设置用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="userPhone" required>
          <el-input
            v-model="ruleForm.userPhone"
            placeholder="可用于登陆和找回密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="userPasd" required>
          <el-input
            v-model="ruleForm.userPasd"
            placeholder="请设置登陆密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="userCode" required>
          <el-input
            v-model="ruleForm.userCode"
            placeholder="请输入验证码"
          ></el-input>
          <el-button>获取短信验证码</el-button>
        </el-form-item>
        <el-form-item label="" prop="userDeal" required>
          <el-checkbox v-model="ruleForm.userDeal">
            <span>
              阅读并接受
            </span>
            <a href="#">《百度用户协议》</a>
            <span>及</span>
            <a href="#">《百度隐私权保护声明》</a>
          </el-checkbox>
        </el-form-item>
        <el-form-item label="">
          <el-button>注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        userName: "",
        userPasd: "",
        userPhone: "",
        userCode: "",
        userDeal: false
      },
      rules: {
        userName: [
          { required: true, message: "请设置用户名", trigger: "blur" },
          { min: 3, max: 20, message: "长度 3 到 20 个字符", trigger: "blur" }
        ],
        userPasd: [
          { required: true, message: "请设置密码", trigger: "blur" },
          { min: 3, max: 20, message: "长度 3 到 20 个字符", trigger: "blur" }
        ],
        userPhone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { min: 8, max: 11, message: "长度 8 到 11 个字符", trigger: "blur" }
        ],
        userCode: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 4, max: 4, message: "长度4个字符", trigger: "blur" }
        ],
        userDeal: [
          {
            required: true,
            message: "请勾选“阅读并接受百度用户协议”",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    openHome() {
      this.$router.push("/");
    },
    jumpLogin() {
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="less">
.registered {
  .el-card {
    .el-card__body {
      padding: 0;
    }
  }
  .registered-header {
    .header-left {
      display: inline-block;
      .logo {
        display: inline-block;
        width: 96px;
        height: 37px;
        background-image: url("../assets/user_z_fe074f3.png");
        background-repeat: no-repeat;
        background-position: -286px -23px;
        vertical-align: bottom;
      }
      .title {
        color: #666;
        font-size: 18px;
        display: inline-block;
        height: 24px;
        line-height: 24px;
        padding: 0 15px;
        margin-left: 20px;
        margin-top: 38px;
        border-left: 1px solid #c9c9c9;
      }
    }
    .header-right {
      float: right;
      margin-top: 27px;
      .text {
        height: 32px;
        color: #666;
        line-height: 32px;
        font-size: 12px;
      }
      .reg-btn {
        height: 30px;
        line-height: 0px;
      }
    }
  }
}
</style>
