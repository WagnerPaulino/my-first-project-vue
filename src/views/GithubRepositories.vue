<template>
  <div class="column q-pl-sm q-pr-sm">
    <div class="row items-center q-pt-sm q-pb-sm">
      <div class="col-6">
        <q-input label="Repo Name" v-model="repoName" />
      </div>
      <div>
        <q-btn label="Buscar" v-on:click="buscarRepoName()" />
      </div>
    </div>
    <q-list bordered class="column">
      <q-item v-for="(item, index) in repos" :key="index">
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