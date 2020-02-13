import axios from 'axios'
const modal = require('../../alertModal')
axios.interceptors.response.use((config) => {
    // console.log('平常', config)
    return config;
  }, (err) => {
    // console.log(err.response.status)
    let msg = {}
    msg['modalTitle'] = '錯誤'
    msg['modalText'] = err.response.data.error
    msg['modalIcon'] = 'error',
    msg['modalButtonText'] = '確定',
    msg['modelRedirectUrl'] = '/'
    modal.modal(msg)
    return Promise.reject(err);
})

const state = {
}

const getters = {

}

const actions = {
    getApi({commit, state}, data) {
        return new Promise((res, rej)=>{
            axios({
                method: 'get',
                url: `${process.env.VUE_APP_API_URL + data['url']}`,
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'authorization': sessionStorage.getItem('didi_token')
                }
            })
            .then((response)=>{
                res(response)
            })
            .catch((error)=>{
                res(error)
            })
        })
    },
    postApi({commit, state}, data) {
        return new Promise((res, rej)=>{
            axios({
                method: 'post',
                url: `${process.env.VUE_APP_API_URL + data['url']}`,
                headers: {
                  'Accept': 'application/json',
                  'authorization': sessionStorage.getItem('didi_token')
                },
                data: data
            })
            .then((response)=>{
                if(response.data.error){
                    let msg = {}
                    msg['modalTitle'] = '錯誤'
                    msg['modalText'] = response.data.error
                    msg['modalIcon'] = 'error',
                    msg['modalButtonText'] = '確定',
                    msg['modelRedirectUrl'] = ''
                    modal.modal(msg)
                }
                res(response)
            })
            .catch((error)=>{
                res(error)
            })
        })
    }
}

const mutations = {

}

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}
