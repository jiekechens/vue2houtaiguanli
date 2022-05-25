import Vue from 'vue';
import Vuex from 'vuex';

const state = {
    sum: 10
}
const getters = {
    big(state) {
        return state.sum * 10
    }
}
const mutations = {
    add(state, value) {
        state.sum += value
    }
}
const actions = {
    wait(a, value) {
        this.dispatch("zhonghuang", 19)
        console.log(a, value);
    },
    zhonghuang(a, value) {
        console.log(a, value);
    }
}
Vue.use(Vuex)
export default new Vuex.Store({
    // ...
    state,
    mutations,
    actions,
    getters
})