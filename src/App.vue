<template>
  <v-app class="appbase">
    <v-main>
      <Home/>
    </v-main>
  </v-app>
</template>

<script>
import Home from './views/Home'
import {mapActions} from 'vuex'
export default {
  name: 'App',

  components: {
    Home
  },

  data: () => ({
    //
  }),
  methods: {
    ...mapActions({init: 'dbInit'})
  },
  mounted() {
    this.init()
  }
};
</script>