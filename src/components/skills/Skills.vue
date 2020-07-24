<template>
  <v-container class="page">
    <v-row class="title">
      <v-col>
        <h1>SKILLS</h1>
      </v-col>
    </v-row>
    <v-row class="page4">
      <v-col cols="6" md="4" v-for="(item, i) in skills" :key="i">
        <v-row>
          <v-col cols="4">{{ item.name }}</v-col>
          <v-col cols="8">
            <v-rating
              v-model="item.level"
              color="white"
              background-color="grey"
              dense
              medium
              full-icon="mdi-circle"
              empty-icon="mdi-circle-outline"
            >
            </v-rating>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "skills",
  computed: {
    ...mapState({
      skills: 'skills'
    })
  }
};
</script>

<style src="./Skills.css" scoped></style>