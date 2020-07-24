<template>
  <v-container class="page">
    <v-row class="page3">
      <v-col>
        <h1>PROJECTS</h1>
      </v-col>
    </v-row>
    <v-row class="pjtDetail">
      <v-col cols="6" md="4" v-for="(item, i) in projects" :key="i">
        <pjt-detail :item = "item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
import PjtDetail from './pjtDetail/PjtDetail.vue'
export default {
  name: "projects",
  components: {
    PjtDetail
  },
  computed: {
    ...mapState({
      projects: 'projects'
    })
  }
};
</script>

<style src="./Projects.css" scoped></style>