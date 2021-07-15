<template>
  <div class="pc-input">
    <TitleItem>
      <template #title>Input输入框</template>
      <template #default>通过鼠标或键盘进行输入字符。</template>
    </TitleItem>
    <Card>
      <template #title>默认用法</template>
      <template #default>
        <jq-input placeholder="请输入内容"></jq-input>
      </template>
    </Card>
    <Card>
      <template #title>禁用状态</template>
      <template #default>
        <jq-input placeholder="请输入内容" disabled></jq-input>
      </template>
    </Card>
    <Card>
      <template #title>可以清空</template>
      <template #default>
        <jq-input placeholder="请输入内容" clear-text></jq-input>
      </template>
    </Card>
    <Card>
      <template #title>密码输入框</template>
      <template #default>
        <jq-input placeholder="请输入密码" password></jq-input>
      </template>
    </Card>
    <Card>
      <template #title>后边带 icon 的输入框</template>
      <template #default>
        <jq-input placeholder="请输入内容" suffix-icon="jq-icon-search"></jq-input>
      </template>
    </Card>
    <Card>
      <template #title>前边带 icon 的输入框</template>
      <template #default>
        <jq-input placeholder="请输入内容" prefix-icon="jq-icon-search"></jq-input>
      </template>
    </Card>
    <Card>
      <template #title>大小尺寸</template>
      <template #default>
        <div style="display: flex;">
          <jq-input placeholder="请输入内容"></jq-input>
          <jq-input style="margin-left:24px;" placeholder="请输入内容" size="small"></jq-input>
          <jq-input style="margin-left:24px;" placeholder="请输入内容" size="mini"></jq-input>
        </div>
      </template>
    </Card>
    <Card>
      <template #title>宽度设定</template>
      <template #default>
        <jq-input placeholder="请输入内容" width="300"></jq-input>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from './../../components/Crad'
import TitleItem from './../../components/TitleItem'

export default {
  name: 'PCInput',
  components: {
    Card,
    TitleItem,
  },
  data() {
    return {
      input1: '',
    }
  }
}
</script>

<style lang="scss" scoped>
.pc-input {
  padding: 32px;
}
</style>