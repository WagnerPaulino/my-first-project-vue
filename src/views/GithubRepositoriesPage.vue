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
    <div class="column">
      <GithubRepositoriesList :repos="repos" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "../store/index";
import GithubRepositoriesList from "@/components/GithubRepositoriesList.vue";
import GithubRepositorie from "../domains/github-repositories";

@Component({
  components: {
    GithubRepositoriesList,
  },
})
export default class GithubRepositoriesPage extends Vue {
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