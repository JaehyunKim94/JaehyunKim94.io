<template>
  <v-container class="profile">
    <v-row>
      <v-col cols="10" class="imgbox">
        <v-img src="../../../assets/profile.png" class="profileimg" dark>
        <h1>{{ profile.firstname }}</h1><br>
        <h1>{{ profile.lastname }}</h1>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "profile",
  props: [
    "profile"
  ]
};
</script>

<style src="./Profile.css" scoped></style>