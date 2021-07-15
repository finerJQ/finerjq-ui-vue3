<template>
  <div class="support">
    <div class="support-title">赞助finerjq-ui-vue3的开发</div>
    <div class="support-abstract">
      finerjq-ui-vue3是一套开源的简洁UI组件库项目，使用完全免费。
      但是我们也需要相应的资金维护组件库和网站的运行，以及未来的持续发展。
      您可以通过以下的方式来支持finerjq-ui-vue3的持续开发：
    </div>
    <div class="support-one">
      <div class="support-one-title">一次性支持</div>
      <div class="support-one-abstract">我们通过以下方式接受支持：</div>
      <div class="pay">
        <div class="pay-wechat-pay" v-on:click="showWeChatPay = !showWeChatPay, showAliPay = false">
          <img src="./../assets/wechat-pay.png" height="60" width="171" alt="wechat-pay">
        </div>
        <div class="pay-alipay-pay" v-on:click="showAliPay = !showAliPay, showWeChatPay = false">
          <img src="./../assets/ali-pay.png" height="60" width="171" alt="ali-pay">
        </div>
      </div>
      <div v-if="showWeChatPay" class="wechat-pay">
        <img src="./../assets/pay/wechat-pay-2yuan.png" width="360" alt="wechat-pay-2yuan">
        <img src="./../assets/pay/wechat-pay-nyuan.png" width="360" alt="wechat-pay-nyuan">
      </div>
      <div v-if="showAliPay" class="ali-pay">
        <img src="./../assets/pay/ali-pay-2yuan.png" width="360" alt="ali-pay-2yuan">
        <img src="./../assets/pay/ali-pay-nyuan.png" width="360" alt="ali-pay-nyuan">
      </div>
    </div>
    <div class="support-cycle">
      <div class="support-cycle-title">周期性支持</div>
      <div class="support-cycle-abstract">周期性支持可以获得额外的回报，比如你的公司 logo 会出现在我们的官网上。</div>
      <div>
        <img src="./../assets/wechat.png" width="360" height="360" alt="wechat">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PCSupport',
  data() {
    return {
      showWeChatPay: false,
      showAliPay: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.support {
  width: 900px;
  margin: 32px auto;
}
.support-title {
  font-size: 32px;
  font-weight: bold;
}
.component-title {
  font-size: 28px;
  padding-top: 16px;
  line-height: 40px;
}
.support-abstract {
  color: #a6a6a6;
  font-size: 18px;
  line-height: 32px;
  margin: 32px 16px;
}
.support-one,
.support-cycle {
  margin-top: 60px;
}
.support-one-title,
.support-cycle-title {
  font-size: 24px;
  font-weight: bold;
  line-height: 60px;
  border-bottom: 1px dashed #ccc;
}
.support-one-abstract,
.support-cycle-abstract {
  font-size: 18px;
  margin-top: 16px;
  line-height: 32px;
}
.pay {
  display: flex;
  margin-top: 16px;
  margin-bottom: 16px;
}
.pay-wechat-pay,
.pay-alipay-pay {
  cursor: pointer;
  margin-left: 32px;
}
.pay-wechat-pay:hover,
.pay-alipay-pay:hover {
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
}
.wechat-pay img,
.ali-pay img{
  margin-left: 32px;
}
</style>