import axios from 'axios';
import config from '@/config/config'
import locStore from "storejs";

import {
  Message
} from 'element-ui';

const http = axios.create({
  baseURL: config.apiServer,
  timeout: 10000 // 请求超时时间
})

http.interceptors.request.use(
  async config => {
    // console.log(locStore('token'));
    try {
      console.log('触发了拦截器');
      const token = await locStore('token') || '';
      if (token) {
        config.headers.token = token;
      }
      return config
    } catch (error) {
      console.log(error);
    }
  })

http.interceptors.response.use(
  function (response) {
    // 请求正常则返回
    // if (response.data.code === 0) {
    //   return Promise.resolve(response);
    // } else {
    //   Message({
    //     showClose: true,
    //     message: response.data.msg || '系统发生错误',
    //     type: 'error'
    //   });
    // }
    if (response.data.code !== 0) {
      Message({
        showClose: true,
        message: response.data.msg || '系统发生错误',
        type: 'error'
      });
    }
    if (response.data.code == 4100) {
      setTimeout(() => {
        window.location = "http://localhost:8080/#/login"
      }, 1000)
    }
    return Promise.resolve(response);
  },
  function (error) {
    console.log(error);
    return Promise.reject(error)
  })

export default http;
