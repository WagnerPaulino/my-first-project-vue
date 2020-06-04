import Todo from '@/domains/todo';
import { ActionTree, StoreOptions } from 'vuex';


const state: Array<Todo> = [];

const getters = {
  findTodos: (): Array<Todo> => {
    return state;
  }
}

const mutations = {
  saveTodo: (state: Array<Todo>, payload: Todo): Todo => {
    state.push(payload)
    return payload
  },
  findTodos: (state: Array<Todo>, payload: Array<Todo>): void => {
    state.splice(0, state.length)
    state.push(...payload);
  }
};

const actions: ActionTree<Array<Todo>, Array<Todo>> = {
  saveTodo: ({ commit }, payload: Todo) => {
    commit('saveTodo', payload)
    return payload
  },
  findTodos: ({ commit }) => {
    return new Promise(resolve => {
      setTimeout(() => {
        commit("findTodos", [{ name: "almoçar", detail: "comida" },
        { name: "jantar", detail: "lanche" }]);
        resolve();
      }, 2000);
    });
  }
}

const TodoStore: StoreOptions<Array<Todo>> = {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};

export default TodoStore;