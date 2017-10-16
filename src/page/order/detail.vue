<template>
  <div id="p-goods-order">
    <div class="g-goods-order">
      <x-header>订单详情</x-header>
      <div class="m-addr">
        <router-link :to="{path: '/order/addr'}" class="addr">
          <v-icon name="add_2" class="icon l"></v-icon>
          添加收货地址
        </router-link>
      </div>
      <div class="m-order-detail">
        <div class="m-send">
          <h3 class="time">尽快送达[预计 19：30]</h3>
          <div>
            <span class="send">蜂鸟专送</span>
            <span class="label">准时达</span>
            <span class="over">超10分钟享赔付</span>
          </div>
          <v-icon name="next" class="icon"></v-icon>
        </div>
        <div class="m-store">
          <h3 class="title f-line-ell">美宜佳（下沙店）</h3>
          <div class="u-goods">
            <div class="line">
              <p class="name f-line-ell">海之言</p>
              <p class="right"><span>X1</span>
                <span class="money">&yen;4.5</span></p>
            </div>
            <div class="line">
              <p class="name f-line-ell">海之海之言海之言海之言海之言海之言海之言海之言海之言言</p>
              <p class="right"><span>X1</span>
                <span class="money">&yen;4.5</span></p>
            </div>
            <div class="line">
              <p class="name">配送费</p>
              <p class="right">
                <span class="money">&yen;4.5</span></p>
            </div>
          </div>
          <div class="u-price">
            <p>优惠说明
              <v-icon name="help" class="icon"></v-icon>
            </p>
            <h3 class="price">小计：33.5</h3>
          </div>
        </div>
        <div class="m-pay">
          <h3 class="name">在线支付</h3>
          <h3 class="name">口味偏好</h3>
          <textarea cols="30" rows="4" class="text" placeholder="请输入备注内容（选填）"></textarea>
        </div>
      </div>
    </div>
    <div class="g-footer">
      <p class="price">&yen;13.5</p>
      <router-link :to="{path: '/order/pay'}" class="btn-pay">去支付</router-link>
    </div>
  </div>
</template>

<script>
  import { XHeader } from 'vux'

  export default {
    name: 'menu',
    components: {
      XHeader
    }
  }
</script>
<style rel="stylesheet/scss" type="text/css" lang="scss">
  @import "../../assets/sass/base/config";

  #p-goods-order {
    height:100%;
    position: relative;
    overflow-y: hidden;
    background-color: $c-article-card-bg;
    > .g-goods-order {
      height:100%;
      padding-bottom:50px;
      overflow-y: auto;
      > .m-addr {
        padding: $w-grid-l-space 0 $w-grid-space/2;
        background-color: $c-main;
        .addr {
          display: block;
          width: 140px;
          height: 35px;
          line-height: 35px;
          margin: auto;
          font-size: 14px;
          text-align: center;
          border: 1px solid $c-f-white;
          border-radius: 50px;
          color: $c-f-white;
        }
        .icon {
          fill: $c-f-white;
        }
      }
      > .m-order-detail {
        padding: $w-grid-space/2;
        > .m-send {
          position: relative;
          padding: $w-grid-l-space/2;
          background-color: $c-f-white;
          margin-bottom: $w-grid-space/2;
          .time {
            margin-bottom: $w-grid-space/2;
          }
          .send {
            color: #fff;
            padding: 2px 5px;
            background-color: #4092F4;
            border-radius: 2px;
          }
          .label {
            color: $c-main;
            padding: 2px 5px;
            margin: 0 $w-grid-space/4;
            border: 1px solid $c-main;
            border-radius: 2px;
          }
          .over {
            color: $c-main;
          }
          .icon {
            position: absolute;
            right: $w-grid-l-space/2;
            bottom: 0;
            top: 0;
            margin: auto;
          }
        }
        > .m-store {
          padding: $w-grid-l-space/2;
          margin-bottom: $w-grid-space/2;
          background-color: $c-f-white;
          .title {
            position: relative;
            height: 20px;
            line-height: 20px;
            text-align: center;
            &:before, &:after {
              content: '';
              position: absolute;
              top: 10px;
              width: 25%;
              border-top: 1px solid $c-rim-gray;
            }
            &:before {
              left: 0;
            }
            &:after {
              right: 0;
            }
          }
          .u-goods {
            .line {
              display: flex;
              padding: $w-grid-space/2 0;
              font-size: 15px;
              border-bottom: 1px solid $c-rim-gray;
              .name {
                width: 70%;
              }
              .right {
                position: relative;
                width: 30%;
                .money {
                  position: absolute;
                  right: 0;
                }
              }
            }
          }
          .u-price {
            position: relative;
            display: flex;
            padding: $w-grid-space/2 0;
            align-items: center;
            .price {
              position: absolute;
              right: 0;
            }
          }
        }
        > .m-pay {
          padding: 0 $w-grid-l-space/2;
          background-color: $c-f-white;
          .name {
            padding: $w-grid-space/2 0;
            &:first-of-type {
              border-bottom: 1px solid $c-rim-gray;
            }
          }
          .text {
            width: 100%;
          }
        }
      }
    }
    > .g-footer {
      position: absolute;
      bottom: 0;
      height: 50px;
      width: 100%;
      font-size: 18px;
      background-color: rgba(0, 0, 0, .4);
      .price {
        padding: $w-grid-l-space/2;
        color: $c-f-white;
      }
      .btn-pay {
        position: absolute;
        right: 0;
        top: 0;
        width: 130px;
        line-height: 50px;
        text-align: center;
        background-color: $c-main;
        color: $c-f-white;
      }
    }
  }
</style>
