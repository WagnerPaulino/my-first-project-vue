<template>
  <div style="display: flex; flex-direction: column;">
    <div style="display: flex; flex-direction: row;">
      <input type="text" placeholder="Repo Name" v-model="repoName" />
      <button v-on:click="buscarRepoName()">Buscar</button>
    </div>
    <q-list bordered>
      <q-item v-ripple v-for="(item, index) in repos" :key="index">
        <q-item-section>
          <q-item-label>{{item.name}}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{item.full_name}}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "../store/index";
import GithubRepositorie from "../domains/github-repositories";

@Component({
  components: {
    GithubRepositories,
  },
})
export default class GithubRepositories extends Vue {
  private repos: Array<GithubRepositorie> =
    store.getters.findGithubRepositories;

  public repoName: string;

  constructor() {
    super();
    store.dispatch("findAllRepos");
    this.repoName = "";
  }

  buscarRepoName(): void {
    store.dispatch("findAllRepos", this.repoName);
  }
}
</script>