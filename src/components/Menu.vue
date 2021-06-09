<template>
  <div id="message">
      <h1 v-show="isShow">hello maiem</h1>
      <button @click="isShow =! isShow">Hide-Show</button>

      <form>
        <input type="text" v-model="name">
       <label>{{name}}</label>
      </form>

      <p v-bind:id='id'>maiem</p>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data(){
    return{
      name: 'maiem',
      isShow: true,
      id: 'show',
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
