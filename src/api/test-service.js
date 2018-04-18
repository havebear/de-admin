import http from './../util/http';

import {
  TEST
} from './constant';

export default {
  /**
   * 获取评测列表
   * @param {*} params 
   */
  getTests(index = 0, size = 0) {
    return http.get(`${TEST}?pageIndex=${index}&pageSize=${size}`)
  },

}
