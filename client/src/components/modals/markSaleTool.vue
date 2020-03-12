<template>
    <div class="markSaleTool">
        <div class="content p-5 mt-4">
            <img id="del-icon" src="~@/assets/images/icon-cancel.png" alt="" @click="closeModal()">
            <h1>新增市集拍賣道具</h1>
            <div class="row">
                <div class="container">
                    <div class="form-group">
                        <label for="toolType">道具種類</label>
                        <select class="form-control" id="toolType">
                            <option value="">玄武 朱雀</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="container">
                    <div class="form-group">
                        <label for="toolLevel">道具等級</label>
                        <select class="form-control" id="toolLevel">
                            <option value="">+1</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="container">
                    <div class="form-group">
                        <label for="toolValue">價值</label>
                        <input type="text" class="form-control" name="toolValue" placeholder="請輸入價值">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="container">
                    <div class="form-group">
                        <label for="starttime">預約開始時間</label>
                        <input type="text" class="form-control" name="reserveStartTime" placeholder="預約開始時間">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="container">
                    <div class="form-group">
                        <label for="endtime">預約結束時間</label>
                        <input type="text" class="form-control" name="reserveEndTime" placeholder="預約結束時間">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="container">
                    <div class="form-group">
                        <label for="buyStartTime">搶購開始時間</label>
                        <input type="text" class="form-control" name="buyStartTime" placeholder="搶購開始時間">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="container">
                    <div class="form-group">
                        <label for="buyEndTime">搶購結束時間</label>
                        <input type="text" class="form-control" name="buyEndTime" placeholder="搶購結束時間">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="container">
                    <div class="form-group">
                        <label for="settleTime">結算時間</label>
                        <input type="text" class="form-control" name="settleTime" placeholder="結算時間">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="container">
                    <div class="form-group">
                        <label for="buyIngots">搶購所需元寶</label>
                        <input type="text" class="form-control" name="buyIngots" placeholder="搶購所需元寶">
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
                    <button class="btn btn-primary">送出</button>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'markSaleTool',
    methods: {
        closeModal() {
            this.$store.dispatch('markSaleTool', false)
        }
    }
}
</script>