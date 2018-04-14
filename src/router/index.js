import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/login'
import Main from '@/pages/main'
import MMain from '@/pages/manager/main'
import MTeacher from '@/pages/manager/teacher'

Vue.use(Router)

const routes = [{
    path: '/',
    redirect: '/manager'
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/manager',
    name: 'Main',
    meta: {
      requireAuth: true,
    },
    component: Main,
    children: [{
        path: '',
        name: 'MMain',
        meta: {
          requireAuth: true,
        },
        component: MMain,
      },
      {
        path: 'teacher',
        name: 'MTeacher',
        meta: {
          requireAuth: true,
        },
        component: MTeacher
      },
    ]
  }
]

// 页面刷新时，重新赋值token
// if (window.localStorage.getItem('token')) {
//   store.commit(types.LOGIN, window.localStorage.getItem('token'))
// }

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next();
    } else {
      next({
        path: '/login',
        // query: {
        //   redirect: to.fullPath
        // }
      })
    }
  } else {
    next();
  }
})

export default router;
