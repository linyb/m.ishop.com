<template>
  <div id="p-goods-addr">
    <x-header>收货地址</x-header>
    <div class="g-addr-main">
      <!--暂无收货地址-->
      <template v-if="addrData">
        <div class="m-empty">
          <h4>没有收货地址</h4>
          <small>点击下方按钮新增</small>
        </div>
      </template>
      <!--收货列表-->
      <template v-else>
        <ul class="m-addr-list">
          <li class="item">
            <div class="addr"><span class="label">家</span>
              <h4 class="name f-line-ell">深圳市福田区上沙东村</h4></div>
            <div class="info">
              <span>linyibin</span>
              <span>女士</span>
              <span>15396080077</span>
            </div>
            <v-icon name="edit" class="icon m"></v-icon>
          </li>
          <li class="item">
            <div class="addr"><span class="label">家</span>
              <h4 class="name f-line-ell">深圳市福田区上沙东村</h4></div>
            <div class="info">
              <span>linyibin</span>
              <span>女士</span>
              <span>15396080077</span>
            </div>
            <v-icon name="edit" class="icon m"></v-icon>
          </li>
          <li class="item">
            <div class="addr"><span class="label">公司</span>
              <h4 class="name f-line-ell">深圳市福田区上沙东村深圳市福田区上沙东村深圳市福田区上沙东村深圳市福田区上沙东村</h4></div>
            <div class="info">
              <span>linyibin</span>
              <span>女士</span>
              <span>15396080077</span>
            </div>
            <v-icon name="edit" class="icon m"></v-icon>
          </li>
          <li class="item">
            <div class="addr"><span class="label">公司</span>
              <h4 class="name f-line-ell">深圳市福田区上沙东村深圳市福田区上沙东村深圳市福田区上沙东村深圳市福田区上沙东村</h4></div>
            <div class="info">
              <span>linyibin</span>
              <span>女士</span>
              <span>15396080077</span>
            </div>
            <v-icon name="edit" class="icon m"></v-icon>
          </li><li class="item">
          <div class="addr"><span class="label">公司</span>
            <h4 class="name f-line-ell">深圳市福田区上沙东村深圳市福田区上沙东村深圳市福田区上沙东村深圳市福田区上沙东村</h4></div>
          <div class="info">
            <span>linyibin</span>
            <span>女士</span>
            <span>15396080077</span>
          </div>
          <v-icon name="edit" class="icon m"></v-icon>
        </li><li class="item">
          <div class="addr"><span class="label">公司</span>
            <h4 class="name f-line-ell">深圳市福田区上沙东村深圳市福田区上沙东村深圳市福田区上沙东村深圳市福田区上沙东村</h4></div>
          <div class="info">
            <span>linyibin</span>
            <span>女士</span>
            <span>15396080077</span>
          </div>
          <v-icon name="edit" class="icon m"></v-icon>
        </li><li class="item">
          <div class="addr"><span class="label">公司</span>
            <h4 class="name f-line-ell">深圳市福田区上沙东村深圳市福田区上沙东村深圳市福田区上沙东村深圳市福田区上沙东村</h4></div>
          <div class="info">
            <span>linyibin</span>
            <span>女士</span>
            <span>15396080077</span>
          </div>
          <v-icon name="edit" class="icon m"></v-icon>
        </li><li class="item">
          <div class="addr"><span class="label">公司</span>
            <h4 class="name f-line-ell">深圳市福田区上沙东村深圳市福田区上沙东村深圳市福田区上沙东村深圳市福田区上沙东村</h4></div>
          <div class="info">
            <span>linyibin</span>
            <span>女士</span>
            <span>15396080077</span>
          </div>
          <v-icon name="edit" class="icon m"></v-icon>
        </li><li class="item">
          <div class="addr"><span class="label">公司</span>
            <h4 class="name f-line-ell">深圳市福田区上沙东村深圳市福田区上沙东村深圳市福田区上沙东村深圳市福田区上沙东村</h4></div>
          <div class="info">
            <span>linyibin</span>
            <span>女士</span>
            <span>15396080077</span>
          </div>
          <v-icon name="edit" class="icon m"></v-icon>
        </li><li class="item">
          <div class="addr"><span class="label">公司</span>
            <h4 class="name f-line-ell">深圳市福田区上沙东村深圳市福田区上沙东村深圳市福田区上沙东村深圳市福田区上沙东村</h4></div>
          <div class="info">
            <span>linyibin</span>
            <span>女士</span>
            <span>15396080077</span>
          </div>
          <v-icon name="edit" class="icon m"></v-icon>
        </li>
        </ul>
      </template>
    </div>
    <div class="g-footer">
      <router-link :to="{path: '/addr/add'}" class="btn">
        <v-icon name="add" class="icon l"></v-icon>
        新增地址
      </router-link>
    </div>
  </div>
</template>

<script>
  import { XHeader } from 'vux'

  export default {
    name: 'menu',
    components: {
      XHeader
    },
    data() {
      return {
        addrData: ''
      }
    }
  }
</script>
<style rel="stylesheet/scss" type="text/css" lang="scss">
  @import "../../assets/sass/base/config";

  #p-goods-addr {
    height: 100%;
    position: relative;
    overflow-y: hidden;
    background-color: $c-article-card-bg;
    > .g-addr-main {
      height: 100%;
      padding-bottom: 50px;
      overflow-y: auto;
      .m-empty {
        position: absolute;
        top: 200px;
        width: 100%;
        text-align: center;
      }
      .m-addr-list {
        margin: $w-grid-l-space/2 0 60px;
        .item {
          position: relative;
          padding: $w-grid-space/2;
          margin-bottom: $w-grid-space/2;
          background-color: $c-f-white;
          .addr {
            display: flex;
            .label {
              height: 20px;
              padding: 0 3px;
              margin-right: 5px;
              line-height: 20px;
              color: $c-list-bg-left;
              border: 1px solid $c-list-bg-left;
              border-radius: 2px;
            }
            .name {
              max-width: 85%;
            }
          }
          .icon {
            position: absolute;
            right: $w-grid-space/2;
            top: 0;
            bottom: 0;
            margin: auto;
          }
        }
      }
    }
    > .g-footer {
      position: absolute;
      width: 100%;
      bottom: 0;
      height: 50px;
      border-top: 1px solid $c-rim-gray;
      background-color: $c-f-white;
      .btn {
        display: block;
        width: 100%;
        text-align: center;
        line-height: 50px;
        font-size: 16px;
        color: $c-main;
      }
      .icon {
        fill: $c-main;
      }
    }
  }
</style>
