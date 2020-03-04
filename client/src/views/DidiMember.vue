<template>
  <div class="DidiMember">
    <navbar />
    <sideNav />
    <didiMemberTable />
  </div>
</template>
<script>
import navbar from '@/components/nav/navbar.vue'
import sideNav from '@/components/nav/sideNav.vue'
import didiMemberTable from '@/components/tables/didiMemberTable.vue'

export default {
  name: 'DidiMember',
  components: {
    navbar,
    sideNav,
    didiMemberTable
  },
  methods: {
  },
  async mounted() {
  }
}
</script>
