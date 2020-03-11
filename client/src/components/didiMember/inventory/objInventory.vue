<template>
    <div class="objInventory">
        <div class="container">
            <div class="row">
                <span class="col-sm-6">會員帳號: {{detailInfo['item'].member_account}}</span>
                <span class="col-sm-6">暱稱: {{detailInfo['item'].nickname}}</span>
            </div>
            <div class="row">
                <b-table
                    striped responsive 
                    :items="items" 
                    :fields="fields"
                >
                     <template v-slot:cell(operation)="data">
                        <button class="btn-info">
                            回收
                        </button>
                    </template>
                </b-table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'objInventory',
    data() {
        return {
            fields: [
                {
                    ID: {
                        label: 'ID',
                        sortable: true
                    }
                },
                {
                    tool_name: {
                        label: '物品名稱',
                        sortable: true
                    }
                },
                {
                    quantity: {
                        label: '數量',
                        sortable: true
                    }
                },
                {
                    operation: {
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
    computed: {
        detailInfo() {
            if(!this.$store.state.modals.userDetailInfo.item) {
                this.$router.push('didiMember')
            }
            return this.$store.state.modals.userDetailInfo
        },
    },
    components: {

    }

}
</script>