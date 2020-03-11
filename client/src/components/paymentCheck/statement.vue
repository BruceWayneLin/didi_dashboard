<template>
    <div class="statement">
        <div class="container">
            <div class="row">
                <div class="col">
                    <button type="button" @click="toggleChange(true)" class="btn btn-lg" :class="{'btn-primary': toggle, 'btn-secondary': !toggle}">待審核</button>
                    <button type="button" @click="toggleChange(false)" class="btn btn-lg ml-3" :class="{'btn-primary': !toggle, 'btn-secondary': toggle}">已審核</button>
                </div>
            </div>
        </div>
        <approve v-if="!toggle" />
        <pending v-if="toggle"/>
    </div>
</template>
<script>
import approve from '@/components/paymentCheck/approve'
import pending from '@/components/paymentCheck/pending'
export default {
    name: 'statement',
    components: {
        approve,
        pending
    },
    data() {
        return {
            toggle: true
        }
    },
    methods: {
        toggleChange(ans) {
            this.toggle = ans
        },
        redirect(url) {
            console.log(url)
            this.$router.push(url)
        }
    }
}
</script>