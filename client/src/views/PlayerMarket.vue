<template>
    <div class="PlayerMarket">
        <navbar />
        <sideNav />
        <marketSale />
        <markSaleTool v-if="markSaleTool" />
    </div>
</template>
<script>
import navbar from '@/components/nav/navbar.vue'
import sideNav from '@/components/nav/sideNav.vue'
import marketSale from '@/components/playerMarket/marketSale'
import markSaleTool from '@/components/modals/markSaleTool'
export default {
    name: 'PlayerMarket',
    components: {
        navbar,
        sideNav,
        marketSale,
        markSaleTool
    },
    computed: {
        markSaleTool() {
            return this.$store.state.modals.markSaleTool
        }
    }
}
</script>