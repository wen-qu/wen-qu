<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="123"></HelloWorld>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '../components/HelloWorld.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    HelloWorld
  }
})
</script>
