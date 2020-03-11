<template>
    <div class="releaseTool">
        <div class="content">
            <img id="del-icon" src="~@/assets/images/icon-cancel.png" alt="" @click="closeModal()">
            <div class="container mt-3">
                <h1>裝備/道具發放</h1>
                <div class="input-group form-group">
                    <select name="releaseTool" v-model="releaseTool" class="form-control">
                        <option value="">發放裝備</option>
                    </select>
                </div>
                <div class="input-group form-group">
                    <select name="toolCategory" v-model="toolCategory" class="form-control">
                        <option value="">玄武</option>
                    </select>
                    <select name="toolPart" v-model="toolPart" class="form-control">
                        <option value="">頭</option>
                    </select>
                </div>
                <div class="input-group form-group">
                    <div class="col-lg-6 text-right">
                        <div class="btn btn-md btn-danger" @click="closeModal()">
                            取消
                        </div>
                    </div>
                    <div class="col-lg-6 text-left">
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
    name: 'releaseTool',
    data() {
        return  {
            releaseTool: '',
            toolCategory: '',
            toolPart: ''
        }
    },
    methods: {
        closeModal() {
            this.$store.dispatch('releaseTool', false)
        }
    }
}
</script>