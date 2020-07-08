<template>
  <div class="home">
    <Portfolio />
    <MyInfo />
  </div>
</template>

<script>
// @ is an alias to /src
import Portfolio from '@/components/portfolio/Portfolio.vue'
import MyInfo from '@/components/myinfo/MyInfo.vue'
export default {
  name: 'Home',
  components: {
    Portfolio,
    MyInfo
  }
}
</script>
<style src="./Home.css" scoped></style>
