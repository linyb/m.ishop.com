<template>
  <div class="u-img">
    <img
      v-if="lazy && imgSrc"
      src="../../assets/img/load.png"
      :data-src="imgSrc"
      :alt="alt"
      class="load-img"
      @error="loadError">
    <img v-if="!lazy && imgSrc" :src="imgSrc" :alt='alt' @error="loadError">
    <svg v-if="!lazy && !imgSrc" class="u-not-img">
      <use xlink:href="#icon-image"></use>
    </svg>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    props: {
      num: '',
      ver: '',
      alt: '',
      src: '',
      lazy: false
    },
    data() {
      return {
        imgSrc: ''
      }
    },
    methods: {
      loadError() {
        const bakUrl = '//p01.class.bond520.com'
        if (this.imgSrc.indexOf(bakUrl) < 0) {
          this.imgSrc = this.imgSrc.replace(/\/\/pic\d+.class.bond520.(com|me)/, bakUrl)
        }
      }
    },
    created() {
      this.imgSrc = this.$getImgUrl(this.src, this.num, this.ver)
      if (this.lazy) {
        this.$tool.loadImg()
      }
    },
    watch: {
      src() {
        this.imgSrc = this.$getImgUrl(this.src, this.num, this.ver)
      }
    }
  }
</script>
<style rel="stylesheet/scss" type="text/css" lang="scss">
  @import "../../assets/sass/base/config.scss";

  .u-img {
    display: inline-block;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .u-not-img {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -30px 0 0 -30px;
    width: 60px;
    height: 60px;
    fill: $c-f;
  }
</style>
