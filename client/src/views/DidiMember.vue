<template>
  <div class="DidiMember">
    <navbar />
    <sideNav />
    <didiMemberTable />
    <releaseTool v-if="releaseToolM" />
    <capiModal v-if="capiModalTog" />
  </div>
</template>
<script>
import navbar from '@/components/nav/navbar.vue'
import sideNav from '@/components/nav/sideNav.vue'
import didiMemberTable from '@/components/tables/didiMemberTable.vue'
import releaseTool from '@/components/modals/releaseTool.vue'
import capiModal from '@/components/modals/capiModal.vue'

export default {
  name: 'DidiMember',
  components: {
    navbar,
    sideNav,
    didiMemberTable,
    releaseTool,
    capiModal
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
    releaseToolM() {
      return this.$store.state.modals.releaseTool
    },
    capiModalTog() {
      return this.$store.state.modals.capiModalTog
    }
  },
  async mounted() {
    this.getMe()
  }
}
</script>
