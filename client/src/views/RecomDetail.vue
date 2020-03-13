<template>
    <div class="recomDetail">
        <navbar />
        <sideNav />
        <openRecom />
    </div>
</template>
<script>
import navbar from '@/components/nav/navbar.vue'
import sideNav from '@/components/nav/sideNav.vue'
import openRecom from '@/components/didiMember/openRecom.vue'
export default {
    name: 'recomDetail',
    components: {
        navbar,
        sideNav,
        openRecom
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