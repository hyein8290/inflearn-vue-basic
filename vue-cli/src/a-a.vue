<!-- 
    html, js, css를 한 파일에서 관리
-->
<!-- 예전 방식 => 컴포넌트 안에 속성으로 html, js를 몰아서 처리함-->
<!--
var appHeader = {
    template: '<div>header</div>',
    methods: {
        addNum: function() {

        }
    }
}
-->

<template>
  <!-- HTML -->
  <div>header</div>
</template>

<script>
export default {
    // Javascript - 인스턴스 옵션
    methods: {
        addNum: function() {
            
        }
    }
}
</script>

<style>
    /* CSS */
</style>