import http from './../util/http';

import {
  COURSE
} from './constant';

export default {
  /**
   * 获取课程列表
   * @param {*} params 
   */
  getCourses(index = 0, size = 0) {
    return http.get(`${COURSE}?pageIndex=${index}&pageSize=${size}`)
  },

}
