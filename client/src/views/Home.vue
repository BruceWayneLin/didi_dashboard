<template>
  <div class="home">
    <login v-if="loginState"/>
    <register v-if="!loginState"/>
  </div>
</template>

<script>
// @ is an alias to /src
import login from '@/components/home/login.vue'
import register from '@/components/home/register.vue'

export default {
  name: 'home',
  components: {
    login,
    register
  },
  computed: {
    loginState() {
      return this.$store.state.control.login
    }
  },
  mounted() {
    
  }
}
</script>
