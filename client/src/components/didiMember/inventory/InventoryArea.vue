<template>
    <div class="InventoryArea">
        <div class="container">
            <div class="row">
                <div class="col">
                    <button type="button" @click="toggleChange(true)" class="btn btn-lg" :class="{'btn-primary': toggle, 'btn-secondary': !toggle}">裝備</button>
                    <button type="button" @click="toggleChange(false)" class="btn btn-lg ml-3" :class="{'btn-primary': !toggle, 'btn-secondary': toggle}">物品</button>
                </div>
                <div class="col text-right">
                    <button type="button" @click="redirect('didiMember')" class="btn btn-lg ml-3 btn-danger">上一頁</button>
                </div>
            </div>
        </div>
        <objInventory v-if="!toggle" />
        <equipInventory v-if="toggle" />
    </div>
</template>
<script>
import objInventory from '@/components/didiMember/inventory/objInventory.vue'
import equipInventory from '@/components/didiMember/inventory/equipInventory.vue'

export default {
  name: 'InventoryArea',
  data() {
      return {
          toggle: true
      }
  },
  components: {
    objInventory,
    equipInventory
  },
  methods: {
    toggleChange(ans) {
        this.toggle = ans
    },
    redirect(url) {
        this.$router.push(url)
    }
  },
  async mounted() {
  }
}
</script>