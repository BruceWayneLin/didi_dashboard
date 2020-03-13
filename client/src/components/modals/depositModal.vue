<template>
    <div class="depositModal">
        <div class="content">
            <div class="content p-5 mt-4">
                <img id="del-icon" src="~@/assets/images/icon-cancel.png" alt="" @click="closeModal()">
                <h1>{{depositModal.title == 'edit'? '編輯':'新增'}}市集拍賣道具</h1>
                <div class="row">
                    <div class="container">
                        <div class="form-group">
                            <label for="depositPro">儲值方案</label>
                            <input type="text" class="form-control" name="depositPro" placeholder="儲值方案">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="container">
                        <div class="form-group">
                            <label for="depositAmt">儲值金額</label>
                            <input type="text" class="form-control" name="depositAmt" placeholder="儲值金額">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="container">
                        <div class="form-group">
                            <label for="value1">參數1</label>
                            <input type="text" class="form-control" name="value1" placeholder="參數1">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="container">
                        <div class="form-group">
                            <label for="value2">參數2</label>
                            <input type="text" class="form-control" name="value2" placeholder="參數2">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="container">
                        <div class="form-group">
                            <label for="proQu">方案數量</label>
                            <input type="text" class="form-control" name="proQu" placeholder="方案數量">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="container">
                        <div class="form-group">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="onMarketStatus" id="onMarketStatus" value="true" checked>
                                <label class="form-check-label" for="onMarket">
                                    上架
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="onMarketStatus" id="onMarketStatus" value="false">
                                <label class="form-check-label" for="onMarketStatus">
                                    下架
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="container text-center">
                        <button class="btn btn-primary mr-5">送出</button>
                        <button class="btn btn-danger ml-5">取消</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'depositModal',
    computed: {
        depositModal() {
            return this.$store.state.modals.depositModal
        }
    },
    methods: {
        closeModal() {
            let Modal = {}
            Modal.active = false
            Modal.title = ''
            this.$store.dispatch('depositModal', Modal)
        }
    }
}
</script>