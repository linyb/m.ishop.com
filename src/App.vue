<template>
  <div id="app">
    <icon-svg id="icon-list"></icon-svg>
    <router-view></router-view>
  </div>
</template>

<script>
  import { ViewBox, Tabbar, TabbarItem, XHeader, Loading } from 'vux'
  import IconSvg from './components/_unit/icon-svg'

  export default {
    name: 'app',
    components: { ViewBox, IconSvg, Tabbar, TabbarItem, XHeader, Loading },
  }
</script>

<style rel="stylesheet/scss" type="text/css" lang="scss">
  @import "./assets/sass/base";

  #app {
    height: 100%;
  }
</style>
