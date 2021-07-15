<template>
  <div class="jq-input" :style="{ width: width + 'px' }">
    <input v-if="password" :type="pwdType"
           class="jq-input-text"
           :class="{ 'disabled': disabled,
                     'jq-input-text__def': size === 'default',
                     'jq-input-text__small': size === 'small',
                     'jq-input-text__mini': size === 'mini' }"
           :style="{ paddingRight: size === 'mini' ? '24px' : '30px',
                     width: size === 'mini' ? (width-41) + 'px' : (width-47) + 'px' }"
           :placeholder="placeholder"
           :disabled="disabled"
           v-model="inputValue" />
    <input v-else type="text"
           class="jq-input-text"
           :class="{ 'disabled': disabled,
                     'jq-input-text__def': size === 'default',
                     'jq-input-text__small': size === 'small',  
                     'jq-input-text__mini': size === 'mini' }"
           :style="{ paddingLeft: leftPadding + 'px',
                     paddingRight: rightPadding + 'px',
                     width: inputWidth + 'px' }"
           :placeholder="placeholder"
           :disabled="disabled"
           v-model="inputValue"
           @focus="isFocus = true"
           @blur="isFocus = false"
           @mouseenter="isHover = true"
           @mouseleave="isHover = false" />
    <div v-if="prefixExist"
         :class="[ prefixName, size === 'default' ? 'prefix-icon' :
                               size === 'small' ? 'prefix-icon-small' :
                               'prefix-icon-mini' ]"></div>
    <div v-if="suffixExist" 
         :class="[ suffixName, size === 'default' ? 'suffix-icon' :
                               size === 'small' ? 'suffix-icon-small' :
                               'suffix-icon-mini' ]"></div>
    <div v-if="password" style="cursor: pointer;"
         :class="[ size === 'mini' ? pwdEye ? 'jq-icon-eye-mini' : 'jq-icon-eye-mask-mini' :
                                     pwdEye ? 'jq-icon-eye-small' : 'jq-icon-eye-mask-small',
                   size === 'default' ? 'password-icon' :
                   size === 'small' ? 'password-icon-small' : 'password-icon-mini' ]"
         v-on:click="pwdEye = !pwdEye"></div>
    <div v-if="isShowClear" style="cursor: pointer;"
         :class="[ size === 'default' ? 'suffix-icon' :
                   size === 'small' ? 'suffix-icon-small' : 'suffix-icon-mini',
                   size === 'default' ? 'jq-icon-clear-small' : 'jq-icon-clear-mini' ]"
         v-on:click="inputValue = ''"
         @mouseenter="isHover = true"></div>
  </div>
</template>

<script>
import './../../icons/jq-icons.css'

