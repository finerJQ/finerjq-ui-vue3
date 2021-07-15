<template>
  <div class="nav">
    <router-link :to="route">
      <slot />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'GlobalNav',
  props: {
    route: {
      type: String,
      default: '/zh-CN'
    }
  }
}
</script>

<style scoped lang="scss">
.nav {
  text-align: center;
}
.nav:hover::after {
  display: block;
  content: '';
  width: 60px;
  margin-left: 10px;
  margin-top: -10px;
  border-bottom: 2px solid #6cf;
}
.nav a {
  color: #262626;
  text-decoration: none;
}
</style>