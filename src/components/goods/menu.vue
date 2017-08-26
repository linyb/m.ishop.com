<template>
  <div class="m-menu">
    <ul class="pMenu">
      <li>美食专区</li>
      <li class="active">雪糕冰淇淋</li>
      <li>水饮料</li>
      <li>美食专区</li>
      <li>美食专区</li>
    </ul>
  </div>
</template>

<style rel="stylesheet/scss" type="text/css" lang="scss">
  @import "../../assets/sass/base/config";

  .m-menu {
    position: absolute;
    left:0;
    width: 20%;
    .pMenu {
      font-size: 13px;
      color: #6b6b6b;
      >li {
        background-color: $c-article-card-bg;
        padding: $w-grid-l-space/2 $w-grid-space/2;
        border-bottom: 1px solid #e1e1e1;
        &.active {
          background-color: $c-f-white;
          border-left: 5px solid $c-main;
        }
        &:hover {
          background-color: $c-f-white;
          border-left: 5px solid $c-main;
        }
      }
    }
  }
</style>
