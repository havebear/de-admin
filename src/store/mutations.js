import locStore from 'storejs'

export default {
  setLoading(state, data) {
    state.isLoading = data;
  },
  setLogin(state, data) {
    state.isLogin = data;
  },
  setUser(state, data) {
    state.user = data;
  },
  emptyUser(state) {
    state.user = {};
    locStore.remove('user');
  },
  setToken(state, data) {
    state.token = data;
  },
  emptyToken(state) {
    state.token = "";
    locStore.remove('token');
  }
}
