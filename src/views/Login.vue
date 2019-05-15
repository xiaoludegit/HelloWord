<template>
  <div class="login">
    <el-card class="login-header">
      <div style="width:72%;margin:0 auto;padding: 0 9px 20px;">
        <div class="header-left">
          <i class="logo" @click="openHome"></i>
          <span class="title">登陆</span>
        </div>
        <div class="header-right">
          <span class="text">还没有糯米账号？</span>
          <el-button class="reg-btn" @click="jumpRegistered">注册</el-button>
        </div>
      </div>
    </el-card>
    <div class="login-body">
      <div class="login-content">
        <div class="body-img"></div>
        <div class="body-form">
          <p class="form-title">
            登录百度糯米
          </p>
          <div class="login-phone" v-if="loginType === 'account'">
            <i class="el-icon-phone"></i>
            <a href="#" @click.prevent="loginType = 'phone'" class="phone"
              >短信快捷登陆</a
            >
          </div>
          <el-form :model="formLabelAlign" :rules="rules" ref="ruleForm">
            <el-form-item prop="userName" v-if="loginType === 'account'">
              <el-input
                v-model="formLabelAlign.userName"
                clearable
                placeholder="手机/邮箱/用户名/糯米帐号"
              >
                <i class="shop-icon-people el-input__icon" slot="prefix"> </i>
              </el-input>
            </el-form-item>
            <el-form-item prop="phoneNum" v-else>
              <el-input
                style="margin-top:20px;"
                v-model="formLabelAlign.phoneNum"
                placeholder="手机号"
                clearable
              >
                <i class="shop-icon-phoe el-input__icon" slot="prefix"> </i>
              </el-input>
            </el-form-item>
            <el-form-item
              prop="userPasd"
              style="margin-bottom:0px;"
              v-if="loginType === 'account'"
            >
              <el-input
                v-model="formLabelAlign.userPasd"
                placeholder="密码"
                clearable
              >
                <i class="shop-icon-lock el-input__icon" slot="prefix"> </i>
              </el-input>
            </el-form-item>
            <el-form-item prop="captch" v-else>
              <el-input
                v-model="formLabelAlign.captch"
                placeholder="动态密码"
                clearable
                style="width:50%;"
              >
              </el-input>
              <el-button style="width: 48%;float: right;"
                >发送动态密码</el-button
              >
            </el-form-item>
            <el-form-item
              v-if="loginType === 'account'"
              style="margin-bottom:0px;"
            >
              <el-checkbox v-model="formLabelAlign.autoLogin"
                >下次自动登陆</el-checkbox
              >
              <a
                href="https://passport.baidu.com/?getpassindex&tt=1551505207860&gid=EBA1628-D0F6-48E1-A133-8ACBCBFF1C9B&tpl=nuomi&u=https%3A%2F%2Fpassport.baidu.com%2Fv3%2Flogin%2Fapi%2Fauth%3Ftpl%3Dnuomi%26return_type%3D5%26u%3Dhttps%253a%252f%252fm.nuomi.com%252fwebapp%252fuser%252fsetstoken%253fcallback%253dcb%2526redirect%253d1%26callback%3Dcb"
                class="phone"
                target="_blank"
                >登陆遇到问题？</a
              >
            </el-form-item>
          </el-form>
          <div style="margin-top:20px;">
            <el-button type="primary" class="login-btn" @click="submitForm"
              >登陆</el-button
            >
          </div>
          <div style="margin:10px 0;" v-if="loginType === 'phone'">
            <span style="font-size:12px;color:#666;">阅读并接受</span>
            <a
              href="https://passport.baidu.com/static/passpc-account/html/protocal.html"
              style="color:#73adc9;"
              >《百度用户协议》</a
            >
            <a
              href="#"
              style="float:right;"
              @click.prevent="loginType = 'account'"
              >帐号密码登录</a
            >
          </div>
          <div style="padding: 10px 0;">
            <a href="#" class="shop-icon-qq"></a>
            <a href="#" class="shop-icon-wb" style="margin-left:15px;"></a>
          </div>
        </div>
      </div>
    </div>
    <div class="login-footer">
      <!-- 关于百度糯米| 常见问题| 违规投诉| 开放平台| 用户协议| 客服电话：400-9216-666（每天9:00 - 22:00）
            ©2015 nuomi.com 京ICP证030173号  京公网安备11010802014106号 -->
      <ul class="footer-menu">
        <li>
          <a href="#">关于百度糯米</a>
        </li>
        <li>
          <a href="#">常见问题</a>
        </li>
        <li>
          <a href="#">违规投诉</a>
        </li>
        <li>
          <a href="#">开放平台</a>
        </li>
        <li>
          <a href="#">用户协议</a>
        </li>
        <li>
          <span style="font-size:12px;color:#666;"
            >客服电话：<font style="color:#f69;">400-9216-666</font>（每天9:00 -
            22:00）</span
          >
        </li>
      </ul>
      <div style="color:#999;font-size:10px;text-align:center;margin:40px 0;">
        ©2015 nuomi.com 京ICP证030173号 京公网安备11010802014106号
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLabelAlign: {
        userName: "",
        userPasd: "",
        captch: "",
        phoneNum: "",
        autoLogin: true
      },
      loginType: "account", //phone
      rules: {
        userName: [
          { required: true, message: "请输入用户名或手机号", trigger: "blur" },
          { min: 3, max: 20, message: "长度 3 到 20 个字符", trigger: "blur" }
        ],
        userPasd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 20, message: "长度 3 到 20 个字符", trigger: "blur" }
        ],
        phoneNum: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { min: 8, max: 11, message: "长度 8 到 11 个字符", trigger: "blur" }
        ],
        captch: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 4, max: 4, message: "长度4个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    openHome() {
      this.$router.push("/");
    },
    jumpRegistered() {
      this.$router.push("/registered");
    },
    submitForm() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          if (this.loginType === "phone") alert("暂不支持");
          let url = "";
          let sendData = {};
          this.$http.post(url, sendData).then(({ data }) => {
            console.log(data);
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less">
.login {
  .el-input__icon {
    transition: unset;
  }
  a {
    font-size: 12px;
    color: #666;
    text-decoration-line: none;
    &:hover {
      color: #73adc9;
      text-decoration-line: underline;
    }
  }
  .el-card {
    .el-card__body {
      padding: 0;
    }
  }
  .login-header {
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
  .login-body {
    border-bottom: 4px solid #dbdbdb;
    background: #f5fbfd;
    .login-content {
      width: 75%;
      margin: 0 auto;
      padding: 0 9px 30px;
      .body-img {
        display: inline-block;
        width: 623px;
        height: 337px;
        margin-top: 49px;
        background-image: url("../assets/login-logo_30a0915.png");
      }
      .body-form {
        float: right;
        position: relative;
        margin-top: 49px;
        padding: 20px 14px;
        width: 279px;
        min-height: 247px;
        border: 1px solid #eee;
        background: #fff;
        .form-title {
          height: 25px;
          line-height: 25px;
          font-size: 17px;
          font-weight: 700;
          color: #666;
        }
        .login-btn {
          width: 100%;
          font-size: 14px;
          font-weight: 600;
          background: #f69;
          outline: #f69;
          border: #f69;
        }
        .el-form {
          .el-form-item {
            margin-bottom: 15px;
            .el-checkbox {
              .el-checkbox__label {
                font-size: 12px;
                color: #666;
              }
            }
          }
          .phone {
            float: right;
            font-size: 12px;
            color: #666;
            text-decoration-line: none;
            &:hover {
              color: #73adc9;
              text-decoration-line: underline;
            }
          }
        }
        .login-phone {
          text-align: right;
          padding: 5px 0;
          .el-icon-phone {
            color: #73adc9;
          }
          .phone {
            font-size: 12px;
            color: #666;
            text-decoration-line: none;
            &:hover {
              color: #73adc9;
              text-decoration-line: underline;
            }
          }
        }
        .el-input__prefix {
          left: 10px;
        }
      }
    }
  }
  .login-footer {
    .footer-menu {
      width: 80%;
      margin: 50px auto;
      display: flex;
      justify-content: space-between;
      li {
        border-left: 1px solid #dbdbdb;
        text-align: center;
        &:first-child {
          border-left: none;
        }
        a,
        span {
          display: inline-block;
          margin-left: 30px;
        }
      }
    }
  }
}
</style>
