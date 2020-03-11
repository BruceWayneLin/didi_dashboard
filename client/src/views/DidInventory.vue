<template>
  <div class="DidInventory">
    <navbar />
    <sideNav />
    <InventoryArea />
  </div>
</template>
<script>
import navbar from '@/components/nav/navbar.vue'
import sideNav from '@/components/nav/sideNav.vue'
import InventoryArea from '@/components/didiMember/inventory/InventoryArea'
export default {
  name: 'DidInventory',
  data() {
      return {
      }
  },
  components: {
    navbar,
    sideNav,
    InventoryArea
  },
  methods: {
  },
  async mounted() {
  }
}
</script>
