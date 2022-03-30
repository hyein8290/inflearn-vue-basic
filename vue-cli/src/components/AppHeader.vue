<!-- 
    컴포넌트 파일 이름: 파스칼 케이스 + 두 단어 이상

    만약 컴포넌트 이름이 한 단어라면,
    브라우저가 html 표준 태그인지 vue의 컴포넌트 태그인지 구분할 수 없음
-->
<template>
  <header>
      <h1>{{ propsdata }}</h1>
      <button v-on:click="sendEvent">send</button>
  </header>
</template>

<script>
export default {
    props: ['propsdata'],
    methods: {
        sendEvent: function() {
            this.$emit('renew');
        }
    }
}
</script>

<style>

</style>

