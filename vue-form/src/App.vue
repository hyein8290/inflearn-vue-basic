<template>
  <div>
    <!-- .prevent: submit에 대한 기본적인 이벤트를 막는다. -->
    <form v-on:submit.prevent="submitForm">
      <div>
        <label for="username">id: </label>
        <input id="username" type="text" v-model="username">
      </div>
      <div>
        <label for="password">pw: </label>
        <input id="password" type="password" v-model="password">
      </div>
      <button type="submit">login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  // 컴포넌트 간 데이터가 공유되지 않도록 data를 function으로 return해서 사용
  data: function() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitForm: function() {
      // event.preventDefault(); // form의 이동, 새로고침을 막는 방법
      console.log(this.username, this.password);
      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        username: this.username,
        password: this.password
      }
      axios.post(url, data)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error){
          console.log(error);
        });
    }
  }
}
</script>

<style>

</style>