import axios from "axios";

const instance = axios.create({
  headers: {
    // "Access-Control-Allow-Origin": "*",
    // "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    "content-type": "application/json;charset=UTF-8"
    // "content-type": "application/x-www-form-urlencoded",
    // token: "one"
  },
  // baseURL: "http://localhost:8080/",
  timeout: 10000
  // withCredentials: false
});

// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    let token = window.localStorage.getItem("user_token") ? "11" : "22";
    // 在发送请求之前做某事，比如说 设置token
    config.headers["usertoken"] = token;
    return config;
  },
  error => {
    // 请求错误时做些事
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    // 对响应数据做些事
    if (response.status === 401) {
      console.log("返回到登录...");
      //跳转登陆页面
    }
    return response;
  },
  error => {
    if (error.response.status === 401) {
      console.log("返回到登录...");
      //跳转登陆页面
    }
    return Promise.reject(error.response); // 返回接口返回的错误信息
  }
);

export default instance;
