<template>
  <div class="todo">
    <ol>
      <li v-for="(todo, index) in todos" :key="index">
        <label>{{ todo.name }}</label>
        <span>{{ todo.detail }}</span>
      </li>
    </ol>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Todo from "../domains/todo";

@Component
export default class TodoList extends Vue {
  @Prop()
  private todos?: Array<Todo>;
}
</script>