<template>
    <div class="didiMemberFilter">
        <div class="container">
            <h4>搜尋:</h4>
            <div class="border p-4">
                <div class="row">
                <div class="col-sm-6">
                    <span>帳號:</span>
                    <span>
                        <input @change="getUser('member_account')" v-model="member_account" class="form-control" type="text" placeholder="請輸入帳號搜尋">
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
                        <input  @change="getUser('recomend_acc')"  v-model="recomend_acc" type="text" name="recomend_acc" class="form-control" placeholder="請輸入推薦人帳號">
                    </div>
                    <div class="col-sm-6">
                        <label for="status">狀態</label>
                        <select @change="getUser('status')" name="status" id="didi_member_status" class="form-control" v-model="status">
                            <option value="">全部</option>
                            <option value="0">啟用</option>
                            <option value="1">停用</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    <script>
    var _ = require('lodash/core')
    export default {
        name: 'didiMemberFilter',
        data() {
            return {
                calendarFrom: '',
                calendarTo: '',
                member_account: '',
                recomend_acc: '',
                status: ''
            }
        },
        methods: {
            getUser(search) {
                let data = {}
                data['url'] = this.$root.$options.apiUrl['api9']
                this.$store.dispatch('postApi', data).then((item)=>{
                    var returnVal
                    switch(search) {
                        case 'status':
                            returnVal = _.filter(item['data'], (obj)=>{
                                if(this.member_account) {
                                    return obj.member_account == this.member_account &&
                                           obj.status == this.status
                                }
                                return obj.status == this.status
                            })
                        break;
                        case 'member_account':
                            returnVal = _.filter(item['data'], (obj)=>{
                                return obj.member_account == this.member_account
                            })
                            this.member_account = ''
                            break;
                        case 'recomend_acc':
                            returnVal = _.filter(item['data'], (obj)=>{
                                return obj.recommend_account == this.recomend_acc
                            })
                            this.member_account = ''
                            this.status = ''
                            break;
                        default:
                            returnVal = _.filter(item['data'], (obj)=>{
                                return obj
                            })
                    }
                    this.$store.dispatch('updateUserItems', returnVal)
                })
            }
        },
        async mounted() {
            await this.getUser()
        }
    
    }
    </script>