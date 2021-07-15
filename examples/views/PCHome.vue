<template>
  <div class="home">
    <div class="home-header">finerjq-ui-vue3</div>
    <div class="home-abstract">一套基于Vue3.0的简洁UI组件库</div>
    <div style="margin: auto; width:760px; display:flex;">
      <div class="component">
        <div class="component-title">组件</div>
        <div class="component-abstract">组件Demo使用方法的介绍，可以使用组件进行快速UI开发。</div>
        <div class="component-btn"><router-link to="/zh-CN/pc-component">查看详情</router-link></div>
      </div>
      <div class="component" style="margin-left: 40px">
        <div class="component-title">支持</div>
        <div class="component-abstract">您对作者的支持，是对作者继续开发的最大动力。如果您可以定期支持，可以得到在网站悬挂您的名字的特权。</div>
        <div class="component-btn"><router-link to="/zh-CN/pc-support">查看详情</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
}
.home-header {
  color: #666;
  padding-top: 48px;
  font-size: 36px;
  font-weight: bold;
}
.home-abstract {
  color: #ccc;
  font-size: 24px;
  margin: 16px 0 60px;
}

.component {
  width: 360px;
  border-radius: 8px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
}
.component-title {
  font-size: 28px;
  padding-top: 16px;
  line-height: 40px;
}
.component-abstract {
  color: #b3b3b3;
  font-size: 18px;
  line-height: 32px;
  margin: 24px 16px;
  height: 100px;
}
.component-btn {
  font-size: 16px;
  line-height: 56px;
  border-top: 1px solid #e6e6e6;
}
.component-btn a {
  color: #6cf;
  text-decoration: none;
}
.component-btn:hover {
  background-color: #6cf;
  border-radius: 0 0 8px 8px;
}
.component-btn:hover a {
  color: #fff;
}
</style>