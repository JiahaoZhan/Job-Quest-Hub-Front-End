// import * as React from 'react';
import { message } from "antd";
import axios from "axios";
import { store, logOut } from "../redux";
import { url, apiUrl } from "./uri";

axios.defaults.headers["Content-Type"] = "application/json";

// 创建axios实例
const service = axios.create({
  baseURL: `${url}${apiUrl}`,
  timeout: 60 * 1000,
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const token = store.getState().user.token;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      console.log(config.headers['Authorization']);
      console.log("***Set JWT token***")
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    console.log("reponse interceptor: ", response);
    // 抛出401错误，因为token失效，重新刷新页面，清空缓存，跳转到登录界面
    if (response.data.code === 401 || response.data.code === 403) {
      console.log("退出登录");
      store.dispatch(logOut());
      message.error("token失效, 或长时间未操作, 请重新登录");
    }
    return response
  },
  (error) => {
    console.log("error===", error.response);
    const { status } = error.response;

    if (status === 401 || status === 403) {
      store.dispatch(logOut());
      message.error("token失效, 或长时间未操作, 请重新登录");
    } else {
      message.error("网络异常，请稍后再试");
    }
    return Promise.reject(error);
  }
);

export default service;