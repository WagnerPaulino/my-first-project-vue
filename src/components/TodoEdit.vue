<template>
  <div>
    <q-form autocomplete="off" @submit="save" @reset="onReset">
      <q-input
        label="Nome"
        v-model="todo.name"
        lazy-rules
        :rules="[val => val !== undefined && val !== null && val !== '' || 'Digite o nome']"
      />
      <q-input label="Details" type="textarea" v-model="todo.detail"></q-input>
      <q-btn label="Submit" type="submit" color="primary" />
      <q-btn label="Fechar" color="primary" type="reset" />
    </q-form>
  </div>
</template>

<script lang="ts">
import Todo from "../domains/todo";
import store from "../store/index";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TodoEdit extends Vue {
  private todo: Todo = new Todo();

  constructor() {
    super();
  }

  save(): void {
    store.dispatch("saveTodo", this.todo);
    this.todo = {};
    this.$emit("finish");
  }

  onReset(): void {
    this.todo = new Todo();
    this.$emit("finish");
  }
}
</script>
<style scoped>
</style>