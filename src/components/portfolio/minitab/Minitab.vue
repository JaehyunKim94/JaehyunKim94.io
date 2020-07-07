<template>
  <v-container class="minitab">
    <v-tabs color="white" background-color="transparent" dark class="profiletab">
      <v-tab>About Me</v-tab>
      <v-tab>Mini Profile</v-tab>
      <v-tab>Blog</v-tab>
      <v-tab-item>
        <TabText />
      </v-tab-item>
      <v-tab-item>
        <TabText />
      </v-tab-item>
      <v-tab-item>
        <TabText />
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
import TabText from './tabText/TabText.vue'
export default {
  components: {
    TabText
  }
};
</script>

<style src="./Minitab.css" scoped></style>