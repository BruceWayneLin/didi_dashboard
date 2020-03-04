<template>
    <div class="didiMemberTable">
        <div class="container">
            <div class="row">
                <b-table striped responsive :items="items" :fields="fields" :per-page="perPage" :current-page="currentPage">
                    <template v-slot:cell(status)="data">
                        <font-awesome-icon icon="user-times" v-if="data['item']['status'] == 0" />
                        <font-awesome-icon icon="user"  v-if="data['item']['status'] == 1" />
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

export default {
    name: 'didiMemberTable',
    components: {
    },
    data() {
        return {
            currentPage: 1,
            perPage: 7,
            items: [],
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
                    reccomend_account: {
                        label: this.$root.$options.lang['RECOMMEND_ACCOUNT'],
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
                    status: {
                        label: this.$root.$options.lang['STATUS'],
                        sortable: true
                    }
                },
                {
                    inspect: {
                        label: this.$root.$options.lang['INSPECT'],
                        sortable: true
                    }
                },

            ]
        }
    },
    methods: {
        getUser() {
            let data = {}
            data['url'] = this.$root.$options.apiUrl['api9']
            this.$store.dispatch('postApi', data).then((item)=>{
                this.items = item['data']
            })
        }
    },
    computed: {
        rows() {
            return this.items.length
        }
    },
    async mounted() {
        await this.getUser()
    }
}
</script>