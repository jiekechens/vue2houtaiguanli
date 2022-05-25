import Vue from 'vue'
import App from './App.vue'
import store from './store/store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/router'
Vue.use(ElementUI)
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
    let token = sessionStorage.getItem('token')
    if (to.meta.title) {
        document.title = to.meta.title
    }
    //判断用户是否登录
    /*   if (token == 'all') {
          //用户已经登录
          console.log(111);
          if (to.path == '/login') {
              next({ path: '/index' })
          } else {
              next()
          }
      } else { //用户未登录
          //用户去登录页面放行
          console.log(112221);
          if (to.path == '/login') {
              console.log(2222);
              next()
          } else {
              //屌丝用户想跳过登录，不行，引导他去登录
              console.log(222221321);
              next({ path: '/login' })
          }
  
      } */
    if (token == 'all') {
        if (to.path === "/Login") {
            next("/index")
        } else {
            next()
        }
    } else {
        if (to.path === "/Login") {
            next()
        } else(
            next("/Login")
        )
    }
})
new Vue({
    render: h => h(App),
    store,
    router,
    beforeCreate() {
        Vue.prototype.$bus = this
    }
}).$mount('#app')