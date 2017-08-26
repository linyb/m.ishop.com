<template>
  <div id="p-goods-detail">
    <template>
      <div class="m-detail">
        <v-icon name="back" class="icon"></v-icon>
        <img src="" alt="" class="pic">
        <div class="desc">
          <h3 class="name">维维豆奶罐装300ML</h3>
          <small>月售5份</small>
          <p class="sale"><span class="square">0.2折</span><span class="tip">每单限1份优惠，超出的份数按原价计算</span></p>
          <div class="price">
            <small class="yen">&yen;</small>
            <span class="yuan">0.1</span><span class="line">&yen;5</span>
            <button class="btn">加入购物车</button>
          </div>
        </div>
      </div>
      <div class="m-evaluate">
        <!--<p class="empty">暂无评价</p>-->
        <span class="name">商品评价</span>
        <span>好评率（100%）</span>
        <router-link :to="{path: '/goods/evaluate'}">
          <span class="next">2条评价
          <v-icon name="next" class="icon"></v-icon>
        </span>
        </router-link>
      </div>
    </template>
  </div>
</template>

<script>
  import GoodsMenu from '../../components/goods/menu'
  import GoodsCard from '../../components/goods/card'

  export default {
    name: 'menu',
    components: {
      GoodsMenu, GoodsCard
    }
  }
</script>
<style rel="stylesheet/scss" type="text/css" lang="scss">
  @import "../../assets/sass/base/config";

  #p-goods-detail {
    background-color: $c-article-card-bg;
    min-height: 100%;
    > .m-detail {
      background-color: $c-f-white;
      position: relative;
      .icon {
        position: absolute;
        left: $w-grid-space;
        top: $w-grid-space;
        fill: $c-f-white;
        height: $w-grid-space;
        width: $w-grid-space;
      }
      .pic {
        display: block;
        width: 100%;
        height: 350px;
        background-color: #eee;
      }
      .desc {
        margin-bottom: $w-grid-space/2;
        padding: $w-grid-space/2 $w-grid-l-space/2;
        .name {
          font-weight: bold;
        }
        .sale {
          font-size: 12px;
          margin: $w-grid-space/2 0;
          .square {
            color: $c-f-white;
            padding: 2px 3px;
            border-radius: 2px;
            background-color: $c-error;
          }
          .tip {
            padding: 1px 3px;
            border-top-right-radius: 3px;
            border-top: 1px solid $c-error;
            border-right: 1px solid $c-error;
            color: $c-error;
          }
        }
        .price {
          position: relative;
          .yen {
            color: $c-error;
          }
          .yuan {
            font-size: 16px;
            color: $c-error;
          }
          .line {
            margin-left: $w-grid-space/4;
            text-decoration: line-through;
            color: $c-f-aid;
          }
          .btn {
            position: absolute;
            right: 0;
            height: 25px;
            line-height: 25px;
            padding: 0 $w-grid-l-space/2;
            border-radius: 25px;
            color: $c-f-white;
            border: none;
            background-color: $c-main;
          }
        }
      }
    }
    > .m-evaluate {
      position: relative;
      font-size: 14px;
      color: $c-f-aid;
      height:55px;
      line-height:55px;
      background-color: $c-f-white;
      padding-left: $w-grid-l-space/2;
      .empty {
        font-size: 15px;
      }
      .name {
        font-size: 16px;
      }
      .next {
        position: absolute;
        right: $w-grid-l-space/2;
        .icon {
          fill: $c-f-aid;
        }
      }
    }
  }
</style>
