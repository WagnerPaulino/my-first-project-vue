<template>
  <div>
    <div class="row justify-center">
      <div class="col-6">
        <TodoEdit />
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-6">
        <TodoList :todos="todos" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TodoList from "@/components/TodoList.vue";
import TodoEdit from "@/components/TodoEdit.vue";
import Todo from "../domains/todo";
import store from "../store/index";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    TodoList,
    TodoEdit,
  },
})
export default class HomePage extends Vue {
  private todos: Array<Todo> = store.getters.findTodos;

  constructor() {
    super();
    store.dispatch("findTodos");
  }
}
</script>
<style scoped>
</style>