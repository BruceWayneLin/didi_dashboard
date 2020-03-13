<template>
    <div class="marketValueTable">
        <div class="row">
            <div class="container">
                <h1>市集參數設定</h1>
                 <div class="row d-none d-lg-block">
                    <b-table
                        striped responsive 
                        :items="items" 
                        :fields="fields"
                    >
                    <template v-slot:cell(application_date)="data">
                        <button class="btn btn-primary"  @click="Modals()">
                            編輯
                        </button>
                    </template>
                    </b-table>
                </div>
                <div class="row d-lg-none">
                    <b-table stacked responsive 
                        :items="items" 
                        :fields="fields"
                    >
                    <template v-slot:cell(application_date)="data">
                        <button class="btn btn-primary" @click="Modals()">
                            編輯
                        </button>
                    </template>
                    </b-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'marketValueTable',
    data() {
        return {
            fields: [
                {
                    empty: {
                        label: '',
                        sortable: false
                    }
                },
                {
                    ID: {
                        label: '裝備道具價值-祭祀道具價值',
                        sortable: true
                    }
                },
                {
                    tool_name: {
                        label: '元寶',
                        sortable: true
                    }
                },
                {
                    quantity: {
                        label: '市集拍賣道具',
                        sortable: true
                    }
                },
                {
                    operation: {
                        label: '生效時間',
                        sortable: true
                    }
                },
                {
                    application_date: {
                        label: '操作',
                        sortable: true
                    }
                }
            ],
            items: [
                {
                    empty: '搶購'
                },
                {
                    empty: '預約'
                }
            ]
        }
    },
    methods: {
        Modals() {
            this.$store.dispatch('marketValueSet', true)
        }
    }
}
</script>