export default {
  name: 'jqInput',
  data() {
    return {
      inputValue: this.modelValue,
      pwdEye: false,
      pwdType: 'password',
      isFocus: false,
      isHover: false,
    }
  },
  watch: {
    // v-model 父组件传入的value监听，更新
    modelValue ( newValue ) {
      this.inputValue = newValue;
    },

    // 向父组件更新v-model value
    inputValue ( newValue ) {
      this.$emit('update:modelValue', newValue)
    },

    // 显示密码控制
    pwdEye ( newValue ) {
      this.pwdType = newValue ? 'text' : 'password';
    }
  },
  computed: {
    /**
     * 是否存在后缀图标
     * 
     * @param   {null}
     * @returns {Boolean}  suffixExist: true/false
     */
    suffixExist () {
      return !(typeof(this.suffixIcon) === 'undefined' || this.suffixIcon === '');
    },

    /**
     * 后缀图标的名称
     * 
     * @param   {null}
     * @returns {String}  suffixName
     */
    suffixName () {
      if(this.size === 'default') {
        return this.suffixIcon + '-small';
      }
      return this.suffixIcon + '-mini';
    },

    /**
     * 是否存在前缀图标
     * 
     * @param   {null}
     * @returns {Boolean}  prefixExist: true/false
     */
    prefixExist () {
      console.log(this.prefixIcon)
      return !(typeof(this.prefixIcon) === 'undefined' || this.prefixIcon === '');
    },

    /**
     * 前缀图标的名称
     * 
     * @param   {null}
     * @returns {String}  prefixName
     */
    prefixName () {
      if(this.size === 'default') {
        return this.prefixIcon + '-small';
      }
      return this.prefixIcon + '-mini';
    },

    /**
     * input的宽度
     * 
     * @param     {null}
     * @returns   {Number}  inputWidth
     */
    inputWidth () {
      // padding-left: 15, padding-right: 15, border: 1
      let _width = this.width - 32;
      if(this.suffixExist || this.isShowClear) {
        // size default: padding-right: 30
        // size small/mini: padding-right: 24
        _width = this.size === 'default' ?  _width - 15 : _width - 9;
      }
      if(this.prefixExist) {
        // size default: padding-left: 34
        // size small/mini: padding-left: 24
        _width = this.size === 'default' ? _width - 19 : _width - 13;
      }
      return _width;
    },

    /**
     * input的padding-right大小
     * 
     * if 右侧无图标
     *    padding-right: 15
     * if 右侧有图标
     *    size default: padding-right: 30
     *    size small/mini: padding-right: 24
     * 
     * @param     {null}
     * @returns   {Number}  rightPadding
     */
    rightPadding () {
      let padding = 15;
      if(this.suffixExist || this.isShowClear) {
        padding = this.size === 'default' ? 30 : 24;
      }
      return padding;
    },

    /**
     * input的padding-left大小
     * 
     * if 右侧无图标
     *    padding-left: 15
     * if 右侧有图标
     *    size default: padding-left: 34
     *    size small/mini: padding-left: 28
     * 
     * @param     {null}
     * @returns   {Number}  rightPadding
     */
    leftPadding () {
      let padding = 15;
      if(this.prefixExist) {
        padding = this.size === 'default' ? 34 : 28;
      }
      return padding;
    },

    /**
     * 是否需要清除输入内容的操作
     * 
     * @param   {null}
     * @returns {Boolean} isShowClear: true/false
     */
    isShowClear () {
      return this.clearText && this.inputValue !== '' && (this.isFocus || this.isHover);
    }
  },
  props: {
    size: {                       // input的大小
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'small', 'mini'].includes(value);
      }
    },
    placeholder: {                // 提示信息
      type: String,
      default: '',
    },
    password: {                   // 是否为password
      type: Boolean,
      default: false
    },
    disabled: {                   // 是否disabled
      type: Boolean,
      default: false
    },
    clearText: {                  // 是否可以清除
      type: Boolean,
      default: false
    },
    modelValue: String,           // v-model
    suffixIcon: String,           // 后缀图标
    prefixIcon: String,           // 前缀图标
    width: {                      // input的宽度
      type: Number,
      default: 180,               // 默认宽度180px
    }
  }
}
</script>

<style scoped>
.jq-input {
 font-family: 'Microsoft YaHei UI';
 position: relative;
}
.jq-input-text {
  color: #262626;
  background-color: #fff;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  font-weight: normal;
  padding: 0 15px;
  text-decoration: none;
  outline: none;
}
.jq-input input[type='password']::-ms-reveal {
  display: none;
}
.jq-input-text__def {
  font-size: 15px;
  height: 36px;
  line-height: 36px;
}
/* small */
.jq-input-text__small {
  font-size: 12px;
  height: 28px;
  line-height: 28px;
}
/* mini */
.jq-input-text__mini {
  font-size: 12px;
  height: 22px;
  line-height: 22px;
}

.jq-input input:focus {
  border-color: #6cf;
}
.disabled {
  background-color: #f2f2f2;
}
::-webkit-input-placeholder {
	color: #e4e4e4;
}

/* icon */
.prefix-icon,
.prefix-icon-small,
.prefix-icon-mini,
.suffix-icon,
.suffix-icon-small,
.suffix-icon-mini,
.password-icon,
.password-icon-small,
.password-icon-mini
{
  width: 0;
  height: 0;
  position: absolute;
}
.suffix-icon,
.password-icon {
  top: 11px;
  right: 26px;
}
.suffix-icon-small {
  top: 10px;
  right: 20px;
}
.suffix-icon-mini,
.password-icon-mini {
  top: 6px;
  right: 20px;
}
.password-icon-small {
  top: 6px;
  right: 26px;
}
.prefix-icon {
  top: 11px;
  left: 8px;
}
.prefix-icon-small {
  top: 10px;
  left: 8px;
}
.prefix-icon-mini {
  top: 6px;
  left: 8px;
}
</style>