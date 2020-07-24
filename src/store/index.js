import Vue from 'vue'
import Vuex from 'vuex'
import DB from '../assets/myinfo.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profile: {},
    projects: [],
    skills: [],
    achievements: [],
    educations: []
  },
  mutations: {
    setProfile(state, profile){
      state.profile = profile
    },
    setProjects(state, projects){
      state.projects = projects
    },
    setSkills(state, skills){
      state.skills = skills
    },
    setAchieve(state, achievements){
      state.achievements = achievements
    },
    setEducations(state, educations){
      state.educations = educations
    }
  },
  actions: {
    dbInit({commit}){
      const res = DB
      commit('setProfile', res.profile)
      commit('setProjects', res.projects)
      commit('setSkills', res.skills)
      commit('setAchieve', res.achievements)
      commit('setEducations', res.educations)
    }
  },
  modules: {
  }
})
