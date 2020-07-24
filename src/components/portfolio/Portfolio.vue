<template>
  <v-container class="page">
    <v-row class="page1">
      <v-col cols="6" class="profile">
				<Profile :profile = "profile" />
      </v-col>
      <v-col cols="6" class="minitab">
        <Minitab :profile = "profile" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Profile from './profile/Profile.vue'
import Minitab from './minitab/Minitab.vue'
import {mapState} from 'vuex'
export default {
  name: 'portfolio',
	components: {
    Profile,
    Minitab
  },
  computed: {
    ...mapState({
      profile: 'profile'
    })
  }
};
</script>

<style src="./Portfolio.css" scoped></style>