<template>
  <div id="p-goods-list">
    <template>
      <div class="m-head">
        <img src="" alt="" class="pic">
        <div class="info">
          <p class="name f-line-ell">E点便利（新视界中心点）
            <v-icon name="next" class="icon"></v-icon>
          </p>
          <p class="f-line-ell">亲爱的顾客你们好，本店在周末线下店铺是9：00开业，敬请悉知！！！！！！！</p>
          <small class="send">蜂鸟配送&sdot;约33分钟</small>
        </div>
      </div>
      <div class="m-favour">
        <ul class="favour">
          <li>
            <p class="tip f-line-ell"><em class="square">减</em>在线支付满39减3，满59减4，满68减5，满99减7，，，，，，，，，，</p>
            <span class="act" @click="showFavour = !showFavour">13个活动 <v-icon name="bottom"
                                                                              :class="['icon',showFavour?'up': '']"></v-icon></span>
          </li>
          <transition-group name="fade">
            <li v-if="showFavour" :key="1">
              <p class="f-line-ell">
                <span class="square green">首</span>新用户下单立减20元（不与其他活动同享）新用户下单立减20元（不与其他活动同享)
              </p>
            </li>
            <li v-if="showFavour" :key="2">
              <p class="f-line-ell">
                <span class="square">折</span>饮料8.8折（不与其他活动同享）
              </p>
            </li>
            <li v-if="showFavour" :key="3">
              <p class="f-line-ell">
                <span class="square orange">特</span>休闲零食5折
              </p>
            </li>
          </transition-group>
        </ul>
      </div>
      <div class="m-body">
        <div class="search">
          <v-icon name="search" class="icon l"></v-icon>
          <input type="text" placeholder="搜索店内商品，共有666件好物">
        </div>
        <template>
          <goods-menu></goods-menu>
        </template>
        <template>
          <goods-card></goods-card>
        </template>
      </div>
      <div class="m-footer">
        <div class="cricle">
          <v-icon name="cart" class="icon"></v-icon>
        </div>
        <div class="left">
          <p class="price">&yen;7/未选购商品</p>
          <small>另需配送费6元</small>
        </div>
        <div class="right">
          还差&yen;13起送
        </div>
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
    },
    data() {
      return {
        showFavour: false
      }
    }
  }
</script>
<style rel="stylesheet/scss" type="text/css" lang="scss">
  @import "../../assets/sass/base/config";

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  #p-goods-list {
    position: relative;
    padding-bottom: 50px;
    > .m-head {
      height: 90px;
      background-color: rgba(137, 161, 163, 0.8);
      color: $c-f-white;
      > .pic {
        height: 90px;
        width: 90px;
        max-width: 24%;
        background-color: #fff;
        position: absolute;
        top: $w-grid-space;
        left: $w-grid-l-space/2;
        box-shadow: 2px 2px 2px $c-f-gray;
      }
      .info {
        padding: 20px 20px 0 120px;
        .name {
          padding-right: 20px;
          font-size: 18px;
        }
        .send {
          color: $c-f-white;
          padding: 2px 5px;
          background-color: $c-main;
          border-radius: 2px;
        }
        .icon {
          fill: $c-f-white;
        }
      }
    }
    > .m-favour {
      color: $c-f-gray;
      padding: 25px 15px 10px 15px;
      box-shadow: 0 1px 1px $c-font-title;
      .favour {
        /*&.heighten {
          height: $w-grid-l-space;
          overflow-y: hidden;
        }*/
        li {
          position: relative;
          line-height: $w-grid-l-space;
        }
      }
      .tip {
        width: 80%;
        padding-right: $w-grid-space/2;
      }
      .square {
        color: $c-f-white;
        padding: 2px;
        font-size: 13px;
        border-radius: 2px;
        margin-right: $w-grid-space/2;
        background-color: $c-f-mark;
        &.green {
          background-color: $c-success;
        }
        &.orange {
          background-color: $c-error;
        }
      }
      .act {
        position: absolute;
        right: 15px;
        top: 0;
        color: #b5b5b5;
        .icon {
          fill: #b5b5b5;
          transition: all .3s;
          &.up {
            transform: rotate(180deg)
          }
        }
      }
    }
    > .m-body {
      position: relative;
      .search {
        padding: $w-grid-space/2 $w-grid-l-space/2;
        position: relative;
        border-bottom: 1px solid #e1e1e1;
        .icon {
          fill: $c-f-gray;
          position: absolute;
          left: 20px;
          top: 17.5px;
        }
        input {
          width: 100%;
          border: 1px solid #ececec;
          padding: $w-grid-l-space/4 $w-grid-l-space;
          border-radius: 3px;
        }
      }
    }
    > .m-footer {
      display: flex;
      height: 50px;
      position: fixed;
      bottom: 0;
      width: 100%;
      max-width: $w-body-max;
      background-color: rgba(0, 0, 0, 0.7);
      .cricle {
        position: absolute;
        bottom: $w-grid-space/2;
        left: $w-grid-space/2;
        height: 55px;
        width: 55px;
        border-radius: 100%;
        background-color: $c-f-title;
        line-height: 55px;
        text-align: center;
        .icon {
          fill: $c-rim-black;
          height: $w-grid-l-space;
          width: $w-grid-l-space;
        }
      }
      .left {
        padding: 5px 0 0 75px;
        .price {
          font-size: 14px;
          color: $c-gray;
        }
      }
      .right {
        position: absolute;
        right: 0;
        line-height: 50px;
        padding: 0 $w-grid-l-space/2;
        font-size: 15px;
        background-color: #505457;
        color: #a6aaad;
      }
    }
  }
</style>
