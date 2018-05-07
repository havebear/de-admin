import adminService from '@/api/admin-service'
import locStore from 'storejs'

export default {
  /**
   * 登录
   * @param {*} param0 
   * @param {*} parmas 
   */
  async login({
    dispatch,
    commit,
    state
  }, parmas) {
    await adminService.login(parmas).then(res => {
      const data = res.data;
      switch (data.code) {
        case 0:
          commit('setToken', data.data.token);
          commit('setUser', data.data.user);
          commit('setLogin', true);
          console.log(2);
          break;
        default:
          commit('emptyUser');
          commit('emptyToken');
          commit('setLogin', false);
          break;
      }
    }).catch(err => {
      console.log(err);
    })
  },

  /**
   * 退出登录
   * @param {*} param0 
   */
  logout({
    dispatch,
    commit,
    state
  }) {
    commit('emptyUser');
    commit('emptyToken');
    commit('setLogin', false);
  }
}
