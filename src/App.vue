<template>
  <v-app>
    <v-app-bar
      app
      color="blue"
      dark
    >
      <h2 style="font-weight: 500">大创-文曲</h2>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default Vue.extend({
  name: 'App',

  components: {
    HelloWorld
  },

  data: () => ({
    //
  })
})
</script>
