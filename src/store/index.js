import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    typeState:false,
  },
 
  mutations: {
    setTypeState(state,typeState){
      state.typeState = typeState
      console.log('换肤000',  typeState)
    }
  },
  actions: {
    setTypeState({commit},typeState){
      commit('setTypeState',typeState)
      console.log('换肤1111',  typeState)
    }
  },
  getters: {
    // typeState(state){
    //   console.log('换肤2222')
    //   return state.typeState
    // }
    typeState:state => state.typeState
  },
  modules: {
    // 模块

  }
})
