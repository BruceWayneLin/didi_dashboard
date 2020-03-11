<template>
    <div class="didiMemberTable">
        <memberDetail v-if="detailModal"/>
        <didiMemberFilter />
        <div class="container-fluid">
            <div class="row">
                <b-table striped stacked 
                    :items="items" 
                    :fields="fields" 
                    :per-page="perPage" 
                    :current-page="currentPage"
                    class="d-sm-none"
                >   
                    <template v-slot:cell(capital_state)="data">
                        <div class="mock-a" @click="capiModal()">
                            調帳
                        </div>
                    </template>
                    <template v-slot:cell(status)="data">
                        <div v-if="data['item']['status'] == 0">
                            啟用
                            <font-awesome-icon icon="user-times"  />
                        </div>
                        <div v-if="data['item']['status'] == 1">
                            停用
                            <font-awesome-icon icon="user" />
                        </div>
                    </template>
                    <template v-slot:cell(manipulation)="data">
                        <div class="m-1">
                            <!-- <font-awesome-icon class="m-1" icon="eye" /> -->
                            <font-awesome-icon class="m-1" icon="users" />
                            <font-awesome-icon class="m-1" icon="pencil-alt" @click="editUser(data)"/>
                        </div>
                        <div class="btn btn-success m-1" @click="redirect('DidInventory', data)">
                            物品/裝備倉
                        </div>
                        <div class="btn btn-info m-1" @click="release()">
                            道具/裝備發放
                        </div>
                    </template>
                </b-table> 
                
                <b-table striped responsive 
                    :items="items" 
                    :fields="fields" 
                    :per-page="perPage" 
                    :current-page="currentPage"
                    class="d-none d-sm-block"
                >
                     <template v-slot:cell(capital_state)="data">
                        <div class="mock-a" @click="capiModal(data)">
                            調帳
                        </div>
                    </template>
                    <template v-slot:cell(status)="data">
                        <div v-if="data['item']['status'] == 0">
                            啟用
                            <font-awesome-icon icon="user-times"  />
                        </div>
                        <div v-if="data['item']['status'] == 1">
                            停用
                            <font-awesome-icon icon="user" />
                        </div>
                    </template>
                    <template v-slot:cell(manipulation)="data">
                        <div class="m-1">
                            <!-- <font-awesome-icon class="m-1" icon="eye" /> -->
                            <font-awesome-icon class="m-1" icon="users" />
                            <font-awesome-icon class="m-1" icon="pencil-alt" @click="editUser(data)"/>
                        </div>
                        <div class="btn btn-success m-1" @click="redirect('DidInventory', data)">
                            物品/裝備倉
                        </div>
                        <div class="btn btn-info m-1" @click="release()">
                            道具/裝備發放
                        </div>
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
import memberDetail from '@/components/didiMember/memberDetail'
import didiMemberFilter from '@/components/didiMember/didiMemberFilter'

export default {
    name: 'didiMemberTable',
    components: {
        memberDetail,
        didiMemberFilter
    },
    data() {
        return {
            currentPage: 1,
            perPage: 7,
            // items: [],
            fields: [
                {
                    ID: {
                        label: 'ID',
                        sortable: true
                    }
                },
                {
                    member_account: {
                        label: this.$root.$options.lang['MEMBER_ACCOUNT'],
                        sortable: true
                    }
                },
                {
                    nickname: {
                        label: this.$root.$options.lang['NICKNAME'],
                        sortable: true
                    }
                },
                {
                    real_name: {
                        label: this.$root.$options.lang['REAL_NAME'],
                        sortable: true
                    }
                },
                {
                    recommend_account: {
                        label: this.$root.$options.lang['RECOMMEND_ACCOUNT'],
                        sortable: true
                    }
                },
                {
                    reccomend_nickname: {
                        label: this.$root.$options.lang['RECOMMEND_NICKNAME'],
                        sortable: true
                    }
                },
                {
                    create_date: {
                        label: this.$root.$options.lang['CREATE_DATE'],
                        sortable: true
                    }
                },
                {
                    capital_state: {
                        label: this.$root.$options.lang['CAPITAL_STATUS'],
                        sortable: true
                    }
                },
                {
                    status: {
                        label: this.$root.$options.lang['STATUS'],
                        sortable: true
                    }
                },
                {
                    manipulation: {
                        label: this.$root.$options.lang['MANIPULATION'],
                        sortable: false
                    }
                },
                // {
                //     inspect: {
                //         label: this.$root.$options.lang['INSPECT'],
                //         sortable: true
                //     }
                // },

            ]
        }
    },
    methods: {
        redirect(url, data) {
            this.$router.push(url)
            this.$store.dispatch('detailUser', data)
        },
        editUser(data) {
            this.$router.push('didiMemberEdit')
            this.$store.dispatch('detailUser', data)
        },
        getUser() {
            let data = {}
            data['url'] = this.$root.$options.apiUrl['api9']
            this.$store.dispatch('postApi', data).then((item)=>{
                this.items = item['data']
            })
        },
        release() {
            this.$store.dispatch('releaseTool', true)
        },
        capiModal(data) {
            console.log(data)
            this.$store.dispatch('detailUser', data)
            this.$store.dispatch('capiModalTog', true)
        }
    },
    computed: {
        items() {
            return this.$store.state.info.userTableItems
        },
        rows() {
            return this.items.length
        },
        detailModal() {
            return this.$store.state.modals.detailUser
        }
    },
    async mounted() {
    }
}
</script>
