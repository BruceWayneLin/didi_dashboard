<template>
    <div class="editUser">
        <div class="content">
            <h1 class="text-center mt-2">
                {{this.$root.$options['lang']['EDITUSER']}}
                <font-awesome-icon icon="user-edit" />
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
                        <input v-model="username" disabled type="text" class="form-control" placeholder="username">
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
                            <font-awesome-icon icon="id-badge" />
                        </span>
                        </div>
                        <select name="level" v-model="level" class="form-control">
                            <option v-if="me['level'] < 1" value="1">將軍</option>
                            <option v-if="me['level'] < 2" value="2">校尉</option>
                            <option v-if="me['level'] < 3" value="3">士官</option>
                            <option v-if="me['level'] < 4" value="4">士兵</option>
                            <option v-if="me['level'] < 5" value="5">百姓</option>
                        </select>
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
  name: 'editUser',
  props: {
      user: {}
  },
  components: {
  },
  data() {
    return {
        username: '',
        password: '',
        email: '',
        level: '',
        id: ''
    }
  },
  methods: {
        setData() {
            this.username = this.user.username
            this.password = this.user.password
            this.email = this.user.email
            this.level = this.user.level
            this.id = this.user.id
        },
        close() {
            this.$store.dispatch('editUser', false)
        },
       submitRegisterForm() {
            let data = {};
            data['url'] = this.$root.$options.apiUrl['api8']
            data['username'] = this.username
            data['password'] = this.password
            data['email'] = this.email
            data['level'] = this.level
            data['id'] = this.id
            let i = this.$store.dispatch('postApi', data);
            i.then((result)=>{
                if(result['data'].success) {
                    let msg = {}
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
  computed: {
      me() {
          return this.$store.state.info.me
      }
  },
  async mounted() {
      await this.setData()
  }
}
</script>