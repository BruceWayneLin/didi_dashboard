<template>
  <div class="navbarMb navbar-dark bg-dark">
        <div class="logo float-left" @click="redirect('Dashboard')">DD 打寶</div>
        <burger />
  </div>
</template>

<script>
import burger from '@/components/UI/burger.vue'

export default {
  name: 'navbarMb',
  props: {
  },
  components: {
      burger
  },
  data() {
    return {
    }
  },
  methods: {
    redirect(url) {
      this.$router.push(url)
    }
  },
  computed:  {
  },
  mounted() {
  }
}
</script>
