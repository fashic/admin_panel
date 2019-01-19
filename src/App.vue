<template lang="pug">
  #app
    .header
      app-header
    app-tabs
    .content
      router-view
</template>

<script>
import appHeader from "./components/header";
import appTabs from "./components/tabs";

export default{

  components: {
    appHeader,
    appTabs
  }
}
</script> 
  
<style lang="scss" scoped>
  #app {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  .content {
    flex: 1;
    background: url('~img/bg.jpg') center center no-repeat;
    background-size: cover;
  }
</style>
