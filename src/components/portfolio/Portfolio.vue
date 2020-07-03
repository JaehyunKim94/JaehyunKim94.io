<template>
  <v-container class="page">
    <v-row>
      <v-col cols="4" class="baseinfo">
				<baseinfo />
      </v-col>
      <v-col cols="8" class="timeline">
				<Timeline />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Timeline from './timeline/Timeline.vue'
import Baseinfo from './baseinfo/Baseinfo.vue'
export default {
	components: {
		Timeline,
		Baseinfo
	}
};
</script>

<style src="./Portfolio.css" scoped></style>