<template>
    <div class="usersTable">
        <addUser v-if="addUsers" />
        <editUser v-if="editUserState" :user="editUser" />
        <div class="container">
            <h1>{{language['MEMBERLIST']}}</h1>
            <div class="text-right" v-if="me['level'] <= 3">
                <div class="btn btn-primary">
                    <font-awesome-icon icon="user-plus" @click="toAddUser()"/>
                </div>
            </div>
            <div class="row">
                <b-table responsive striped :items="items" :fields="fields" dark="dark" :per-page="perPage" :current-page="currentPage">
                    <template v-slot:cell(level)="data">
                        {{ level(data['item']['level']) }}
                        <img v-if="data['item']['level'] <= 1" class="badge_icon" src="@/assets/images/badges/1.svg" alt="">
                        <img v-if="data['item']['level'] <= 2" class="badge_icon" src="@/assets/images/badges/2.svg" alt="">
                        <img v-if="data['item']['level'] <= 3" class="badge_icon" src="@/assets/images/badges/3.svg" alt="">
                        <img v-if="data['item']['level'] <= 4" class="badge_icon" src="@/assets/images/badges/4.svg" alt="">
                        <img v-if="data['item']['level'] <= 5" class="badge_icon" src="@/assets/images/badges/5.svg" alt="">
                    </template>
                    <template v-slot:cell(delete)="data">
                            <button @click="deleteMember(data['item'])" class="btn btn-primary ml-2" v-if="me['level'] < data['item']['level']">
                                <font-awesome-icon icon="trash" />
                            </button>
                            <button @click="edit(data['item'])" class="btn btn-success ml-2" v-if="me['level'] < data['item']['level']">
                                <font-awesome-icon icon="pen" />
                            </button>
                             <button @click="toggle(data['item'])" class="btn btn-danger ml-2" v-if="(me['level'] < data['item']['level']) && !data['item']['active']">
                                <font-awesome-icon icon="user-times" />
                            </button>
                            <button @click="toggle(data['item'])" class="btn btn-info ml-2" v-if="(me['level'] < data['item']['level']) && data['item']['active']">
                                 <font-awesome-icon icon="user" />
                            </button>
                    </template>
                </b-table> 
                <div class="mt-3 overflow-auto container">
                    <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    aria-controls="my-table"
                    align="right"
                    ></b-pagination>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
const modal = require('../../alertModal')
const swal = require('sweetalert2')
const language = require('../../language')

import addUser from '@/components/modals/addUser'
import editUser from '@/components/modals/editUser'

export default {
    name: 'usersTable',
    components: {
        addUser,
        editUser
    },
    data() {
        return {
            currentPage: 1,
            perPage: 7,
            items: [],
            fields: [
                {
                    username: {
                        label: this.$root.$options['lang']['USERNAME'],
                        sortable: true
                    }
                },
                {
                    email: {
                        label: this.$root.$options['lang']['EMAIL'],
                        sortable: true
                    }
                },
                {
                    level: {
                        label: this.$root.$options['lang']['LEVEL'],
                        sortable: true
                    }
                },
                {
                    delete: {
                        label: this.$root.$options['lang']['ACTIONS'],
                        sortable: false
                    }
                }
            ],
            editUser: {}
        }
    },
    methods: {
        edit(item) {
            this.editUser = item
            this.$store.dispatch('editUser', true)
        },
        toggle(item) {
            let data = {};
            data['url'] = this.$root.$options.apiUrl['api8']
            data['username'] = item.username
            data['password'] = item.password
            data['email'] = item.email
            data['level'] = item.level
            data['id'] = item.id
            data['active'] = !item.active
            let i = this.$store.dispatch('postApi', data);
            i.then((result)=>{
                if(result['data'].success) {
                    let msg = {}
                    msg['modalTitle'] = '成功'
                    msg['modalText'] = result['data'].success
                    msg['modalIcon'] = 'success',
                    msg['modalButtonText'] = '確定',
                    msg['modelRedirectUrl'] = '/Dashboard'
                    modal.modal(msg)
                }
            })
        }, 
        deleteUser(item) {
            let data = {};
            data['url'] = this.$root.$options.apiUrl['api7']
            data['item'] = item

            let i = this.$store.dispatch('postApi', data);
            i.then((result)=>{
                if(result['data'].success) {
                    let msg = {}
                    msg['modalTitle'] = '成功'
                    msg['modalText'] = result['data'].success
                    msg['modalIcon'] = 'success',
                    msg['modalButtonText'] = '確定',
                    msg['modelRedirectUrl'] = '/Dashboard'
                    modal.modal(msg)
                }
            })
        },
        deleteMember(data) {
            swal.fire({
                title: language['selectLang']['SURETODELTE'],
                text: language['selectLang']['CANTREVERT'],
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: language['selectLang']['SUREDELETE'],
                cancelButtonText: language['selectLang']['CANCEL']
            }).then((result) => {
                this.deleteUser(data)
            })
        },
        toAddUser() {
            this.$store.dispatch('addUsers', true)
        },
        getUser() {
            let data = {};
            data['url'] = this.$root.$options.apiUrl['api6']
            let i = this.$store.dispatch('postApi', data);
            i.then((result)=>{
                console.log(result['data']['users'])
                this.items = result['data']['users']
                return
            })
        },
        level(data) {
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
        }
    },
    computed: {
        me() {
            return this.$store.state.info.me
        },
        addUsers() {
            return this.$store.state.modals.addUsers
        },
        editUserState() {
            return this.$store.state.modals.editUser
        },
        language() {
            return language['selectLang']
        },
        rows() {
            return this.items.length
        }
    },
    async mounted() {
        await this.getUser()
    }
}
</script>