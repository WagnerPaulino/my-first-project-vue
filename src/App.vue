<template>
  <div id="app">
    <q-layout view="hHh lpR fFf">
      <q-header elevated class="bg-primary text-white" height-hint="98">
        <q-toolbar>
          <q-toolbar-title>
            <q-avatar>
              <!-- <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg"> -->
            </q-avatar>First App
          </q-toolbar-title>
        </q-toolbar>

        <q-tabs align="left">
          <q-route-tab to="/" label="Todo list" />
          <q-route-tab to="/github-repositories" label="Github Repositories" />
        </q-tabs>
      </q-header>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<style lang="scss">
#nav {
  display: flex;
  flex-direction: row;
  justify-content: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
