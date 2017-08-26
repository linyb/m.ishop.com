<template>
  <div class="m-list">
    <p class="type">美食社区</p>
    <ul>
      <li>
        <img src="" alt="" class="pic">
        <div class="info">
          <h3>[百草味]多味花生</h3>
          <small class="desc">还原经典，依旧是童年的味道</small>
          <p class="sale">月售1份 好评率100%</p>
          <p>
            <span>0.2折</span>
          </p>
          <p class="bottom">
            <span class="price">&yen;7</span>
            <small class="o-price">12.00</small>
            <v-icon name="add" class="icon"></v-icon>
          </p>
        </div>
      </li>
      <li>
        <img src="" alt="" class="pic">
        <div class="info">
          <h3>车仔车仔面车仔车仔面车仔车仔面车仔面车仔</h3>
          <p class="bottom">
            <span class="price">&yen;7</span>
            <v-icon name="add" class="icon"></v-icon>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style rel="stylesheet/scss" type="text/css" lang="scss">
  @import "../../assets/sass/base/config";

  .m-list {
    padding-left: calc(20% + 10px);
    > .type {
      padding: $w-grid-space/2;
      font-size: 15px;
      color: #888;
    }
    > ul {
      li {
        display: flex;
        padding: $w-grid-space/2 0;
        border-top: 1px solid $c-article-card-bg;
        .pic {
          height: 95px;
          width: 95px;
          border-radius: 5px;
          background-color: $c-gap-gray;
        }
        .info {
          position: relative;
          width: 75%;
          padding-bottom: $w-grid-space+5;
          margin-left: $w-grid-space/2;
          .sale {
            color: #c1c1c1;
            margin-top: $w-grid-space/4;
          }
          .desc {
            color: $c-gray;
          }
          .bottom {
            position: absolute;
            bottom: 0;
            width: 100%;
            .icon {
              height: 25px;
              width: 25px;
              fill: $c-main;
              position: absolute;
              right: $w-grid-space/2;
            }
            .price {
              font-size: 16px;
              color: $c-f-warn;
            }
            .o-price {
              margin-left: 3px;
              text-decoration: line-through;
              color: $c-f-gray;
            }
          }
        }
      }
    }
  }
</style>
