<template>
  <v-container class="pjtDetail">
      <h1>{{ item.title }}</h1>
      <v-row>
          <v-col cols="6">{{ item.description }}</v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
    name: "pjtDetail",
    props:[
        "item"
    ]
}
</script>

<style src="./PjtDetail.css" scoped></style>