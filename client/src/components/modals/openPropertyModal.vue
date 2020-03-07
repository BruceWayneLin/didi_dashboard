<template>
    <div class="openPropertyModal">
        <div class="content">
            <img id="del-icon" src="~@/assets/images/icon-cancel.png" alt="" @click="closeModal()">
            <div class="contaienr">
                <div class="row mt-5 p-2">
                    <div class="col-sm-6">
                    會員帳號: {{propertyModalInfo['item']['member_account']}}
                    </div>
                    <div class="col-sm-6">
                        暱稱: {{propertyModalInfo['item'].nickname?propertyModalInfo.nickname:'-'}}
                    </div>
                </div>
                 <h6 class="p-2">
                    資產細節
                </h6>
                <table class="table table-striped">
                    <tr>
                        <td>倉庫道具價值:</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>裝備道具價值:</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>祭祀道具價值:</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>拍賣道具價值:</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>元寶餘額:</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>收益餘額:</td>
                        <td>-</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'openPropertyModal',
    methods: {
        closeModal() {
            this.$store.dispatch('openPropertyModal', false)
        }
    },
    computed: {
        propertyModalInfo() {
            return this.$store.state.modals.userDetailInfo
        }
    }
}
</script>
