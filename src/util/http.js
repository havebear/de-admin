import axios from 'axios';
import config from '@/config/config'
import store from '@/store'
import {
  Message
} from 'element-ui';

const http = axios.create({
  baseURL: config.apiServer,
  timeout: 10000 // 请求超时时间
})

http.interceptors.request.use(
  config => {
    console.log('请求已被拦截');
    // var csrftoken = Cookies.get('csrfToken');
    // config.headers['x-csrf-token'] = csrftoken;
    const token = store.state.token || 'ASEDRFGYHJFGYHFHGJJHW#%$^TFASGHDJH';
    if (token) {
      config.headers.token = token;
    }
    return config
  })

http.interceptors.response.use(
  function (response) {
    // 请求正常则返回
    if (response.data.data.code === 0) {
      return Promise.resolve(response);
    } else {
      Message({
        showClose: true,
        message: response.data.data.message || '系统发生错误',
        type: 'error'
      });
    }

  },
  function (error) {
    console.log(error);
    return Promise.reject(error)
  })

export default http;
