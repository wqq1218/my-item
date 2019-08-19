<template>
  <div class="footerContainer">
    <a href="javascript:;" @click="goTo('/home')">
      <i class="iconfont-index"></i>
      <span :class="{on:$route.path==='/home'}">首页</span>
    </a>
    <a href="javascript:;" @click="goTo('/category')">
      <i class="iconfont-cate"></i>
      <span :class="{on:$route.path==='/category'}">分类</span>
    </a>
    <a href="javascript:;" @click="goTo('/identify')">
      <i class="iconfont-topic"></i>
      <span :class="{on:$route.path==='/identify'}">识物</span>
    </a>
    <a href="javascript:;" @click="goTo('/cart')">
      <i class="iconfont-cart"></i>
      <span :class="{on:$route.path==='/cart'}">购物车</span>
    </a>
    <a href="javascript:;" @click="goTo('/ucenter')" class="login">
      <i class="iconfont-ucenter"></i>
      <span :class="{on:$route.path==='/ucenter'}">个人</span>
    </a>
  </div>
</template>

<script>
    export default {
        name: "FooterGuide",
        methods:{
            goTo(path){
                this.$router.replace(path)
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  $rem=75
  .footerContainer
    position fixed
    bottom 0
    width 100%
    height (98/$rem)rem
    background white
    display flex
    justify-content space-around
    z-index 999
    a
      display flex
      flex-direction column
      align-items center
      justify-content center
      color #b4282d

      &.on
        color #b4282d
      .iconfont-index
        display inline-block
        width (40/$rem)rem
        height (40/$rem)rem
        background url("../../assets/images/footer/tabBar.png") 0 (-253/$rem)rem no-repeat
      .iconfont-cate
        display inline-block
        width (40/$rem)rem
        height (40/$rem)rem
        background url("../../assets/images/footer/tabBar.png") 0 (-153/$rem)rem no-repeat
      .iconfont-topic
        display inline-block
        width (40/$rem)rem
        height (40/$rem)rem
        background url("../../assets/images/footer/tabBar.png") 0 (-353/$rem)rem no-repeat
      .iconfont-cart
        display inline-block
        width (40/$rem)rem
        height (40/$rem)rem
        background url("../../assets/images/footer/tabBar.png") 0 (-53/$rem)rem no-repeat
      .iconfont-ucenter
        display inline-block
        width (40/$rem)rem
        height (40/$rem)rem
        background url("../../assets/images/footer/tabBar.png") 0 (-453/$rem)rem no-repeat
      span
        font-size (25/$rem)rem
        &.on
          color #b4282d
</style>
