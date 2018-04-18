

import http from './../util/http';

import {
  APPLY
} from './constant';

export default {
  /**
   * 获取申请列表
   * @param {*} params 
   */
  getApplys(index = 0, size = 0) {
    return http.get(`${APPLY}?pageIndex=${index}&pageSize=${size}`)
  },

}
