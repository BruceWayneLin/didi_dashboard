<template>
  <div class="paymentCheck">
    <navbar />
    <sideNav />
    <statement />
  </div>
</template>
<script>
import navbar from '@/components/nav/navbar.vue'
import sideNav from '@/components/nav/sideNav.vue'
import statement from '@/components/paymentCheck/statement'
export default {
  name: 'PaymentCheck',
  data() {
      return {
      }
  },
  components: {
    navbar,
    sideNav,
    statement
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
      this.getMe()
  }
}
</script>
