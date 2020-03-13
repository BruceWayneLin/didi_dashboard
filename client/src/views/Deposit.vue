<template>
  <div class="deposit">
    <navbar />
    <sideNav />
    <setting />
    <depositModal v-if="depositModal.active" />
  </div>
</template>
<script>
import navbar from '@/components/nav/navbar.vue'
import sideNav from '@/components/nav/sideNav.vue'
import setting from '@/components/deposit/setting.vue'
import depositModal from '@/components/modals/depositModal'
export default {
  name: 'Deposit',
  data() {
      return {
      }
  },
  components: {
    navbar,
    sideNav,
    setting,
    depositModal
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
    depositModal() {
        return this.$store.state.modals.depositModal
    }
  },
  async mounted() {
      this.getMe()
  }
}
</script>
