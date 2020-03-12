<template>
    <div class="marketSale">
        <div class="container">
            <h1>市集拍賣道具列表設定</h1>
            <button class="btn btn-success float-right" @click="addNew()">
                新增
            </button>
            <div class="row d-none d-lg-block">
                <b-table
                    striped responsive 
                    :items="items" 
                    :fields="fields"
                >
                 <template v-slot:cell(op)="data">
                     <button class="btn btn-primary">
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
                <template v-slot:cell(op)="data">
                     <button class="btn btn-primary">
                         編輯
                     </button>
                 </template>
                </b-table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'marketSale',
    data() {
        return {
            fields: [
                {
                    ID: {
                        label: '道具種類',
                        sortable: true
                    }
                },
                {
                    tool_name: {
                        label: '道具等級',
                        sortable: true
                    }
                },
                {
                    quantity: {
                        label: '價值',
                        sortable: true
                    }
                },
                {
                    operation: {
                        label: '預約開始時間',
                        sortable: true
                    }
                },
                {
                    application_date: {
                        label: '預約結束時間',
                        sortable: true
                    }
                },
                {
                    result: {
                        label: '搶購開始時間',
                        sortable: true
                    }
                },
                {
                    approve_pp_t: {
                        label: '搶購結束時間',
                        sortable: true
                    }
                },
                {
                    approve_dd_d: {
                        label: '搶購元寶',
                        sortable: true
                    }
                },
                {
                    approve_dd_c: {
                        label: '結算時間',
                        sortable: true
                    }
                },
                {
                    approve_dsd: {
                        label: '狀態',
                        sortable: true
                    }
                },
                {
                    created_time: {
                        label: '生效時間',
                        sortable: true
                    }
                },
                {
                    op: {
                        label: '操作',
                        sortable: true
                    }
                }
            ],
            items: [
                {},
                {}
            ]
        }
    },
    methods: {
        addNew() {
            this.$store.dispatch('markSaleTool', true)
        }
    }
}
</script>