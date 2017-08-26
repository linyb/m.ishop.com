<template>
  <div class="u-error-tips">
    <svg class="icon">
      <use :xlink:href="'#'+icon"></use>
    </svg>
    <span v-html="errorMsg"></span>
  </div>
</template>

<script type="es6">
  export default {
    props: {
      icon: {
        type: String,
        'default': 'icon-notification'
      },
      errorMsg: String
    }
  }
</script>

<style type="text/css" lang="scss">
  @import "../../../assets/sass/base/config";

  .u-error-tips {
    color: $c-error;
    margin-bottom: 10px;
    line-height: 1em;

    & > .icon {
      display: inline-block;
      vertical-align: middle;
      width: 1em;
      height: 1em;
      stroke-width: 0;
      stroke: currentColor;
      fill: currentColor;
    }

    a {
      text-decoration: underline;
    }
  }
</style>
