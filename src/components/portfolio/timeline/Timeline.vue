<template>
  <v-container>
    <v-timeline dense align-top>
      <v-timeline-item fill-dot color="#735250" small>
        <div class="title"><h1>ABOUT ME</h1></div>
        <div class="context">이런저런 이야기를 쓸겁니다</div>
      </v-timeline-item>
      <v-timeline-item fill-dot color="#735250" small>
        <div class="title"><h1>EDUCATION</h1></div>
        <div class="context">여기는 학력</div>
      </v-timeline-item>
      <v-timeline-item fill-dot color="#735250" small>
        <div class="title"><h1>PROJECTS</h1></div>
        <div class="context">프로젝트를 간지나게</div>
      </v-timeline-item>
      <v-timeline-item fill-dot color="#735250" small>
        <div class="title"><h1>SKILLS</h1></div>
        <div class="context">똥그라미로 스킬레벨</div>
      </v-timeline-item>
      <v-timeline-item fill-dot color="#735250" small>
        <div class="title"><h1>ACHIEVEMENTS</h1></div>
        <div class="context">수상이력</div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  name: "timeline",
  data() {
    return {};
  }
};
</script>

<style src="./Timeline.css" scoped></style>