<template>
  <h1>Portfolio Reiji Kobayashi</h1>

  <Menubar :model="menuItems" />

  <router-view></router-view>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          to: '/'
        },
        {
          label: 'Profile',
          icon: 'pi pi-fw pi-user',
          to: '/profile'
        },
        {
          label: 'Research',
          icon: 'pi pi-fw pi-search',
          to: '/research'
        },
        {
          label: 'History',
          icon: 'pi pi-fw pi-history',
          to: '/history'
        }
      ]
    }
  }
}
</script>
