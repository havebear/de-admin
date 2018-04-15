import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import locStore from "storejs";
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/login'
import Main from '@/pages/main'
import MMain from '@/pages/manager/main'
import MTeacher from '@/pages/manager/teacher'
import MCatlog from '@/pages/manager/catlog'
import MCourse from '@/pages/manager/course'
import MTest from '@/pages/manager/test'
import MApply from '@/pages/manager/apply'
import MFeedback from '@/pages/manager/feedback'

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
      {
        path: 'catlog',
        name: 'MCatlog',
        meta: {
          requireAuth: true,
        },
        component: MCatlog
      },
      {
        path: 'course',
        name: 'MCourse',
        meta: {
          requireAuth: true,
        },
        component: MCourse
      },
      {
        path: 'test',
        name: 'MTest',
        meta: {
          requireAuth: true,
        },
        component: MTest
      },
      {
        path: 'apply',
        name: 'MApply',
        meta: {
          requireAuth: true,
        },
        component: MApply
      },
      {
        path: 'feedback',
        name: 'MFeedback',
        meta: {
          requireAuth: true,
        },
        component: MFeedback
      }
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
 
router.beforeEach(async (to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    // console.log(store.state.token || "测试 - store");
    // console.log(locStore('token') || "测试 - loca"); 
    if (locStore('token')) {
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
