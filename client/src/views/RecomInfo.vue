<template>
    <div class="recomInfo">
        <navbar />
        <sideNav />
        <recomInfoIndex />
    </div>
</template>
<script>
import navbar from '@/components/nav/navbar.vue'
import sideNav from '@/components/nav/sideNav.vue'
import recomInfoIndex from '@/components/recomInfo/recomInfoIndex.vue'
export default {
    name: 'recomInfo',
    components: {
        navbar,
        sideNav,
        recomInfoIndex
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