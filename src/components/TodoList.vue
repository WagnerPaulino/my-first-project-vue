<template>
  <div class="todo">
    <ol>
      <li v-for="(todo, index) in todos" :key="index">
        <label>{{ todo.name }}</label>
        <span>{{ todo.detail }}</span>
        <button type="button" v-on:click="deleteTodo(index)">Feito!</button>
      </li>
    </ol>
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