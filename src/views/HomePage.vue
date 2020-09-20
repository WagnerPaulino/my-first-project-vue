<template>
  <div>
    <div class="row justify-center">
      <div class="col-6">
        <q-dialog v-model="edit" persistent>
          <q-card style="min-width: 350px">
            <q-card-section>
              <div class="text-h6">Novo Todo</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <TodoEdit v-on:finish="closeTodoEditDialog()" />
            </q-card-section>
          </q-card>
        </q-dialog>
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-6">
        <div class="col-2">
          <q-btn label="Novo Todo" type="button" color="primary" v-on:click="openTodoEditDialog()" />
        </div>
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
  private edit: boolean;

  constructor() {
    super();
    this.edit = false;
    store.dispatch("findTodos");
  }

  openTodoEditDialog() {
    this.edit = true;
  }

  closeTodoEditDialog() {
    this.edit = false;
  }
}
</script>
<style scoped>
</style>