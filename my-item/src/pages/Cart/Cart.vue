<template>
  <div id="cart" class="hide show">
    <div class="cartHeader">
      <div class="text">购物车</div>
      <div class="txt">领券</div>
    </div>
    <ul class="self-support">
      <li class="self-brand">
        <i class="iconfont icon-xiaoyuan"></i>
        <a>30天无忧退货</a>
      </li>
      <li class="self-brand">
        <i class="iconfont icon-xiaoyuan"></i>
        <a>48小时快速退款</a>
      </li>
      <li class="self-brand">
        <i class="iconfont icon-xiaoyuan"></i>
        <a>满88元免邮费</a>
      </li>
    </ul>
    <div class="cartImg">
      <div class="img"></div>
      <div class="tex">去添加点什么吧</div>
      <div class="login">登录</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Cart"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  $rem = 75
  #cart
    width 100%
    height 100%
    background #eee

    .cartHeader
      width 100%
      height (88 /$rem) rem
      line-height (88 /$rem) rem
      background white
      text-align center

      .text
        font-size (35 /$rem) rem
        float left
        margin-left (30 /$rem) rem

      .txt
        font-size (30 /$rem) rem
        color #b4282d
        float right
        margin-right (60 /$rem) rem

    .self-support
      display flex
      justify-content space-around
      vertical-align top
      height (70 /$rem) rem
      width 100%
      line-height (39 /$rem) rem
      padding-left (30 /$rem) rem
      box-sizing border-box
      background #ccc

      .self-brand
        a
          font-size (25 /$rem) rem
          margin-right (35 /$rem) rem

        .iconfont
          display inline-block
          vertical-align bottom
          font-size (20 /$rem) rem
    .cartImg
      width (400 /$rem) rem
      height (248 /$rem) rem
      position absolute
      left 0
      top 0
      bottom 0
      right 0
      margin auto

      .img
        background-image url("../../assets/images/shops/cart.png")
        background-size (248 /$rem) rem
        height (228 /$rem) rem
        width (248 /$rem) rem
        margin auto

      .tex
        font-size (27 /$rem) rem
        color rgb(189, 192, 204)
        text-align center

      .login
        font-size (30 /$rem) rem
        height (80 /$rem) rem
        line-height (80 /$rem) rem
        width (400 /$rem) rem
        background #b4282d
        color white
        text-align center
        margin-top (30 /$rem) rem
</style>
