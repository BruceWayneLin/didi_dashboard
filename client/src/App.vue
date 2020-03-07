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
    getMe() {
      let data = {}
      data['url'] = this.$root.$options.apiUrl['api1']
      this.$store.dispatch('getApi', data).then((item)=>{
        this.$store.dispatch('updateme', item['data']['user'])
      })
    }
  },
  computed: {
    busyLoading() {
      return this.$store.state.control.busyLoading
    }
  },
  async mounted() {
    if(this.$route.path == '/')
    await this.getMe()
  }
}
</script>

<style lang="scss">
  @import "./style/main.scss";
</style>
