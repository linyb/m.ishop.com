<template>
  <svg class="svg-icon" :class="[size]">
    <use :xlink:href="'#icon-'+name"></use>
  </svg>
</template>
<script type="text/ecmascript-6">
  export default{
    props: {
      name: String,
      size: {
        type: String,
        default() {
          return 'm'
        }
      }
    },
  }
</script>
<style rel="stylesheet/scss" type="text/css" lang="scss">
  @import "../../assets/sass/base/config.scss";

  .svg-icon {
    display: inline-block;
    vertical-align: middle;
    margin-top: -2px;
    fill: $c-f;
    &.s {
      width: $h-s/2;
      height: $h-s/2;
    }
    &.m {
      width: $h-m/2;
      height: $h-m/2;
    }
    &.l {
      width: $h-l/2;
      height: $h-l/2;
    }
    &.xl {
      width: $h-xl/2;
      height: $h-xl/2;
    }
  }
</style>

