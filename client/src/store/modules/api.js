import axios from 'axios'

axios.interceptors.response.use((config) => {
    // console.log('平常', config)
    return config;
  }, (err) => {
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
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then((response)=>{
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
