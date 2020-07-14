<template>
  <div class="home">
    <Portfolio />
    <MyInfo />
    <Projects />
  </div>
</template>

<script>
// @ is an alias to /src
import Portfolio from '@/components/portfolio/Portfolio.vue'
import MyInfo from '@/components/myinfo/MyInfo.vue'
import Projects from '@/components/projects/Projects.vue'
export default {
  name: 'Home',
  components: {
    Portfolio,
    MyInfo,
    Projects
  }
}
</script>
<style src="./Home.css" scoped></style>
