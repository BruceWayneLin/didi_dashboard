<template>
  <div class="Dashboard">
    <navbar />
    <sideNav />
    <usersTable />
  </div>
</template>
<script>
import navbar from '@/components/nav/navbar.vue'
import sideNav from '@/components/nav/sideNav.vue'
import usersTable from '@/components/tables/usersTable.vue'
export default {
  name: 'Dashboard',
  components: {
    navbar,
    sideNav,
    usersTable
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
  async mounted() {
    await this.getMe()
  }
}
</script>
