<template>
  <div>
    <q-form
      autocomplete="off"
      class="column justify-center content-center"
      @submit="save"
      @reset="onReset"
    >
      <q-input
        label="Nome"
        v-model="todo.name"
        lazy-rules
        :rules="[val => val !== undefined && val !== null && val !== '' || 'Digite o nome']"
      />
      <q-input label="Details" type="textarea" v-model="todo.detail"></q-input>
      <q-btn label="Submit" type="submit" color="primary" />
    </q-form>
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

  save(): void {
    store.dispatch("saveTodo", this.todo);
    this.todo = new Todo();
  }

  onReset() {
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