<template>
    <div class="addUser">
        <div class="content">
            <h1 class="text-center mt-2">
                {{this.$root.$options['lang']['ADDUSER']}}
                <font-awesome-icon icon="user-plus" />
            </h1>
            <div class="d-flex justify-content-center h-100">
                <div class="card">
                <div class="card-header">
                </div>
                <div class="card-body">
                    <div class="input-group form-group">
                        <div class="input-group-prepend">
                        <span class="input-group-text">
                            <font-awesome-icon icon="user" />
                        </span>
                        </div>
                        <input v-model="username" type="text" class="form-control" placeholder="username">
                    </div>
                    <div class="input-group form-group">
                        <div class="input-group-prepend">
                        <span class="input-group-text">
                            <font-awesome-icon icon="key" />
                        </span>
                        </div>
                        <input v-model="password" type="password" class="form-control" placeholder="password">
                    </div>
                    <div class="input-group form-group">
                        <div class="input-group-prepend">
                        <span class="input-group-text">
                            <font-awesome-icon icon="envelope" />
                        </span>
                        </div>
                        <input v-model="email" type="email" class="form-control" placeholder="email">
                    </div>
                    <div class="form-group text-center">
                        <button class="btn btn-danger float-left" @click="close()">
                            {{this.$root.$options['lang']['CLOSE']}}
                        </button>
                        <button @click="submitRegisterForm()" class="btn btn-primary float-right">{{this.$root.$options['lang']['SUBMIT']}}</button>
                    </div>
                </div>
                <div class="card-footer">
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const modal = require('../../alertModal')
export default {
  name: 'addUser',
  props: {
  },
  components: {
  },
  data() {
    return {
        username: '',
        password: '',
        email: ''
    }
  },
  methods: {
        close() {
            this.$store.dispatch('addUsers', false)
        },
       submitRegisterForm() {
            let data = {};
            let msg = {}
            msg['modalTitle'] = '必填'
            msg['modalIcon'] = 'error',
            msg['modalButtonText'] = '確定'
            data['url'] = this.$root.$options.apiUrl['api3']
            if(!this.username) {
               msg['modalText'] = '會員名稱是必填欄位'
               modal.modal(msg)
               return
            }
            if(!this.password) {
               msg['modalText'] = '密碼是必填欄位'
               modal.modal(msg)
               return
            }
            if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))) {
               msg['modalText'] = '請填正確信箱格式'
               modal.modal(msg)
               return
            }
            if(!this.email) {
               msg['modalText'] = '信箱是必填欄位'
               modal.modal(msg)
               return
            }
            data['username'] = this.username
            data['password'] = this.password
            data['email'] = this.email

            let i = this.$store.dispatch('postApi', data);
            i.then((result)=>{
                if(result['data'].success) {
                    msg['modalTitle'] = '成功'
                    msg['modalText'] = result['data'].success
                    msg['modalIcon'] = 'success',
                    msg['modalButtonText'] = '確定',
                    msg['modelRedirectUrl'] = '/Dashboard'
                    modal.modal(msg)
                }
            })
        }
  },
  mounted() {
  }
}
</script>