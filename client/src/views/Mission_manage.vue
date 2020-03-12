<template>
    <div class="Mission_manage">
        <navbar />
        <sideNav />
        <management />
    </div>
</template>
<script>
import navbar from '@/components/nav/navbar.vue'
import sideNav from '@/components/nav/sideNav.vue'
import management from '@/components/mission/management.vue'
export default {
    name: 'Mission_manage',
    components: {
        navbar,
        sideNav,
        management
    }
}
</script>