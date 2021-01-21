
this.setAppRouter([
  "login",
  "home..jsx",
  "async-test",
  "react-in-vue-demo",
  "async-comp-demo",
  "single-jsx-test..jsx",
  "mixin-test-outer..jsx",
  "keep-alive-demo-a..jsx..keep-alive",
  "keep-alive-demo-b..jsx..keep-alive",
  "./page-generator/pager",
  "demo..jsx",
  "pages-goods-manage..jsx..keep-alive",
  // "pages-organization-manage..jsx..keep-alive",
  // "pages-organization-manage..jsx..keep-alive",
  // "pages-employee-manage..jsx..keep-alive",
  // "pages-shop-manage..jsx..keep-alive",
  "pages-*..jsx..keep-alive",
  "pure-render",
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/500',
    component: {
      template: '<div>亲，系统出了重大故障，无法继续提供服务了哦。请稍后再试</div>'
    }
  },

  {
    path: '*',
    component: {
      template: '<div><iframe style="width: 100%;height: 1510px;border: none;" src="https://www.bilibili.com/404"/></div>'
    }
  }
]);



// Bue.eventEmitter.on('B_LOAD_FILE_404', () => {
//   if (Bue.s.getRoute().path != '/404') {
//     setTimeout(() => {
//       Bue.s.getRouter().push('/404')
//     }, 200)

//   }

// })