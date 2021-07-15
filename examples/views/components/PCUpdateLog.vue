<template>
  <div class="updatelog">
    <div class="updatelog-title">更新日志</div>
    <div class="updatelog-detailed" v-for="ulog in updateLog" :key="ulog.version">
      <div class="updatelog-detailed-title">{{ ulog.version }}</div>
      <div class="updatelog-detailed-time">{{ ulog.updateTime }}</div>
      <div class="updatelog-detailed-content">
        <div class="updatelog-detailed-content__item" v-for="content in ulog.updateContent" :key="content">{{ content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PCUpdateLog',
  data() {
    return {
      updateLog: [
        {
          version: '1.0.0-beta.1',
          updateTime: '2021.08.1',
          updateContent: [
            "初版",
            "· Input组件等组件",
          ]
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.updatelog {
  width: calc(100% - 64px);
  padding: 32px;
}
.updatelog-title {
  font-size: 32px;
  font-weight: bold;
}
.updatelog-detailed {
  max-width: 1600px;
  margin: 60px 32px 0 16px;
  padding-bottom: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
}
.updatelog-detailed-title {
  font-size: 24px;
  font-weight: bold;
  line-height: 60px;
  margin-left: 16px;
}
.updatelog-detailed-time {
  font-size: 16px;
  line-height: 36px;
  margin-left: 36px;
  margin-right: 36px;
  border-bottom: 1px dashed #ccc;
}
.updatelog-detailed-content {
  margin: 36px;
  font-size: 18px;
}
.updatelog-detailed-content__item {
  line-height: 36px;
}
</style>