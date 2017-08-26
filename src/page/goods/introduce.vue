<template>
  <div id="p-goods-introduce">
    <template>
      <div class="m-top">
        <v-icon name="back" class="icon"></v-icon>
      </div>
      <div class="m-info">
        <img src="" alt="" class="pic">
        <h3 class="name">E点便利（新世界中心店）</h3>
        <div>月售102单</div>
        <p class="notice">
          [公告] 亲爱的顾客你们好，本店在周末闲暇店铺是9：00-19：00，但是。。。。。。。。。。。。。。。。。
        </p>
      </div>
      <div class="m-main">
        <div class="block">
          <h3 class="name">配送信息</h3>
          <p>
            <span class="send">蜂鸟转送</span>
            约33分钟送达，距离1。0KM
          </p>
          <p class="bottom">配送费&yen;6</p>
        </div>
        <div class="block">
          <h3 class="name">活动与服务</h3>
          <ul class="favour">
            <li>
              <span class="square green">首</span>
              <p class="text">新用户下单立减20元（不与其他活动同享）新用户下单立减20元（不与其他活动同享)</p>
            </li>
            <li>
              <span class="square">折</span>
              <p class="text">新用户下单立减20元</p>
            </li>
            <li>
              <span class="square orange">特</span>
              <p class="text">新用户下单立减20元</p>
            </li>
          </ul>
        </div>
        <div class="block">
          <h3 class="name">商家评价</h3><span class="score">4.7分</span>
        </div>
        <div class="block">
          <h3 class="name">商家信息</h3>
          <p class="item">
            暂无简介
          </p>
          <p class="item">
            <span class="key">品类</span>
            <span class="value">超市</span>
          </p>
          <p class="item">
            <span class="key">商家电话</span>
            <span class="value">133899*******</span>
          </p>
          <p class="item">
            <span class="key">地址</span>
            <span class="value">深圳市福田区莲花街道一天路哈哈哈哈哈哈啊叫啊叫啊啊叫啊</span>
          </p>
          <p class="item">
            <span class="key">营业时间</span>
            <span class="value">06：00／20：00</span>
          </p>
        </div>
        <div class="block">
          <h3 class="name">营业资质</h3>
          <v-icon name="next" class="next"></v-icon>
        </div>
        <div class="block">
          <h3 class="name">举报商家</h3>
          <v-icon name="next" class="next"></v-icon>
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
    }
  }
</script>
<style rel="stylesheet/scss" type="text/css" lang="scss">
  @import "../../assets/sass/base/config";

  #p-goods-introduce {
    background-color: $c-article-card-bg;
    min-height: 100%;
    > .m-top {
      height: 60px;
      background-color: rgba(137, 161, 163, 0.8);
      position: relative;
      z-index: 2;
      .icon {
        position: absolute;
        left: $w-grid-space;
        top: $w-grid-space;
        fill: $c-f-white;
        height: $w-grid-space;
        width: $w-grid-space;
      }
    }
    > .m-info {
      background-color: $c-f-white;
      position: relative;
      text-align: center;
      padding: 0 $w-grid-l-space/2 $w-grid-l-space/2 $w-grid-l-space/2;
      box-shadow: 0 1px 1px $c-gray;
      .name {
        font-weight: bold;
        margin: $w-grid-space/2 0;
      }
      .pic {
        display: block;
        position: relative;
        z-index: 3;
        background-color: $c-gray;
        margin: 0 auto;
        margin-top: -40px;
        height: 80px;
        width: 80px;
        border-radius: 5px;
        box-shadow: 0 0 2px $c-gray;
      }
      .notice {
        margin-top: $w-grid-space/2;
        padding-top: $w-grid-space/2;
        border-top: 1px solid $c-gray;
      }
    }
    > .m-main {
      font-size: 14px;
      padding: $w-grid-space/2;
      .block {
        position: relative;
        background-color: $c-f-white;
        padding-left: $w-grid-space/2;
        border-bottom: 1px solid #dbdbdb;
        margin-bottom: $w-grid-space/2;
        .bottom {
          margin: $w-grid-space/2 0;
        }
        .send {
          color: $c-f-white;
          padding: 2px 5px;
          background-color: $c-main;
          border-radius: 2px;
        }
        .favour {
          position: relative;
          li {
            .square {
              position: absolute;
              left: 0;
            }
            margin-bottom: $w-grid-space/2;
            .text {
              display: block;
              margin-left: $w-grid-l-space;
            }
          }
        }
        .square {
          color: $c-f-white;
          padding: 2px;
          font-size: 13px;
          line-height: 1.2;
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
        .name {
          font-weight: bold;
          line-height: 46px;
        }
        .next, .score{
          position: absolute;
          right: $w-grid-space/2;
          top: 0;
          bottom: 0;
        }
        .next {
          fill: #9a9a9a;
          margin: auto;
        }
        .score {
          line-height:46px;
        }
        .item {
          display: flex;
          color: #787878;
          padding: $w-grid-l-space/2 0;
          border-bottom: 1px solid #fafafa;
          .key {
            width: 20%;
            color: $c-f-title;
          }
          .value {
            width: 80%;
            text-align: right;
            padding-right: $w-grid-space/2;
          }
        }
      }
    }
  }
</style>
