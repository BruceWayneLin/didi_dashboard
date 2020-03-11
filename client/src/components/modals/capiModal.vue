<template>
    <div class="capiModal">
        <div class="content">
            <img id="del-icon" src="~@/assets/images/icon-cancel.png" alt="" @click="closeModal()">
            <div class="container mt-3">
                <h1>調帳申請</h1>
                <div class="input-group form-group">
                    <label for="application" class="col-lg-3">申請人:</label>
                    <span class="col-lg-9">{{me['username']}}</span>
                </div>
                <div class="input-group form-group">
                    <label for="type" class="col-lg-3">申請類型:</label>
                    <span class="col-lg-9">調帳</span>
                </div>
                <div class="input-group form-group">
                    <label for="account" class="col-lg-3">調帳帳號:</label>
                    <span class="col-lg-9">{{detailInfo['item']['member_account']}}</span>
                </div>
                <div class="input-group form-group">
                    <label for="apply_amount" class="col-lg-3">申請金額:</label>
                    <input class="col-lg-9 form-control" placeholder="申請金額">
                </div>
                <div class="input-group form-group">
                    <label for="desc" class="col-lg-3">說明:</label>
                    <textarea class="col-lg-9" name="desc" id="desc" cols="50" rows="10"></textarea>
                </div>
                <div class="input-group form-group">
                    <div class="col-6 text-right">
                        <div class="btn btn-md btn-danger" @click="closeModal()">
                            取消
                        </div>
                    </div>
                    <div class="col-6 text-left">
                        <div class="btn btn-md btn-primary" @click="closeModal()">
                            確定
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'capiModal',
    methods: {
        closeModal() {
            this.$store.dispatch('capiModalTog', false)
        }
    },
    computed: {
        me() {
            return this.$store.state.info.me
        },
        detailInfo() {
            if(!this.$store.state.modals.userDetailInfo.item) {
                this.$router.push('didiMember')
            }
            return this.$store.state.modals.userDetailInfo
        },
    }
}
</script>