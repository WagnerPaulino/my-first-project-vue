import { createStore } from 'vuex'
import TodoStore from './todo/todo-store'
import GithubRepositorieStore from './github-repositories/github-repositories-store'

const store = createStore({
  modules: {
    todoStore: TodoStore,
    githubRepositorieStore: GithubRepositorieStore
  }
})

export default store;