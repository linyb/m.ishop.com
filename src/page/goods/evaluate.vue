<template>
  <div id="p-goods-evaluate">
    <template>
      <div class="m-top">
        <v-icon name="back" class="icon"></v-icon>
        <h3 class="title">商品评价</h3>
      </div>
      <div class="m-main">
        <ul class="menu">
          <li>全部（4）</li>
          <li class="rec">推荐（4）</li>
          <li class="bad">吐槽（0）</li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>

  export default {
    name: 'evaluate'
  }
</script>
<style rel="stylesheet/scss" type="text/css" lang="scss">
  @import "../../assets/sass/base/config";

  #p-goods-evaluate {
    background-color: $c-article-card-bg;
    min-height: 100%;
    > .m-top {
      height: 60px;
      line-height: 60px;
      position: relative;
      background-color: $c-main;
      .icon {
        position: absolute;
        left: $w-grid-space;
        top: $w-grid-space;
        fill: $c-f-white;
        height: $w-grid-space;
        width: $w-grid-space;
      }
      .title {
        margin-left: 75px;
        color: $c-f-white;
      }
    }
    > .m-main {
      padding-left:$w-grid-space/2;
      background-color: $c-f-white;
      .menu {
        display: flex;
        padding: $w-grid-space/2 0;
        border-bottom: 1px dashed $c-article-card-bg;
        li {
          padding: $w-grid-space/2;
          margin-right:$w-grid-space/2;
          color: $c-f-white;
          background-color: $c-main;
          border-radius: 4px;
          &.rec {
            background-color: #ecf5fc;
            color: #7d8590;
          }
          &.bad {
            background-color: $c-article-card-bg;
            color: #e1e1e1;
          }
        }
      }
    }
  }
</style>
