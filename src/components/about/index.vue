<template lang="pug">
  .about
    h1.title Страница "Обо мне"
    .skills-list(v-for="(skillType, index) in skillsTypes")
      skills-list(
        :skillType="skillType"
        :key="index"
      )
      br
      hr
      hr
</template>

<script>
export default {
  data() {
    return {
      skillsTypes: ['frontend', 'workflow', 'backend']
    }
  },
  created() {
    this.$store.dispatch('fetchSkills');
},
  components: {
    skillsList: require('./skills-list').default
  }
}
</script>
