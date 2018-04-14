import http from './../util/http';

import {
  TEACHER
} from './constant';

export default {
  /**
   * 获取讲师列表
   * @param {*} params 
   */
  getTeachers(index = 0, size = 0) {
    return http.get(`${TEACHER}?pageIndex=${index}&pageSize=${size}`)
  },

}
