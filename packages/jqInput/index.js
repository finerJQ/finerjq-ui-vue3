// Input 组件

import jqInput from './src/';

jqInput.install = function (Vue) {
  Vue.component(jqInput.name, jqInput)
}

export default jqInput