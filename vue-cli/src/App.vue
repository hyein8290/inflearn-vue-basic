<template>
  <!-- template root의 엘리먼트는 무조건 하나! -->
  <div>
    <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <app-header 
      v-bind:propsdata="str"
      v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
// new Vue({
//   data: {
//     str: 'hi'
//   }
// })

// import 할 때, 확장자가까지 써주는 걸 권장. (vscode 기능 활용)
import AppHeader from './components/AppHeader.vue';

// 예전 방식
// var AppHeader = {
//   template: '<header><h1>Header</h1></header>'
// }

export default {
  data: function() {
    return {
      str: 'Header'
    }
  },
  components: {
    'app-header': AppHeader
  },
  methods: {
    renewStr: function() {
      this.str = 'hi';
    }
  }
}
</script>

<style>

</style>