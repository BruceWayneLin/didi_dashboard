<template>
    <div class="sideNav navbar-dark bg-dark" v-if="toggleNavState">
        <ul>
            <li>
                <p>{{me['username']}}</p>
                <p>{{me['email']}}</p>
                <div>
                    <img v-if="me['level'] <= 1" class="badge_icon" src="@/assets/images/badges/1.svg" alt="">
                    <img v-if="me['level'] <= 2" class="badge_icon" src="@/assets/images/badges/2.svg" alt="">
                    <img v-if="me['level'] <= 3" class="badge_icon" src="@/assets/images/badges/3.svg" alt="">
                    <img v-if="me['level'] <= 4" class="badge_icon" src="@/assets/images/badges/4.svg" alt="">
                    <img v-if="me['level'] <= 5" class="badge_icon" src="@/assets/images/badges/5.svg" alt="">
                    {{returnLev(me['level'])}}
                </div>
            </li>
            <!-- <li @click="redirect('Dashboard')">
                <font-awesome-icon icon="list-alt"/>
                {{this.$root.$options['lang']['DASHBOARD_USERSMANGE']}}
            </li> -->

            <b-nav>
                <b-nav-item-dropdown
                    text="會員管理"
                    toggle-class="nav-link-custom"
                    right
                >
                    <b-dropdown-item @click="redirect('DidiMember')">- {{this.$root.$options['lang']['DIDIUSERSMANGE']}}</b-dropdown-item>
                    <b-dropdown-item @click="redirect('PaymentCheck')">- 調帳審核</b-dropdown-item>
                </b-nav-item-dropdown>
               
                <b-nav-item-dropdown
                    text="推薦管理(好友)"
                    toggle-class="nav-link-custom"
                    right
                >
                    <b-dropdown-item @click="redirect('RecomInfo')">- 調帳審核</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item>
                    {{this.$root.$options['lang']['RECOMGROUP']}}
                </b-nav-item>

                <b-nav-item-dropdown
                    text="遊戲設定"
                    toggle-class="nav-link-custom"
                    right
                >
                    <b-dropdown-item @click="redirect('SaleSetting')">- 商店出售設定(列表)</b-dropdown-item>
                    <b-dropdown-item @click="redirect('PlayerMarket')">- 玩家市集</b-dropdown-item>
                    <b-dropdown-item @click="redirect('Deposit')">- 儲值設定</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown
                    text="任務管理"
                    toggle-class="nav-link-custom"
                    right
                >
                    <b-dropdown-item @click="redirect('Mission_manage')">- 任務管理</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item @click="logout()">
                    <font-awesome-icon icon="sign-out-alt" />
                    {{this.$root.$options['lang']['LOGOUT']}}
                </b-nav-item>

            </b-nav>

            <!-- <li >
                <font-awesome-icon icon="list-alt"/>
                <span @click="toggleM(1)"> 會員管理</span>
                <div class="pl-3" v-show="menuOne">
                    <div @click="redirect('DidiMember')">- {{this.$root.$options['lang']['DIDIUSERSMANGE']}}</div>
                    <div @click="redirect('PaymentCheck')">- 調帳審核</div>
                </div>
            </li>
            <li>
                <font-awesome-icon icon="list-alt" />
                <span @click="toggleM(2)"> {{this.$root.$options['lang']['RECOMMANGE']}}</span>
                <div class="pl-3" v-show="menuTwo">
                    <div @click="redirect('RecomInfo')">- 推薦資訊</div>
                </div>
            </li>
            <li>
                <font-awesome-icon icon="list-alt" />
                {{this.$root.$options['lang']['RECOMGROUP']}}
            </li>
            <li>
                <font-awesome-icon icon="list-alt" />
                <span @click="toggleM(3)"> {{this.$root.$options['lang']['GAME_SETTING']}}</span>
                <div class="pl-3" v-show="menuThree">
                    <div @click="redirect('SaleSetting')">- 商店出售設定(列表)</div>
                    <div @click="redirect('PlayerMarket')">- 玩家市集</div>
                    <div @click="redirect('Deposit')">- 儲值設定</div>
                </div>
            </li>
            <li>
                <font-awesome-icon icon="list-alt" />
                <span @click="toggleM(4)"> {{this.$root.$options['lang']['MISSION_MANAGE']}}</span>
                <div class="pl-3" v-show="menuFourth">
                    <div @click="redirect('Mission_manage')">- 任務管理</div>
                </div>
            </li> -->





            <!-- <li>
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
                {{this.$root.$options['lang']['ACHIEVEMENT']}}
            </li>
            <li>
                <font-awesome-icon icon="list-alt" />
                {{this.$root.$options['lang']['DEPOSIT']}}
            </li>
            <li>
                <font-awesome-icon icon="list-alt" />
                {{this.$root.$options['lang']['REPORT']}}
            </li> -->
        </ul>
    </div>
</template>

<script>
const modal = require('../../alertModal')

export default {
    name: 'sideNav',
    data() {
        return {
        }
    },
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
                    return '上兵'
                    break
                case '5':
                    return '一兵'
                    break
                default:
            }
        },
        redirect(url) {
            this.$router.push(url)
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