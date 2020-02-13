<template>
    <div class="sideNav navbar-dark bg-dark">
        <ul>
            <li>
                <p>{{me['username']}} {{returnLev(me['level'])}}</p>
                <p>{{me['email']}}</p>
            </li>
            <li>
                
            </li>
            <li>
                
            </li>
            <li>
                
            </li>
            <li>
                <div @click="logout()">
                    <font-awesome-icon icon="sign-out-alt" />
                    {{this.$root.$options['lang']['LOGOUT']}}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
const modal = require('../../alertModal')

export default {
    name: 'sideNav',
    methods: {
        logout() {
            let data = {};
            data['url'] = this.$root.$options.apiUrl['api4']
            data['token'] = sessionStorage.getItem('didi_token')

            let i = this.$store.dispatch('postApi', data);
            i.then((result)=>{
                localStorage.removeItem('didi_token')
                console.log(result)
                if(result['data'].success) {
                    let msg = {}
                    msg['modalTitle'] = '成功'
                    msg['modalText'] = result['data'].success
                    msg['modalIcon'] = 'success',
                    msg['modalButtonText'] = '確定',
                    msg['modelRedirectUrl'] = '/'
                    modal.modal(msg)
                }
            })
        },
        sendtest() {
            let data = {}
            data['url'] = this.$root.$options.apiUrl['api1']
            this.$store.dispatch('getApi', data).then((item)=>{
                console.log(item)
            })
        },
        refresh() {
            let data = {}
            data['url'] = this.$root.$options.apiUrl['api5']
            this.$store.dispatch('postApi', data).then((item)=>{
                sessionStorage.setItem('didi_token', item['token'])
            })
        },
        returnLev(data) {
            switch(data) {
                case '1':
                    return '將軍'
                    break
                case '2':
                    return '校尉'
                    break
                case '3':
                    return '士官'
                    break
                case '4':
                    return '士兵'
                    break
                case '5':
                    return '百姓'
                    break
                default:
            }
        }
    },
    computed: {
        me() {
            return this.$store.state.info.me
        }
    }
}
</script>