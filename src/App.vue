<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/github-repositories">Github Repositories</router-link>
    </div>
    <router-view />
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
