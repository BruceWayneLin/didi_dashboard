<template>
    <div class="memberDetail">
        <div class="content">
            <h3 class="text-center">會員編輯</h3>
            <div class="container overflow-auto">
                    <div class="form-group row p-2">
                        <label for="nickname" class="col-sm-4 col-form-label text-center">暱稱</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" id="nickname" :value="detailInfo.item.nickname">
                        </div>
                    </div>
                    <div class="form-group row p-2">
                        <label for="recommendPP" class="col-sm-4 col-form-label text-center">推薦人</label>
                        <div class="col-sm-8">
                            {{detailInfo.item.recommend_account}}
                        </div>
                    </div>
                    <div class="form-group row p-2">
                        <label for="loginPw" class="col-sm-4 col-form-label text-center">登入密碼</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" id="loginPw" >
                        </div>
                    </div>
                    <div class="form-group row p-2">
                        <label for="tradePw" class="col-sm-4 col-form-label text-center">交易密碼</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" id="tradePw" >
                        </div>
                    </div>
                    <div class="form-group row p-2">
                        <label for="name" class="col-sm-4 col-form-label text-center">姓名</label>
                        <div class="col-sm-8">
                            {{detailInfo.item.real_name}}
                        </div>
                    </div>
                    <div class="form-group row p-2">
                        <label for="id-number" class="col-sm-4 col-form-label text-center">身份證字號</label>
                        <div class="col-sm-8">
                        </div>
                    </div>
                    <div class="form-group row p-2">
                        <label for="Line" class="col-sm-4 col-form-label text-center">Line</label>
                        <div class="col-sm-8">
                        </div>
                    </div>
                    <div class="form-group row p-2">
                        <label for="Wechat" class="col-sm-4 col-form-label text-center">Wechat</label>
                        <div class="col-sm-8">
                        </div>
                    </div>
                    <div class="form-group row p-2">
                        <label for="LoanWay" class="col-sm-4 col-form-label text-center">放款方式</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" id="LoanWay" >
                        </div>
                    </div>
                    <div class="form-group row p-2">
                        <label for="property" class="col-sm-4 col-form-label text-center">資產</label>
                        <div class="col-sm-8">
                            <span class="col-sm-2">單位:</span>
                            <span class="col-sm-8"></span>
                            <span class="col-sm-2">
                                <span class="mock-a" @click="openPropertyModal">資產</span>
                            </span>
                        </div>
                    </div>
                    <div class="form-group row p-2">
                        <label for="create_date" class="col-sm-4 col-form-label text-center">創建日期</label>
                        <div class="col-sm-8">
                            {{detailInfo.item.create_date}}
                        </div>
                    </div>
                    <div class="form-group row p-2">
                        <label for="lastDay" class="col-sm-4 col-form-label text-center">最後上限日期</label>
                        <div class="col-sm-8">
                            <input type="text" readonly class="form-control-plaintext" id="lastDay" >
                        </div>
                    </div>
                    <div class="form-group row p-2">
                        <label for="status" class="col-sm-4 col-form-label text-center">狀態</label>
                        <div class="col-sm-8">
                            <div class="form-check form-check-inline">
                                <input v-model="detailInfo.item.status" class="form-check-input" type="radio" value="1" name="status" id="status">
                                <label class="form-check-label" for="status">啟用</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input v-model="detailInfo.item.status" class="form-check-input" type="radio" value="0" name="status" id="status">
                                <label class="form-check-label" for="status">停用</label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row p-2">
                        <div class="col-sm-12 text-center">
                            <button class="btn btn-danger mr-3" @click="back">
                                上一頁
                            </button>
                            <button class="btn btn-primary" name="confirmBtn" id="confirmBtn" @click="submitData()">
                                更新
                            </button>
                        </div>
                    </div>
            </div>
        </div>
        <openPropertyModal v-if="property" />
    </div>
</template>

<script>
const modal = require('../../alertModal')
import openPropertyModal from '@/components/modals/openPropertyModal'
export default {
  name: 'memberDetail',
  props: {
      user: {}
  },
  components: {
      openPropertyModal
  },
  data() {
    return {
    }
  },
  methods: {
    back() {
        this.$router.push('didiMember')
    },
    closeModal() {
        let info = {}
        info.active = false
        this.$store.dispatch('detailUser', info)
    },
    submitData() {
        let info = {}
        this.$store.dispatch('detailUser', info)
    },
    openPropertyModal() {
        this.$store.dispatch('openPropertyModal', true)
    }
  },
  computed: {
      detailInfo() {
        if(!this.$store.state.modals.userDetailInfo.item) {
            this.$router.push('didiMember')
        }
        return this.$store.state.modals.userDetailInfo
      },
      me() {
        return this.$store.state.info.me
      },
      property() {
        return this.$store.state.modals.openPropertyModal
      }
  },
  async mounted() {
      window.scrollTo(50, 0)
  }
}
</script>