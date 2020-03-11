<template>
    <div class="SaleSetting">
        <navbar />
        <sideNav />
        <saleSettingTable />
    </div>
</template>
<script>
import navbar from '@/components/nav/navbar.vue'
import sideNav from '@/components/nav/sideNav.vue'
import saleSettingTable from '@/components/tables/saleSettingTable'
export default {
    name: 'SaleSetting',
    components: {
        navbar,
        sideNav,
        saleSettingTable
    },
    methods: {
        getMe() {
            let data = {}
            data['url'] = this.$root.$options.apiUrl['api1']
            this.$store.dispatch('getApi', data).then((item)=>{
                this.$store.dispatch('updateme', item['data']['user'])
            })
        }
    },
    async mounted() {
        this.getMe()
    }
}
</script>