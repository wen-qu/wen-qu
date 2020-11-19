<template>
  <v-container>
    <div>
      {{ msg }}
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: Number
  },
  data: () => ({
  }),

  created: function () {
    console.log(this)
    this.$request.get('/1')
    // Vue.prototype.$request.get('/1')
  }

})
</script>
