import Vue from 'vue'
// import App from './App.vue' //컴포넌트 파일

Vue.config.productionTip = false

var App = {
  template: '<div>app</div>'
}

new Vue({
  render: h => h(App),
  components: {
    'app': App
  }
}).$mount('#app')

// new Vue({
//   el: '#app',
//   // render: template이라는 속성을 정의했을때, 내부적으로 render가 실행됨
//   render: h => h(App),
// })