<template>
  <div class="title-item">
    <div class="title-item-title">
      <slot name="title"></slot>
    </div>
    <div class="title-item-abstract">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleItem',
}
</script>

<style lang="scss" scoped>
.title-item-title {
  font-size: 36px;
  font-weight: bold;
  line-height: 60px;
}
.title-item-abstract {
  color: #b3b3b3;
  font-size: 18px;
  margin-top: 16px;
  line-height: 30px;
}
</style>