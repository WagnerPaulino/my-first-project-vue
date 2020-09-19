<template>
  <div class="column content-center">
    <q-list bordered>
      <q-item v-for="(todo, index) in todos" :key="index">
        <q-item-section>
          <q-item-label>{{ todo.name }}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ todo.detail }}</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-btn type="button" label="Feito!" v-on:click="deleteTodo(index)" />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Todo from "../domains/todo";
import store from "../store";

@Component
export default class TodoList extends Vue {
  @Prop()
  private todos?: Array<Todo>;

  deleteTodo(index: number): void {
    store.dispatch("deleteTodo", index);
  }
}
</script>