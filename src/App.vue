<template>
  <h1>Portfolio Reiji Kobayashi</h1>

  <Menubar :model="items" />

  <router-view></router-view>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<script>
  export default {
    data() {
      return {
        items: [
          {
            label:'Home',
            icon:'pi pi-fw pi-home',
            to: '/'
          },
          {
            label:'Research',
            icon:'pi pi-fw pi-search',
            to: '/research'
          },
          {
            label:'History',
            icon:'pi pi-fw pi-history',
            to: '/history'
          }
        ]
      }
    }
  }
</script>
