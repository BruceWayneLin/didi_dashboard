<template>
    <div class="marketPreOrderTime">
        <div class="container">
        <h1>商店出售設定</h1>
        <div class="row d-none d-lg-block">
            <b-table
                striped responsive 
                :items="items" 
                :fields="fields"
            >
                <template v-slot:cell(application_date)="data">
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
                <template v-slot:cell(application_date)="data">
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
    name: 'marketPreOrderTime',
    data() {
        return {
            fields: [
                {
                    ID: {
                        label: '預購開始時間',
                        sortable: true
                    }
                },
                {
                    tool_name: {
                        label: '預購結束時間',
                        sortable: true
                    }
                },
                {
                    quantity: {
                        label: '結算時間',
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
                {}
            ]
        }
    }
}
</script>