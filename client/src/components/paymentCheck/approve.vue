<template>
    <div class="approve">
        <div class="container">
            <div class="row">
                <b-table
                    striped responsive 
                    :items="items" 
                    :fields="fields"
                >
                </b-table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'approve',
    data() {
        return {
            fields: [
                {
                    ID: {
                        label: '審核單號',
                        sortable: true
                    }
                },
                {
                    tool_name: {
                        label: '會員',
                        sortable: true
                    }
                },
                {
                    quantity: {
                        label: '說明',
                        sortable: true
                    }
                },
                {
                    operation: {
                        label: '項目',
                        sortable: true
                    }
                },
                {
                    application_date: {
                        label: '申請日期',
                        sortable: true
                    }
                },
                {
                    result: {
                        label: '審核結果',
                        sortable: true
                    }
                },
                {
                    approve_pp: {
                        label: '批准人',
                        sortable: true
                    }
                },
                {
                    approve_dd: {
                        label: '批准時間',
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
    computed: {}
}
</script>