<template>
  <div class="navbarMb navbar-dark bg-dark">
        <div class="logo float-left">DD 打寶</div>
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
  },
  computed:  {
  },
  mounted() {
  }
}
</script>
