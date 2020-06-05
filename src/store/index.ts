import Vue from 'vue'
import Vuex from 'vuex'
import TodoStore from './todo/todo-store'
import GithubRepositorieStore from './github-repositories/github-repositories-store'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    todoStore: TodoStore,
    githubRepositorieStore: GithubRepositorieStore
  }
})

export default store;