<template>
  <div class="login">
    <div class="container">
      <div class="d-flex justify-content-center h-100">
        <div class="card">
          <div class="card-header">
            <h3>
                {{this.$root.$options['lang']['LOGINTXT']}}
                <font-awesome-icon icon="user" />
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
              <div class="form-group">
                <button @click="submitLoginForm()" class="btn btn-primary float-right">{{this.$root.$options['lang']['SUBMIT']}}</button>
                <button v-if="false" @click="register()" class="btn btn-success">{{this.$root.$options['lang']['REGISTER']}}</button>
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
export default {
  name: 'login',
  props: {
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitLoginForm() {
        sessionStorage.removeItem('didi_token')
        let data = {};
        data['url'] = this.$root.$options.apiUrl['api2']
        data['username'] = this.username
        data['password'] = this.password

        let i = this.$store.dispatch('postApi', data);
        i.then((result)=>{
          if(result['data']['error']) return
          sessionStorage.setItem('didi_token', result['data']['token'])
          this.$router.push('Dashboard')
        })
    },
    register() {
        this.$store.dispatch('changeLogin', false)
    }
  },
  mounted() {
  }
}
</script>
