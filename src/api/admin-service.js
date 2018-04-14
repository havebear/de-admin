import http from './../util/http';

import {
  ADMIN_LOGIN,
  ADMIN_LOGOUT
} from './constant';

export default {
  /**
   * 登录
   * @param {*} params 
   */
  login(params) {
    return http.post(ADMIN_LOGIN, params)
  },

  logout() {
    return http.post(ADMIN_LOGOUT)
  }
}
