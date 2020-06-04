import Todo from '@/domains/todo';
import { Module, ActionTree } from 'vuex';


const state: Array<Todo> = [{ name: "almoçar", detail: "comida" },
{ name: "jantar", detail: "lanche" }];

const getters = {
  findTodos: (): Array<Todo> => {
    return state;
  }
}

const mutations = {
  saveTodo: (state: Array<Todo>, payload: Todo): Todo => {
    state.push(payload)
    return payload
  }
};

const actions: ActionTree<Array<Todo>, Todo> = {
  saveTodo: ({ commit }, payload: Todo) => {
    commit('saveTodo', payload)
    return payload
  }
}

const TodoStore: Module<Array<Todo>, Todo> = {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};

export default TodoStore;