<template>
  <div class="component-menu">
    <div v-for="group in menuArray" :key="group.title">
      <div class="component-menu-title">{{ group.title }}</div>
      <div v-for="menu in group.menuFunction" :key="menu.name" class="component-menu-item">
        <router-link :to="menu.herf">{{ menu.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PCComponentMenu',
  data() {
    return {
      menuArray: [
        // 1. 基础
        {
          title: '基础',
          menuFunction: [
            {
              name: '更新日志',
              herf: '/zh-CN/pc-component/pc-updatelog'
            },
            // {
            //   name: '安装',
            //   herf: '/zh-CN/PCComponent/PCInstall'
            // }
          ]
        },
        // 2. 组件
        {
          title: '组件',
          menuFunction: [
            {
              name: 'Input组件',
              herf: '/zh-CN/pc-component/pc-input'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.component-menu {
  width: 300px;
  padding-top: 16px;
}
.component-menu-title {
  font-size: 20px;
  font-weight: bold;
  line-height: 40px;
  margin-left: 20px;
}
.component-menu-item {
  font-size: 18px;
  line-height: 36px;
  margin-left: 28px;
}
.component-menu-item a {
  color: #262626;
  text-decoration: none;
}
.component-menu-item a:hover {
  color: #6cf;
}
.component-menu-item a.router-link-exact-active {
  color:#6cf;
}
</style>