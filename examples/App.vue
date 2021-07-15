<template>
  <div style="">
    <div class="global-nav" style="width:100%;">
      <div class="logo-title">
        <img src="./assets/svg/Logo.svg" alt="Logo">
        <span><router-link to='/zh-CN'>finerJQUI</router-link></span>
      </div>
      <div class="global-nav-menu">
        <div class="clear-blank"></div>
        <PCGlobalNav route='/zh-CN/pc-component'>组件</PCGlobalNav>
        <PCGlobalNav route='/zh-CN/pc-support'>支持</PCGlobalNav>
        <div class="line"></div>
        <a class="github" href="https://github.com/finerJQ/finerjq-ui-vue3" target="_blank">Github</a>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import PCGlobalNav from './components/PCGlobalNav.vue'

export default {
  name: 'App',
  components: {
    PCGlobalNav,
  }
}
</script>

<style lang="scss">
body {
  min-height: 100%;
  padding-bottom: 110px;
  background-color: #fff!important;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #262626;
  font-size: 14px;
}

.global-nav {
  height: 60px;
  border-bottom: 1px solid #e4e4e4;
  background-color: #fff;
  display: grid;
  grid-template-columns: 300px 1fr;
}
.logo-title {
  display: flex;
}
.logo-title img {
  height: 40px;
  width: 40px;
  margin: 10px 20px;
}
.logo-title span {
  font-size: 24px;
  font-weight: bold;
  line-height: 60px;
}
.logo-title span a {
  color: #6cf;
  text-decoration: none;
}

.global-nav-menu {
  display: grid;
  grid-template-columns: 1fr 80px 80px 20px 80px 40px;
  font-size: 20px;
  line-height: 60px;
}
// github
.github {
  width: 80px;
  text-align: center;
  color: #262626;
  text-decoration: none;
}
.line {
  width: 20px;
}
.line::after {
  display: block;
  content: '';
  height: 20px;
  margin-top: 20px;
  margin-left: 9px;
  border-left: 2px solid #ccc;
}
</style>
