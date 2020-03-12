<template>
    <div class="saleSettingTable">
        <div class="container">
            <div class="row">
                <b-table
                    striped responsive 
                    :items="items" 
                    :fields="fields"
                    class="d-none d-lg-block"
                >
                    <template v-slot:cell(operation)="data">
                        <button class="btn btn-info" @click="editUser(data)">
                            <font-awesome-icon icon="pencil-alt" />
                            編輯
                        </button>
                        <button class="btn btn-danger ml-2">
                            <font-awesome-icon icon="times" @click="editUser(data)"/>
                            刪除
                        </button>
                    </template>
                </b-table>

                <b-table
                    stacked 
                    striped responsive 
                    :items="items" 
                    :fields="fields"
                    class="d-lg-none"
                    :table-variant="info"
                >
                    <template v-slot:cell(operation)="data">
                        <button class="btn btn-info">
                            <font-awesome-icon icon="pencil-alt" @click="editUser(data)"/>
                            編輯
                        </button>
                        <button class="btn btn-danger ml-2">
                            <font-awesome-icon icon="times" @click="editUser(data)"/>
                            刪除
                        </button>
                    </template>
                </b-table>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name: 'saleSettingTable',
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
                        label: '道具部位',
                        sortable: true
                    }
                },
                {
                    quantity: {
                        label: '道具等級',
                        sortable: true
                    }
                },
                {
                    preOrder: {
                        label: '預購',
                        sortable: true
                    }
                },
                {
                    buy: {
                        label: '直購',
                        sortable: true
                    }
                },
                {
                    amount: {
                        label: '賣出數量/預購人數',
                        sortable: true
                    }
                },
                {
                    avaliable_time: {
                        label: '生效時間',
                        sortable: true
                    }
                },
                {
                    operation: {
                        label: '操作',
                        sortable: true
                    }
                },

            ],
            items: [
                {},
                {}
            ]
        }
    },
    methods:{
        editUser() {
        }
    }

}
</script>