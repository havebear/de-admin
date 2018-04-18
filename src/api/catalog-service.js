import http from './../util/http';

import {
  CATLOG
} from './constant';

export default {
  /**
   * 获取分类列表
   * @param {*} params 
   */
  getCatalogs(index = 0, size = 0) {
    return http.get(`${CATLOG}?pageIndex=${index}&pageSize=${size}`)
  },

}
