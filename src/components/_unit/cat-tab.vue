<template>
  <div class="m-cat-tab">
    <tab :line-width="1" :style="{width:itemWidth*catList.length+'px','min-width':'100%'}">
      <tab-item
        v-for="(item, index) in catList"
        :selected="current==item.id"
        :key="index"

        @click.native="toCategory(item.id)">{{item.name}}
      </tab-item>
    </tab>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Tab, TabItem } from 'vux'

  export default{
    props: {
      catList: Array,
      current: String,
      itemWidth: Number
    },
    components: {
      Tab,
      TabItem
    },
    methods: {
      toCategory(id) {
        this.$emit('on-change', id)
      }
    }
  }
</script>
<style rel="stylesheet/scss" type="text/css" lang="scss">
  @import "../../assets/sass/base/config.scss";

  .m-cat-tab {
    width: 100%;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }
</style>

