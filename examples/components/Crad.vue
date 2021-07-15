<template>
  <div class="card">
    <div class="card-title">
      <slot name="title"></slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
}
</script>

<style lang="scss" scoped>
.card {
  padding-top: 40px;
}
.card-title {
  margin: 20px 0;
  font-size: 28px;
}
.card-body {
  border-radius: 8px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  padding: 36px;
}
</style>