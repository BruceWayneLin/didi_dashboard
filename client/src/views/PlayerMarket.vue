<template>
    <div class="PlayerMarket">
        <navbar />
        <sideNav />
        <marketSale />
        <markSaleTool v-if="markSaleTool.active" />
        <marketValueSet v-if="marketValueSet" />
    </div>
</template>
<script>
import navbar from '@/components/nav/navbar.vue'
import sideNav from '@/components/nav/sideNav.vue'
import marketSale from '@/components/playerMarket/marketSale'
import markSaleTool from '@/components/modals/markSaleTool'
import marketValueSet from '@/components/modals/marketValueSet'
export default {
    name: 'PlayerMarket',
    components: {
        navbar,
        sideNav,
        marketSale,
        markSaleTool,
        marketValueSet
    },
    computed: {
        markSaleTool() {
            return this.$store.state.modals.markSaleTool
        },
        marketValueSet() {
            return this.$store.state.modals.marketValueSet
        }
    }
}
</script>