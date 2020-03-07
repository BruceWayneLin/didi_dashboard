<template>
  <div class="DidiMemberEdit">
    <navbar />
    <sideNav />
    <memberDetail />
  </div>
</template>
<script>
import navbar from '@/components/nav/navbar.vue'
import sideNav from '@/components/nav/sideNav.vue'
import memberDetail from '@/components/didiMember/memberDetail'
export default {
  name: 'DidiMemberEdit',
  components: {
    navbar,
    sideNav,
    memberDetail
  },
  methods: {
  },
  async mounted() {
  }
}
</script>
