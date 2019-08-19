import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './state'


export default new VueX.Store({
    state,
    mutations,
    actions,
    getters
})
