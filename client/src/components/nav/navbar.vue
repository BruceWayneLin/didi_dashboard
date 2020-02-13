<template>
  <div id="navbar" class="navbar">
      <navbarMb />
      <navbarPc />
  </div>
</template>

<script>
import navbarMb from '@/components/nav/navbarMb.vue'
import navbarPc from '@/components/nav/navbarPc.vue'

export default {
  name: 'navbar',
  props: {
  },
  components: {
      navbarMb,
      navbarPc
  },
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>
