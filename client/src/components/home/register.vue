<template>
    <div id="register">
        <div class="container">
            <div class="d-flex justify-content-center h-100">
                <div class="card">
                <div class="card-header">
                    <h3>
                        {{this.$root.$options['lang']['REGISTER']}}
                        <font-awesome-icon icon="id-card" />
                    </h3>
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
                    <div class="form-group">
                        <button @click="submitRegisterForm()" class="btn btn-primary float-right">{{this.$root.$options['lang']['SUBMIT']}}</button>
                        <button @click="back()" class="btn btn-success">{{this.$root.$options['lang']['PREVIOUS']}}</button>
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
    name: 'register',
    data() {
        return {
            username: '',
            password: '',
            email: ''
        }
    },
    methods: {
        back() {
            this.$store.dispatch('changeLogin', true)
        },
        submitRegisterForm() {
            let data = {};
            data['url'] = this.$root.$options.apiUrl['api3']
            data['username'] = this.username
            data['password'] = this.password
            data['email'] = this.email

            let i = this.$store.dispatch('postApi', data);
            i.then((result)=>{
                if(result['data'].success) {
                    let msg = {}
                    msg['modalTitle'] = '成功'
                    msg['modalText'] = result['data'].success
                    msg['modalIcon'] = 'success',
                    msg['modalButtonText'] = '確定',
                    msg['modelRedirectUrl'] = '/'
                    modal.modal(msg)
                }
            })
        }
    }

}
</script>