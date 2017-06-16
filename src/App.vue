<template>
  <div id="app">
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <router-view class="router-view"></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from './components/public/header'
import vSidebar from './components/public/sidebar'
import vFooter from './components/public/footer'

export default {
  name: 'app',
  components: {
    vHeader,
    vSidebar,
    vFooter
  }
}
</script>

<style lang="scss">
@import './assets/style/app'
</style>
