<template>
    <div class="marketValueSet">
        <div class="content">
            <div class="content p-5 mt-4">
                <img id="del-icon" src="~@/assets/images/icon-cancel.png" alt="" @click="closeModal()">
                <h1>市集參數設定</h1>
                <div class="row">
                    <div class="container">
                        <div class="form-group">
                            <label for="valueEquip">裝備道具價值-祭祀道具價值</label>
                            <input type="text" class="form-control" name="valueEquip" placeholder="儲值方案">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="container">
                        <div class="form-group">
                            <label for="inDigot">元寶</label>
                            <input type="text" class="form-control" name="inDigot" placeholder="元寶">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="container">
                        <div class="form-group">
                            <label for="marketSellTool">市集拍賣道具</label>
                            <input type="text" class="form-control" name="marketSellTool" placeholder="市集拍賣道具">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="container">
                        <div class="form-group">
                            <label for="avaliable_time">生效時間</label>
                            <input type="text" class="form-control" name="avaliable_time" placeholder="生效時間">
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
    name: 'marketValueSet',
    computed: {
    },
    methods: {
        closeModal() {
            this.$store.dispatch('marketValueSet', false)
        }
    }
}
</script>