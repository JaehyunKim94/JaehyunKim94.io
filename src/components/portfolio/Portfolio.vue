<template>
  <v-container class="page">
    <v-row class="page1">
      <v-col cols="7" class="profile">
				<Profile />
      </v-col>
      <v-col cols="5" class="minitab">
        <Minitab />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Profile from './profile/Profile.vue'
import Minitab from './minitab/Minitab.vue'
export default {
	components: {
    Profile,
    Minitab
	}
};
</script>

<style src="./Portfolio.css" scoped></style>