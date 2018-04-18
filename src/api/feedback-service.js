import http from './../util/http';

import {
  FEEDBACK
} from './constant';

export default {
  /**
   * 获取课程列表
   * @param {*} params 
   */
  getFeedbacks(index = 0, size = 0) {
    return http.get(`${FEEDBACK}?pageIndex=${index}&pageSize=${size}`)
  },

}
