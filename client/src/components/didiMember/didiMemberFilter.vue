<template>
    <div class="didiMemberFilter">
        <div class="container">
            <h4>搜尋:</h4>
            <div class="border p-4">
                <div class="row">
                <div class="col-sm-6">
                    <span>帳號:</span>
                    <span>
                        <input class="form-control" type="text" placeholder="請輸入帳號搜尋">
                    </span>
                </div>
                <div class="col-sm-6">
                    <div class="row">
                        <div class="col-6">
                            <span>創建帳號日期:</span>
                            <span>
                                <b-form-datepicker 
                                id="calendarFrom" 
                                v-model="calendarFrom" 
                                class="mb-2"
                                ></b-form-datepicker>
                            </span>
                        </div>
                        <div class="col-6">
                            <span>至:</span>
                            <span>
                                <b-form-datepicker 
                                id="calendarTo" 
                                v-model="calendarTo" 
                                class="mb-2"
                                ></b-form-datepicker>
                            </span>
                        </div>
                    </div>
                    
                </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <label for="recomend_acc">推薦人帳號</label>
                        <input type="text" name="recomend_acc" class="form-control" placeholder="請輸入推薦人帳號">
                    </div>
                    <div class="col-sm-6">
                        <label for="status">狀態</label>
                        <select name="status" id="didi_member_status" class="form-control">
                            <option value="all">全部</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    <script>
    export default {
        name: 'didiMemberFilter',
        data() {
            return {
                calendarFrom: '',
                calendarTo: ''
            }
        },
        methods: {
            getUser() {
                let data = {}
                data['url'] = this.$root.$options.apiUrl['api9']
                this.$store.dispatch('postApi', data).then((item)=>{
                    this.$store.dispatch('updateUserItems', item['data'])
                })
            }
            // onContext(ctx) {
            //     this.context = ctx
            // }
        },
        async mounted() {
            await this.getUser()
        }
    
    }
    </script>