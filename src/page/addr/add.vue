<template>
  <div id="p-addr-add">
    <x-header>新增地址</x-header>
    <div class="g-add-zone">
      <div class="line">
        <span class="label">联系人</span>
        <div class="">
          <input type="text" class="input">
          <p>
            <span class="sex">先生</span>
            <span class="sex">女士</span>
          </p>
        </div>
      </div>
      <div class="line">
        <span class="label">电话</span>
        <div>
          <input type="tel" class="input">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { XHeader } from 'vux'

  export default {
    name: 'menu',
    components: {
      XHeader
    },
    data() {
      return {

      }
    }
  }
</script>
<style rel="stylesheet/scss" type="text/css" lang="scss">
  @import "../../assets/sass/base/config";

  #p-addr-add {

  }
</style>
