<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import navbar from './components/molecules/navbar/index.vue'

  export default {
    components: {
        navbar
    }
  }
</script>
