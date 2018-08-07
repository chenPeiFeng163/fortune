import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 首先声明一个状态 state
const state = {
  count: 0,
  storeTodos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
}

// 然后给 actions 注册事件处理函数，当这个函数被触发时，将状态提交到 mutaions中处理
const actions = {
  //increment: ({ commit }) => commit('aincrement',{amount: 5}), // 提交到mutations中处理
  decrement: ({ commit }) => commit('adecrement',{amount: 3}),
  increment: ({ commit }) => {setTimeout(() => {commit('aincrement',{amount: 5})}, 0)}
}
// 更新状态
const mutations = {
  aincrement (state,n) {
    state.count = state.count + n.amount
  },
  adecrement (state,n) {
    state.count = state.count - n.amount
  }
}
// 获取状态信息
const getters = {
}

// 下面这个相当关键了，所有模块，记住是所有，注册才能使用
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})