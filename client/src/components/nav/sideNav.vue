<template>
    <div class="sideNav navbar-dark bg-dark" v-if="toggleNavState">
        <ul>
            <li>
                <p>{{me['username']}} {{returnLev(me['level'])}}</p>
                <p>{{me['email']}}</p>
            </li>
            <li>
                <font-awesome-icon icon="list-alt" />
                {{this.$root.$options['lang']['USERSMANGE']}}
            </li>
            <li>
                <font-awesome-icon icon="list-alt" />
                {{this.$root.$options['lang']['RECOMMANGE']}}
            </li>
            <li>
                <font-awesome-icon icon="list-alt" />
                {{this.$root.$options['lang']['RECOMGROUP']}}
            </li>
            <li>
                <font-awesome-icon icon="list-alt" />
                {{this.$root.$options['lang']['MARKET_TRADE_RECORD']}}
            </li>
            <li>
                <font-awesome-icon icon="list-alt" />
                {{this.$root.$options['lang']['MARKET_TRADE_RESERVED_RECORD']}}
            </li>
            <li>
                <font-awesome-icon icon="list-alt" />
                {{this.$root.$options['lang']['MARKET_TRADE_SHOP_BUYING_RECORD']}}
            </li>
            <li>
                <font-awesome-icon icon="list-alt" />
                {{this.$root.$options['lang']['MAILBOX_RECORD']}}
            </li>
            <li>
                <font-awesome-icon icon="list-alt" />
                {{this.$root.$options['lang']['INGOTS_RECORD']}}
            </li>
            <li>
                <font-awesome-icon icon="list-alt" />
                {{this.$root.$options['lang']['TOOL_RECORD']}}
            </li>
            <li>
                <font-awesome-icon icon="list-alt" />
                {{this.$root.$options['lang']['INTERGRAL_RECORD']}}
            </li>
            <li>
                <font-awesome-icon icon="list-alt" />
                {{this.$root.$options['lang']['APPEAL_RECORD']}}
            </li>
            <li>
                <font-awesome-icon icon="list-alt" />
                {{this.$root.$options['lang']['GAME_SETTING']}}
            </li>
            <li>
                <font-awesome-icon icon="list-alt" />
                {{this.$root.$options['lang']['DAYS_MISSION']}}
            </li>
            <li>
                <font-awesome-icon icon="list-alt" />
                {{this.$root.$options['lang']['ACHIEVEMENT']}}
            </li>
            <li>
                <font-awesome-icon icon="list-alt" />
                {{this.$root.$options['lang']['DEPOSIT']}}
            </li>
            <li>
                <font-awesome-icon icon="list-alt" />
                {{this.$root.$options['lang']['REPORT']}}
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

            let i = this.$store.dispatch('postApi', data);
            i.then((result)=>{
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
        },

        toggleNavState() {
            return this.$store.state.control.toggleSide
        }
    }
}
</script>