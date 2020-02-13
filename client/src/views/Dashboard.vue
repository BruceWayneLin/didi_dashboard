<template>
  <div class="Dashboard">
    <navbar />
    <sideNav />
  </div>
</template>
<script>
import navbar from '@/components/nav/navbar.vue'
import sideNav from '@/components/nav/sideNav.vue'
export default {
  name: 'Dashboard',
  components: {
    navbar,
    sideNav
  },
  methods: {
    getMe() {
      let data = {}
      data['url'] = this.$root.$options.apiUrl['api1']
      this.$store.dispatch('getApi', data).then((item)=>{
          this.$store.dispatch('updateme', item['data']['user']['user'])
      })
    }
  },
  mounted() {
    this.getMe()
  }
}
</script>
