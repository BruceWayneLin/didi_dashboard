<template>
    <div class="pending">
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
    name: 'pending',
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
                    review: {
                        label: '審核',
                        sortable: true
                    }
                },
                {
                    application: {
                        label: '申請人',
                        sortable: true
                    }
                },
                {
                    application_date: {
                        label: '申請日期',
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
    computed: {
    }

}
</script>