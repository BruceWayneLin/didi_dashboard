<template>
  <div id="app">
    <busyLoading v-if="busyLoading" />
    <router-view/>
  </div>
</template>
<script>
import busyLoading from '@/components/UI/busyLoading'
 
export default {
  name: 'app',
  components: {
    busyLoading
  },
  methods: {
  },
  computed: {
    busyLoading() {
      return this.$store.state.control.busyLoading
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
  @import "./style/main.scss";
</style>
