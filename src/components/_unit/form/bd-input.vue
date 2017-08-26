<template>
  <div class="u-input"
       :class="[pattern, size, this.verify ? 'verify' : '', this.showError && this.error ? 'z-active' : '' ]">
    <slot name="beforeInput"></slot>
    <input
      class="in"
      :value="inValue"
      :placeholder="placeholder"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @click="handleClick"
      @change="handleInput"
      :readonly="readonly"
      :type="type">
    <slot name="icon">
      <div class="u-icon-box" v-show="icon" @click="handleIconClick">
        <svg class="u-icon">
          <use :xlink:href="'#'+icon"></use>
        </svg>
      </div>
    </slot>
    <!--<bd-error-tips-->
    <!--v-show="showError && error"-->
    <!--:errorMsg="error"-->
    <!--&gt;</bd-error-tips>-->
    <toast v-model="showError" type="text" :text="error" v-show="showError && error"></toast>
  </div>
</template>
<script type="es6">
  import { Toast } from 'vux'
  export default {
    components: {
      Toast
    },
    data() {
      return {
        inValue: this.value,
        showError: true
      }
    },

    props: {
      value: String,
      type: { //原生 属性
        type: String,
        'default': 'text',
        'validator'(val) {
          return ['password', 'tel', 'number', 'email', 'date', 'text'].indexOf(val) > -1
        }
      },
      pattern: String, // primary,success,warning,danger,info,text
      size: String, // s,m,l,xl,xxl 仿衣服尺码
      loading: Boolean,
      icon: String,
      disabled: Boolean,
      placeholder: String,
      verify: { // 验证规则 {rule: '规则', errMsg: '错误信息提示'}
        type: Object,
        'validator'(value) {
          return value.rule
            && (value.rule instanceof RegExp || typeof value.rule === 'string')
        }
      },
      readonly: Boolean, // 只读
      error: String, // 父元素传入的错误信息
      asyncVerify: String, // 异步验证规则（URL地址）
      onIconClick: Function, // icon点击事件
      trim: Boolean // 是否去除左右的空格
    },

    watch: {
      value(val){
        this.inValue = val
      },
      inValue(){
        this.validate()
      }
    },

    methods: {

      handleInput(event){
        const value = event.target.value
        this.inValue = value
        this.$emit('input', value)
      },

      handleBlur(event){
        this.showError = true
        const value = this.trim ? event.target.value.trim() : event.target.value
        this.inValue = value
        this.$emit('input', value)
        this.$emit('blur', event)
      },

      handleFocus(event){
        this.showError = false
        this.$emit('focus', event)
      },

      handleClick(event) {
        this.$emit('click', event)
      },

      handleIconClick(event) {
        if (this.onIconClick) {
          this.onIconClick(event)
        }
        this.$emit('click', event)
      },

      async validate() {
        const { verify, inValue, asyncVerify, token } = this

        let isValid

        // 存在验证规则
        if (verify) {

          const { rule, errMsg } = verify

          // 正则的验证规则
          if (rule instanceof RegExp) {
            isValid = rule.test(inValue)
          }

          // 字符串型内置类型验证
          else if (typeof rule === 'string') {
            switch (rule) {
              case 'tel':
                isValid = /^1[34578]\d{9}$/.test(inValue)
                break

              case 'password':
                isValid = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,12}$/.test(inValue)
                break

              case 'telCaptcha':
                isValid = /^\d{6}$/.test(inValue)
                break

              case 'imgCaptcha':
                isValid = /^\S{4}$/.test(inValue)
                break

              default:
              // no default
            }

          }
          if (!isValid) {
            this.$emit('show-error', errMsg || '格式错误')
            return false
          }
        } else {
          if (inValue !== '') {
            this.$emit('show-error', '')
            return true
          }
        }

        // 存在异步校验
        if (asyncVerify) {
          this.$emit('show-error', '验证中...')
          let asyncRes = await this.$httpPost(asyncVerify, { data: inValue }, false)

          if (asyncRes.errno === 0) {
            this.$emit('show-error', '')
            return true
          }
          else {
            this.$emit('show-error', asyncRes.errmsg)
            this.showError = true
            return false
          }
        }
        else if (isValid) {
          this.$emit('show-error', '')
          return true
        }
      }
    }
  }
</script>
<style rel="stylesheet/scss" type="text/css" lang="scss">
  @import "../../../assets/sass/base/config";

  .u-input {
    position: relative;
    padding-bottom: 10px;

    &.z-active {
      .in {
        border: 1px solid $c-main;
      }
    }

    .in {
      outline: none;
      appearance: none;
      background: #f7f7f7;
      border: none;
      border-radius: 5px;
      padding: $w-grid-space/2;
      margin-bottom: 10px;
      font-size: 14px;
      line-height: 1;
      color: $c-f;
      width: 100%;
    }
    &.l {
      .in {
        height: $h-l;
        line-height: 14px;
        border-radius: 10px;
        padding: ($h-l - 14)/2 $w-grid-space / 2;
      }
    }

    > .u-icon-box {
      position: absolute;
      right: 0;
      top: 0;
      width: $h-l;
      height: $h-l;
      line-height: $h-l;
      text-align: center;
      cursor: pointer;

      > .u-icon {
        width: 18px;
        height: 18px;
        vertical-align: sub;
        fill: $c-fail;
      }
    }
  }
</style>
