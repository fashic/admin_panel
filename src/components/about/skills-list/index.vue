<template lang="pug">
  div
    .skills-title {{skillType }}
    table.skill-table
      skill-item(
        v-for="n in 5"
        :key="n"
      )
</template>

<script>
export default {
  props: {
    skillType: String
  },
  components: {
    skillItem: require('../skill-item').default 
  }
}
</script>
<style src=".style.scss" lang"=scss" scoped></style>'