<template>
  <div class="component">
    <div class="menu">
      <PCComponentMenu></PCComponentMenu>
    </div>
    <div style="background-color: #fff; width: calc(100% - 300px);">
      <router-view />
    </div>
  </div>
</template>

<script>
import PCComponentMenu from './../components/PCComponentMenu'

export default {
  name: 'PCComponent',
  components: {
    PCComponentMenu
  }
}
</script>

<style lang="scss" scoped>
.component {
  display: flex;
}
.menu {
  background-color: #fff;
  width:300px;
  height: calc(100% - 61px);
  overflow-y:auto;
}
</style>