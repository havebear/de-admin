import adminService from '@/api/admin-service'
import locStore from 'storejs' 

export default {
  login({ dispatch, commit, state }, parmas) {
    adminService.login(parmas).then(res => {
      const data = res.data;
      switch (data.code) {
        case 0:
          commit('setToken', data.data.token);
          commit('setUser', data.data.user);
          locStore('token', data.data.token);
          locStore('user', JSON.stringify(data.data.user));
          break;
        default:
          break;
      }
    }).catch(err => {
      console.log(err);
    })
  }
}
