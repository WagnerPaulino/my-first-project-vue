<template>
  <div>
    <q-list bordered>
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
import { Component, Prop, Vue } from "vue-property-decorator";
import GithubRepositorie from "../domains/github-repositories";

@Component
export default class GithubRepositoriesList extends Vue {
  @Prop()
  private repos?: Array<GithubRepositorie>;
}
</script>