import Vue from 'vue'
import Vuex from 'vuex'
import TodoStore from './todo-store'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    TodoStore
  }
})

export default store;