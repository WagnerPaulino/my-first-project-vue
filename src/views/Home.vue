<template>
  <div>
    <form autocomplete="off" class="column justify-center content-center">
      <input v-model="todo.name" placeholder="Name" />
      <textarea v-model="todo.detail" placeholder="Details"></textarea>
      <button type="button" v-on:click="save(todo)">Submit</button>
    </form>
    <TodoList :todos="todos" />
  </div>
</template>

<script lang="ts">
import TodoList from "@/components/TodoList.vue";
import Todo from "../domains/todo";
import store from "../store/index";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    TodoList,
  },
})
export default class Home extends Vue {
  private todos: Array<Todo> = store.getters.findTodos;

  private todo: Todo = new Todo();

  constructor() {
    super();
    store.dispatch("findTodos");
  }

  save(todo: Todo): void {
    store.dispatch("saveTodo", todo);
    this.todo = new Todo();
  }
}
</script>
<style scoped>
form {
  display: flex;
  flex-direction: column;
  padding: 0 20px 0 20px;
}
</style>