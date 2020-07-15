<template>
  <div class="home">
    <Portfolio />
    <MyInfo />
    <Projects />
    <Skills />
    <Contacts />
  </div>
</template>

<script>
// @ is an alias to /src
import Portfolio from '@/components/portfolio/Portfolio.vue'
import MyInfo from '@/components/myinfo/MyInfo.vue'
import Projects from '@/components/projects/Projects.vue'
import Skills from '@/components/skills/Skills.vue'
import Contacts from '@/components/contacts/Contacts.vue'
export default {
  name: 'Home',
  components: {
    Portfolio,
    MyInfo,
    Projects,
    Skills,
    Contacts
  }
}
</script>
<style src="./Home.css" scoped></style>
