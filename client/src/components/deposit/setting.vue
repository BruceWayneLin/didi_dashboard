<template>
    <div class="setting">
        <div class="container">
            <h1>儲值方案列表設定</h1>
            <button class="btn btn-success float-right" @click="Modals('new')">
                新增
            </button>
            <div class="row d-none d-lg-block">
                <b-table
                    striped responsive 
                    :items="items" 
                    :fields="fields"
                >
                 <template v-slot:cell(approve_dd_d)="data">
                     <button class="btn btn-primary"  @click="Modals('edit')">
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
                <template v-slot:cell(approve_dd_d)="data">
                     <button class="btn btn-primary" @click="Modals('edit')">
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
    name: 'setting',
    methods: {
        Modals(text) {
            let modalObj =  {
                active: true,
                title: text
            }
            this.$store.dispatch('depositModal', modalObj)
        }

    },
    data() {
        return {
            fields: [
                {
                    ID: {
                        label: '方案',
                        sortable: true
                    }
                },
                {
                    tool_name: {
                        label: '儲值金額',
                        sortable: true
                    }
                },
                {
                    quantity: {
                        label: '參數1',
                        sortable: true
                    }
                },
                {
                    operation: {
                        label: '參數2',
                        sortable: true
                    }
                },
                {
                    application_date: {
                        label: '方案數量',
                        sortable: true
                    }
                },
                {
                    result: {
                        label: '狀態',
                        sortable: true
                    }
                },
                {
                    approve_pp_t: {
                        label: '生效時間',
                        sortable: true
                    }
                },
                {
                    approve_dd_d: {
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
}
</script>