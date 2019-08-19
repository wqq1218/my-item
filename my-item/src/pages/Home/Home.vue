<template>
    <div id="home">
        <div class="headerContainer">
            <h1 class="logo">网易严选</h1>
            <div class="headerSearch">
                <i class="iconfont icon-fangdajing"></i>
                <span class="text">搜索商品，共99件好物</span>
            </div>
            <button>登录</button>
        </div>
        <div class="headerNav" ref="nav">
            <ul class="nav">
                <li class="tab">
                    <span>推荐</span>
                </li>
                <li class="tab">
                    <span>居家生活</span>
                </li>
                <li class="tab">
                    <span>服饰鞋包</span>
                </li>
                <li class="tab">
                    <span>美食酒水</span>
                </li>
                <li class="tab">
                    <span>美食酒水</span>
                </li>

                <li class="tab">
                    <i class="iconfont icon-iconfontplatformentrance-copy"></i>
                </li>
            </ul>
        </div>
        <div class="swiper">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="../../assets/images/headerNav/1.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="../../assets/images/headerNav/2.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="../../assets/images/headerNav/3.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="../../assets/images/headerNav/4.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="../../assets/images/headerNav/5.jpg" alt="">
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
        <ul class="self-support">
            <li class="self-brand">
                <i class="iconfont icon-wangyi"></i>
                <a>网易自营品牌</a>
            </li>
            <li class="self-brand">
                <i class="iconfont icon-36x36jiesuan"></i>
                <a>30天无忧退货</a>
            </li>
            <li class="self-brand">
                <i class="iconfont icon-anquan"></i>
                <a>48小时快速退款</a>
            </li>

        </ul>
        <div class="goodsNav">
            <div class="good" v-for="(item,index) in homeData.kingKongModule.kingKongList" :key="index">
                <a href="javascript:;">
                    <img :src="item.picUrl" alt="">
                    <span>{{item.text}}</span>
                </a>
            </div>
        </div>
        <div class="rushArea">
            <div class="rushBuy">
                <img src="../../assets/images/shops/qianggou.gif" alt="">
            </div>
            <div class="employee">
                <a href="javascript:;">
                    <h6 class="textTitle">9.9超值专区</h6>
                    <span class="text">180款爆品</span>
                    <img src="../../assets/images/shops/beizi.png" alt="">
                    <img src="../../assets/images/shops/lingshi.png" alt="">
                </a>
                <a href="javascript:;">
                    <h6 class="textTitle">9.9超值专区</h6>
                    <span class="text">180款爆品</span>
                    <img src="../../assets/images/shops/beizi.png" alt="">
                    <img src="../../assets/images/shops/lingshi.png" alt="">
                </a>
                <a href="javascript:;">
                    <h6 class="textTitle">9.9超值专区</h6>
                    <span class="text">180款爆品</span>
                    <img src="../../assets/images/shops/beizi.png" alt="">
                    <img src="../../assets/images/shops/lingshi.png" alt="">
                </a>
                <a href="javascript:;">
                    <h6 class="textTitle">9.9超值专区</h6>
                    <span class="text">180款爆品</span>
                    <img src="../../assets/images/shops/beizi.png" alt="">
                    <img src="../../assets/images/shops/lingshi.png" alt="">
                </a>
            </div>
            <div class="popular-items">
                <div class="swiper-container">
                    <div class="tex">私人定制</div>
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <a class="itemImg">
                                <img src="../../assets/images/shops/kaochen.png" alt="">
                                <span class="text">
                                  网易智造减压按摩腰靠$333
                                  <span class="money">$333</span>
                              </span>
                            </a>
                            <a class="itemImg">
                                <img src="../../assets/images/shops/kaochen.png" alt="">
                                <span class="text">
                                    网易智造减压按摩腰靠
                                    <span class="money">$333</span>
                                </span>

                            </a>
                            <a class="itemImg">
                                <img src="../../assets/images/shops/kaochen.png" alt="">
                                <span class="text">
                                    网易智造减压按摩腰靠
                                    <span class="money">$333</span>
                                </span>

                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a class="itemImg">
                                <img src="../../assets/images/shops/kaochen.png" alt="">
                                <span class="text">
                                    网易智造减压按摩腰靠$333
                                    <span class="money">$333</span>
                                </span>

                            </a>
                            <a class="itemImg">
                                <img src="../../assets/images/shops/kaochen.png" alt="">
                                <span class="text">
                                    网易智造减压按摩腰靠
                                    <span class="money">$333</span>
                                </span>
                            </a>
                            <a class="itemImg">
                                <img src="../../assets/images/shops/kaochen.png" alt="">
                                <span class="text">
                                    网易智造减压按摩腰靠
                                    <span class="money">$333</span>
                                </span>
                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a class="itemImg">
                                <img src="../../assets/images/shops/kaochen.png" alt="">
                                <span class="text">网易智造减压按摩腰靠$333<span class="money">$333</span></span>

                            </a>
                            <a class="itemImg">
                                <img src="../../assets/images/shops/kaochen.png" alt="">
                                <span class="text">网易智造减压按摩腰靠<span class="money">$333</span></span>

                            </a>
                            <a class="itemImg">
                                <img src="../../assets/images/shops/kaochen.png" alt="">
                                <span class="text">网易智造减压按摩腰靠<span class="money">$333</span></span>

                            </a>
                        </div>
                        <div class="swiper-slide">
                            <a class="itemImg">
                                <img src="../../assets/images/shops/kaochen.png" alt="">
                                <span class="text">
                                    网易智造减压按摩腰靠$333
                                    <span class="money">$333</span>
                                </span>
                            </a>
                            <a class="itemImg">
                                <img src="../../assets/images/shops/kaochen.png" alt="">
                                <span class="text">
                                    网易智造减压按摩腰靠
                                    <span class="money">$333</span>
                                </span>
                            </a>
                            <a class="itemImg">
                                <img src="../../assets/images/shops/kaochen.png" alt="">
                                <span class="text">
                                    网易智造减压按摩腰靠
                                    <span class="money">$333</span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
            <div class="limitedTime">
                <div class="tex">
                    限时购
                    <i class="iconfont icon-jianto"></i>
                    <span>更多</span>
                </div>
                <a class="itemImg">
                    <img src="../../assets/images/shops/xshui.png" alt="">
                    <span class="money">￥333</span>
                </a>
                <a class="itemImg">
                    <img src="../../assets/images/shops/xshui.png" alt="">
                    <span class="money">￥333</span>
                </a>
                <a class="itemImg">
                    <img src="../../assets/images/shops/xshui.png" alt="">
                    <span class="money">￥333</span>
                </a>
                <a class="itemImg">
                    <img src="../../assets/images/shops/xshui.png" alt="">
                    <span class="money">￥333</span>
                </a>
                <a class="itemImg">
                    <img src="../../assets/images/shops/xshui.png" alt="">
                    <span class="money">￥333</span>
                </a>
                <a class="itemImg">
                    <img src="../../assets/images/shops/xshui.png" alt="">
                    <span class="money">￥333</span>
                </a>

            </div>
            <div class="newGoogs">
                <div class="tex">
                    新品首发
                    <i class="iconfont icon-jianto"></i>
                    <span>更多</span>
                </div>
                <a class="itemImg">
                    <img src="../../assets/images/shops/toufa.png" alt="">
                    <span class="text">
                      发如海黑黑膏 12克*15
                      <span class="money">$333</span>
                    </span>
                </a>
                <a class="itemImg">
                    <img src="../../assets/images/shops/toufa.png" alt="">
                    <span class="text">
                      发如海黑黑膏 12克*15
                      <span class="money">$333</span>
                    </span>
                </a>
                <a class="itemImg">
                    <img src="../../assets/images/shops/toufa.png" alt="">
                    <span class="text">
                      发如海黑黑膏 12克*15
                      <span class="money">$333</span>
                    </span>
                </a>
                <a class="itemImg">
                    <img src="../../assets/images/shops/toufa.png" alt="">
                    <span class="text">
                      发如海黑黑膏 12克*15
                      <span class="money">$333</span>
                    </span>
                </a>
                <a class="itemImg">
                    <img src="../../assets/images/shops/toufa.png" alt="">
                    <span class="text">
                      网易智造减压按摩腰靠$333
                      <span class="money">$333</span>
                    </span>
                </a>
                <a class="itemImg">
                    <img src="../../assets/images/shops/toufa.png" alt="">
                    <span class="text">
                      网易智造减压按摩腰靠$333
                      <span class="money">$333</span>
                    </span>
                </a>

            </div>
            <div class="recommend">
                <div class="tex">
                    人气推荐
                    <i class="iconfont icon-jianto"></i>
                    <span>更多</span>
                </div>
                <a class="itemHeader">
                    <div class="recommendImg">
                        <img src="../../assets/images/shops/water.png" alt="">
                    </div>
                    <div class="text">
                        <span class="text-one">抄底特惠</span>
                        <span class="title ellipsis">发如海黑黑膏超人气爆款值得拥有</span>
                        <span class="text-two">高端大气上档次</span>
                        <span class="money">￥1949</span>
                    </div>
                </a>
                <a class="itemImg">
                    <img src="../../assets/images/shops/water.png" alt="">
                    <span class="text">
                      发如海黑黑膏 12克*15
                      <span class="money">$333</span>
                    </span>
                </a>
                <a class="itemImg">
                    <img src="../../assets/images/shops/water.png" alt="">
                    <span class="text">
                      网易智造减压按摩腰靠$333
                      <span class="money">$333</span>
                    </span>
                </a>
                <a class="itemImg">
                    <img src="../../assets/images/shops/water.png" alt="">
                    <span class="text">
                      网易智造减压按摩腰靠$333
                      <span class="money">$333</span>
                    </span>
                </a>

            </div>
            <div class="category-popular">
                <div class="tex">
                    类目热销榜
                </div>
                <div class="category">
                    <a class="itemImg itemImg1">
                    <span class="text">
                        热销榜
                        <span class="txt"></span>
                    </span>
                        <img src="../../assets/images/shops/toufa.png" alt="">
                    </a>
                    <a class="itemImg itemImg2">
                    <span class="text">
                        好评榜
                        <span></span>
                    </span>
                        <img src="../../assets/images/shops/toufa.png" alt="">
                    </a>
                    <a class="item item1">
                    <span class="text">
                      居家生活榜
                    </span>
                        <img src="../../assets/images/shops/toufa.png" alt="">
                    </a>
                    <a class="item">
                    <span class="text">
                      居家生活榜
                    </span>
                        <img src="../../assets/images/shops/toufa.png" alt="">
                    </a>
                    <a class="item">
                    <span class="text">
                      居家生活榜
                    </span>
                        <img src="../../assets/images/shops/toufa.png" alt="">
                    </a>
                    <a class="item">
                    <span class="text">
                      居家生活榜
                    </span>
                        <img src="../../assets/images/shops/toufa.png" alt="">
                    </a>
                    <a class="item item1">
                    <span class="text">
                      居家生活榜
                    </span>
                        <img src="../../assets/images/shops/toufa.png" alt="">
                    </a>
                    <a class="item">
                    <span class="text">
                      居家生活榜
                    </span>
                        <img src="../../assets/images/shops/toufa.png" alt="">
                    </a>
                    <a class="item">
                    <span class="text">
                      居家生活榜
                    </span>
                        <img src="../../assets/images/shops/toufa.png" alt="">
                    </a>
                    <a class="item">
                    <span class="text">
                      居家生活榜
                    </span>
                        <img src="../../assets/images/shops/toufa.png" alt="">
                    </a>
                </div>
            </div>
            <div class="employee-two">
                <a href="javascript:;">
                    <h6 class="textTitle">9.9超值专区</h6>
                    <span class="text">180款爆品</span>
                    <img src="../../assets/images/shops/beizi.png" alt="">
                    <img src="../../assets/images/shops/lingshi.png" alt="">
                </a>
                <a href="javascript:;">
                    <h6 class="textTitle">9.9超值专区</h6>
                    <span class="text">180款爆品</span>
                    <img src="../../assets/images/shops/beizi.png" alt="">
                    <img src="../../assets/images/shops/lingshi.png" alt="">
                </a>
                <a href="javascript:;">
                    <h6 class="textTitle">9.9超值专区</h6>
                    <span class="text">180款爆品</span>
                    <img src="../../assets/images/shops/beizi.png" alt="">
                    <img src="../../assets/images/shops/lingshi.png" alt="">
                </a>
                <a href="javascript:;">
                    <h6 class="textTitle">9.9超值专区</h6>
                    <span class="text">180款爆品</span>
                    <img src="../../assets/images/shops/beizi.png" alt="">
                    <img src="../../assets/images/shops/lingshi.png" alt="">
                </a>
            </div>
            <div class="recommend-two">
                <div class="tex">
                    品牌制造商
                    <i class="iconfont icon-jianto"></i>
                    <span>更多</span>
                </div>
                <div class="category">
                    <a href="javascript:;">
                        <h6 class="textTitle">9.9超值专区</h6>
                        <span class="text">180款爆品</span>
                        <img src="../../assets/images/shops/beizi.png" alt="">
                        <img src="../../assets/images/shops/lingshi.png" alt="">
                    </a>
                    <a href="javascript:;">
                        <h6 class="textTitle">9.9超值专区</h6>
                        <span class="text">180款爆品</span>
                        <img src="../../assets/images/shops/beizi.png" alt="">
                        <img src="../../assets/images/shops/lingshi.png" alt="">
                    </a>
                    <a href="javascript:;">
                        <h6 class="textTitle">9.9超值专区</h6>
                        <span class="text">180款爆品</span>
                        <img src="../../assets/images/shops/beizi.png" alt="">
                        <img src="../../assets/images/shops/lingshi.png" alt="">
                    </a>
                    <a href="javascript:;">
                        <h6 class="textTitle">9.9超值专区</h6>
                        <span class="text">180款爆品</span>
                        <img src="../../assets/images/shops/beizi.png" alt="">
                        <img src="../../assets/images/shops/lingshi.png" alt="">
                    </a>
                </div>
            </div>
            <div class="special">
                <div class="tex">
                    品牌制造商
                    <i class="iconfont icon-jianto"></i>
                    <span>更多</span>
                </div>
                <div class="specialContainer">
                    <ul class="giftContainer">
                        <li class="gift">
                            <img src="../../assets/images/shops/jingxuan.jpg" alt="">
                            <h4 class="text ellipsis">直男们有救了，严选手把手教你怎么选礼物</h4>
                            <span>女士精选礼物大赏</span>
                        </li>

                    </ul>
                </div>
            </div>
            <div class="goodsSwiper">
                <div class="goodsSwiperImg">
                    <img src="../../assets/images/shops/footer.jpg" alt="">
                </div>
                <div class="goodsSwiperContainer">
                    <a class="goodsSwiperItem">
                        <img src="../../assets/images/shops/tooth.png" alt="">
                        <span class="text">全净皓齿变速式声波电动牙刷</span>
                        <span class="txt">￥219</span>
                    </a>
                    <a class="goodsSwiperItem">
                        <img src="../../assets/images/shops/tooth.png" alt="">
                        <span class="text">全净皓齿变速式声波电动牙刷</span>
                        <span class="txt">￥219</span>
                    </a>
                </div>
            </div>
            <div class="goodsSwiper">
                <div class="goodsSwiperImg">
                    <img src="../../assets/images/shops/footer.jpg" alt="">
                </div>
                <div class="goodsSwiperContainer">
                    <a class="goodsSwiperItem">
                        <img src="../../assets/images/shops/tooth.png" alt="">
                        <span class="text">全净皓齿变速式声波电动牙刷</span>
                        <span class="txt">￥219</span>
                    </a>
                    <a class="goodsSwiperItem">
                        <img src="../../assets/images/shops/tooth.png" alt="">
                        <span class="text">全净皓齿变速式声波电动牙刷</span>
                        <span class="txt">￥219</span>
                    </a>
                </div>
            </div>
            <div class="goodsSwiper">
                <div class="goodsSwiperImg">
                    <img src="../../assets/images/shops/footer.jpg" alt="">
                </div>
                <div class="goodsSwiperContainer">
                    <a class="goodsSwiperItem">
                        <img src="../../assets/images/shops/tooth.png" alt="">
                        <span class="text">全净皓齿变速式声波电动牙刷</span>
                        <span class="txt">￥219</span>
                    </a>
                    <a class="goodsSwiperItem">
                        <img src="../../assets/images/shops/tooth.png" alt="">
                        <span class="text">全净皓齿变速式声波电动牙刷</span>
                        <span class="txt">￥219</span>
                    </a>
                </div>
            </div>

        </div>
        <div class="appHeader">
            <div class="copyright">
                <a>下载APP</a>
                <a>电脑版</a>
            </div>

        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
    export default {
        name: "home",
      async mounted() {
          await this.$store.dispatch('getHomeDate')
            this.$nextTick(()=>{
                new Swiper ('.swiper-container', {
                    loop: true, // 循环模式选项
                    autoplay:true,
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                    },
                })
                this.initScroll()
            })

        },
        computed:{
           ...mapState(['homeData'])
        },
        methods:{
            initScroll(){
                new BScroll(this.$refs.nav,{
                    start:0,
                    click:true,
                    probeType:3,
                    scrollX:true,
                    scrollY:false,
                    eventPassthrough: "vertical"
                })

            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    $rem = 75
    #home
        width 100%
        background #eee
        .headerContainer
            height (88/$rem)rem
            width 100%
            display flex
            align-items center
            justify-content space-around
            .logo
                background url("../../assets/images/logo/logo.png") no-repeat
                background-size (138/$rem)rem  (40/$rem)rem
                font-size (35/$rem)rem
                width (138/$rem)rem
                height (40/$rem)rem
                float left
                color transparent
                vertical-align middle
            .headerSearch
                float left
                width (442/$rem)rem
                height (56/$rem)rem
                line-height (56/$rem)rem
                text-align center
                border-radius (10/$rem)rem
                background #ccc
                .text
                    font-size (30/$rem)rem
                    color #333
                    vertical-align top
                .icon-fangdajing
                    display inline-block
                    font-size (50/$rem)rem
                    vertical-align top
            button
                float left
                width (78/$rem)rem
                height (40/$rem)rem
                margin-right (13/$rem)rem
                border-radius (10/$rem)rem
                font-size (25/$rem)rem
                border 1px solid #b4282d
                background-color transparent
                color #b4282d
        .headerNav
            width 100%
            height (60/$rem)rem
            overflow hidden
            line-height (60/$rem)rem
            font-size    0
            .nav
                height (40/$rem)rem
                overflow hidden
                display inline-block
                white-space nowrap
                line-height (30/$rem)rem
                .tab
                    display inline
                    margin 0 (28/$rem)rem
                    font-size (30/$rem)rem
                    color #4A494B
                    .icon-iconfontplatformentrance-copy
                        display inline-block
                        width (40/$rem)rem
                        height (40/$rem)remwidth (40/$rem)rem
                        height (40/$rem)rem
                        font-size (40/$rem)rem
                        color #4A494B
        .swiper
            width 100%
            height  (370/$rem)rem
            .swiper-container
                width 100%
                height 100%
                img
                    width 100%
                    height 100%
        .self-support
            display flex
            justify-content center
            vertical-align top
            height (72/$rem)rem
            width 100%
            line-height (39/$rem)rem
            padding-left (30/$rem)rem
            box-sizing border-box
            .self-brand
                a
                    font-size (25/$rem)rem
                    margin-right (35/$rem)rem
                .iconfont
                    display inline-block
                    font-size (35/$rem)rem
                    color #b4282d
                    vertical-align bottom
        .goodsNav
            width 100%
            height (372/$rem)rem
            display flex
            flex-wrap wrap
            align-items center
            .good
                width 20%
                height (156/$rem)rem
                display flex
                justify-content center
                a
                    width (110/$rem)rem
                    height (156/$rem)rem
                    display inline-block
                    text-align center
                    img
                        width (110/$rem)rem
                        height (110/$rem)rem
                    span
                        font-size (26/$rem)rem
                        vertical-align top
                        text-align center
        .rushArea
            width 100%
            background  #eee
            .rushBuy
                width 100%
                height (126/$rem)rem
                img
                    width 100%
                    height (126/$rem)rem
            .employee
                width 100%
                height (576/$rem)rem
                display flex
                flex-wrap wrap
                justify-content center
                align-content  center
                background white
                a
                    width (343/$rem)rem
                    height (264/$rem)rem
                    background #eee
                    border 2px solid #fff
                    .textTitle
                        font-size (34/$rem)rem
                        color #333
                        margin (28/$rem)rem 0 (10/$rem)rem (28/$rem)rem
                        font-weight bold
                    .text
                        display block
                        font-size (28/$rem)rem
                        margin-left (28/$rem)rem
                    img
                      width  (150 /$rem) rem
                      height (150 /$rem) rem
            .popular-items
                height (470/$rem)rem
                background white
                margin-top (20/$rem)rem
                .swiper-container
                    width 100%
                    height  (450/$rem)rem
                    .tex
                        font-size (35/$rem)rem
                        height (100/$rem)rem
                        line-height (100/$rem)rem
                        padding-left (35/$rem)rem
                    .swiper-wrapper
                        .swiper-slide
                            display flex
                            justify-content space-around
                            .itemImg
                                width (216/$rem)rem
                                height (300/$rem)rem
                                img
                                    width (216/$rem)rem
                                    height (216/$rem)rem
                                    background #eee
                                .text
                                    font-size (24/$rem)rem
                                    width (216/$rem)rem
                                    display -webkit-box
                                    overflow hidden
                                    line-height (40/$rem)rem
                                    font-family PingFangSC-Regular
                                    color #333
                                .money
                                    color #b4282d
                                    font-size (24/$rem)rem
            .limitedTime
                width 100%
                height (700/$rem)rem
                background white
                margin-top (20/$rem)rem
                .tex
                    font-size (35/$rem)rem
                    height (100/$rem)rem
                    line-height (100/$rem)rem
                    padding 0 (35/$rem)rem
                    span
                        float right
                        font-size (30/$rem)rem
                    .icon-jianto
                        font-size (30/$rem)rem
                        float right
                .itemImg
                    width (216/$rem)rem
                    height (300/$rem)rem
                    float left
                    margin-left (25/$rem)rem
                    img
                        width (216/$rem)rem
                        height (216/$rem)rem
                        background #eee
                    .money
                        display block
                        color #b4282d
                        font-size (30/$rem)rem
                        margin-left (10/$rem)rem
            .newGoogs
                width 100%
                height (834/$rem)rem
                background white
                margin-top (20/$rem)rem
                .tex
                    font-size (35/$rem)rem
                    height (100/$rem)rem
                    line-height (100/$rem)rem
                    padding 0 (35/$rem)rem
                    span
                        float right
                        font-size (30/$rem)rem
                    .icon-jianto
                        font-size (30/$rem)rem
                        float right
                        vertical-align middle
                .itemImg
                    width (216/$rem)rem
                    height (337/$rem)rem
                    float left
                    margin-left (25/$rem)rem
                    img
                        width (216/$rem)rem
                        height (216/$rem)rem
                        background #eee
                    .text
                        font-size (24/$rem)rem
                        width (216/$rem)rem
                        display -webkit-box
                        overflow hidden
                        line-height (40/$rem)rem
                        font-family PingFangSC-Regular
                        color #333
                    .money
                        color #b4282d
                        font-size (24/$rem)rem
            .recommend
                width 100%
                height (784/$rem)rem
                background white
                margin-top (20/$rem)rem
                .tex
                    font-size (35/$rem)rem
                    height (100/$rem)rem
                    line-height (100/$rem)rem
                    padding 0 (35/$rem)rem
                    span
                        float right
                        font-size (30/$rem)rem
                    .icon-jianto
                        font-size (30/$rem)rem
                        float right
                        vertical-align middle
                .itemHeader
                    display block
                    width (698/$rem)rem
                    height (280/$rem)rem
                    background antiquewhite
                    margin 0  auto (20/$rem)rem
                    display flex
                    .recommendImg
                        width (280/$rem)rem
                        height (280/$rem)rem
                        line-height (280/$rem)rem
                        text-align center
                        img
                            width (280/$rem)rem
                            height (280/$rem)rem
                    .text
                        font-size (30/$rem)rem
                        font-family PingFangSC-Regular
                        color #333
                        display flex
                        flex-direction column
                        justify-content center
                        margin-left (25/$rem)rem
                        .text-one
                            border (2/$rem)rem  solid #b4282d
                            width (120/$rem)rem
                            height (30/$rem)rem
                            font-size (21/$rem)rem
                            text-align center
                            line-height (30/$rem)rem
                            background white
                            color #b4282d
                        .title
                            width (380/$rem)rem
                            margin (10/$rem)rem 0
                        .text-two
                            color #7e8c8d
                            font-size (25/$rem)rem
                            margin-bottom (10/$rem)rem
                        .money
                            color #b4282d
                .itemImg
                    width (216/$rem)rem
                    height (337/$rem)rem
                    float left
                    margin-left (25/$rem)rem
                    img
                        width (216/$rem)rem
                        height (216/$rem)rem
                        background #eee
                    .text
                        font-size (24/$rem)rem
                        width (216/$rem)rem
                        display -webkit-box
                        overflow hidden
                        line-height (40/$rem)rem
                        font-family PingFangSC-Regular
                        color #333
                    .money
                        color #b4282d
                        font-size (24/$rem)rem
            .category-popular
                width 100%
                height (710/$rem)rem
                background white
                margin-top (20/$rem)rem
                .tex
                    font-size (35/$rem)rem
                    height (100/$rem)rem
                    line-height (100/$rem)rem
                    padding 0 (35/$rem)rem
                .category
                    width 100%
                    height (590/$rem)rem
                    display flex
                    flex-wrap wrap
                    justify-content center
                    .itemImg1
                        margin-right (10/$rem)rem
                    .itemImg
                        width (340/$rem)rem
                        height (200/$rem)rem
                        background beige
                        text-align center
                        .text
                            font-size (28/$rem)rem
                            vertical-align middle
                        img
                            width (200/$rem)rem
                            height (200/$rem)rem
                            vertical-align middle
                    .item1
                        margin-left (10/$rem)rem
                    .item
                        width (165/$rem)rem
                        height (180/$rem)rem
                        line-height (30/$rem)rem
                        background #eee
                        text-align center
                        margin-right (10/$rem)rem
                        .text
                            font-size (25/$rem)rem
                        img
                            width (120/$rem)rem
                            height (120/$rem)rem
            .employee-two
                width 100%
                height (576/$rem)rem
                display flex
                flex-wrap wrap
                justify-content center
                align-content  center
                background white
                margin-top (20/$rem)rem
                a
                    width (343/$rem)rem
                    height (264/$rem)rem
                    background #d9eeff
                    border 2px solid #fff
                    .textTitle
                        font-size (34/$rem)rem
                        color #333
                        margin (28/$rem)rem 0 (10/$rem)rem (28/$rem)rem
                        font-weight bold
                    .text
                        display block
                        font-size (28/$rem)rem
                        margin-left (28/$rem)rem
                    img
                      width  (150 /$rem) rem
                      height (150 /$rem) rem
            .recommend-two
                width 100%
                height (665/$rem)rem
                background white
                margin-top (20/$rem)rem
                .tex
                    font-size (35/$rem)rem
                    height (100/$rem)rem
                    line-height (100/$rem)rem
                    padding 0 (35/$rem)rem
                    span
                        float right
                        font-size (30/$rem)rem
                    .icon-jianto
                        font-size (30/$rem)rem
                        float right
                        vertical-align middle
                .category
                    width 100%
                    height (554/$rem)rem
                    display flex
                    flex-wrap wrap
                    justify-content center
                    align-content  center
                    a
                        width (343/$rem)rem
                        height (260/$rem)rem
                        background #f5f5dc
                        border 2px solid #fff
                        .textTitle
                            font-size (34/$rem)rem
                            color #333
                            margin (28/$rem)rem 0 (10/$rem)rem (28/$rem)rem
                            font-weight bold
                        .text
                            display block
                            font-size (28/$rem)rem
                            margin-left (28/$rem)rem
                        img
                          width  (150 /$rem) rem
                          height (150 /$rem) rem
            .special
                width 100%
                height (508/$rem)rem
                background white
                margin-top (20/$rem)rem
                .tex
                    font-size (35/$rem)rem
                    height (100/$rem)rem
                    line-height (100/$rem)rem
                    padding 0 (35/$rem)rem
                    span
                        float right
                        font-size (30/$rem)rem
                    .icon-jianto
                        font-size (30/$rem)rem
                        float right
                        vertical-align middle
                .specialContainer
                    position relative
                    .giftContainer
                        position absolute
                        left  0
                        top  0
                        display flex
                        overflow hidden
                        //width (1580/$rem)rem
                        .gift
                            width (480/$rem)rem
                            height (378/$rem)rem
                            border-radius (10/$rem)rem
                            overflow hidden
                            display flex
                            flex-direction column
                            background #eee
                            margin-left (30/$rem)rem
                            float left
                            img
                                width (480/$rem)rem
                                height (267/$rem)rem
                            .text
                                font-size (30/$rem)rem
                                width (420/$rem)rem
                                height (35/$rem)rem
                                margin (20/$rem)rem (20/$rem)rem (10/$rem)rem
                            span
                                font-size (25/$rem)rem
                                color #7e8c8d
                                margin-left (20/$rem)rem
            .goodsSwiper
                width 100%
                height (781/$rem)rem
                background white
                margin-top (20/$rem)rem
                .goodsSwiperImg
                    width 100%
                    height (370/$rem)rem
                    img
                        width 100%
                        height (370/$rem)rem
                .goodsSwiperContainer
                    width (200/$rem)rem
                    height (361/$rem)rem
                    display flex
                    padding-left (30/$rem)rem
                    box-sizing border-box
                    .goodsSwiperItem
                        width (200/$rem)rem
                        height (361/$rem)rem
                        display flex
                        flex-direction column
                        margin (20/$rem)rem (20/$rem)rem 0 0
                        img
                            width (200/$rem)rem
                            height (200/$rem)rem
                            background #eee
                            margin-bottom (20/$rem)rem
                        .text
                            display block
                            width (180/$rem)rem
                            font-size  (24/$rem)rem
                            white-space wrap
                            line-height (35/$rem)rem
                        .txt
                            font-size  (24/$rem)rem
                            color #b4282d
        .appHeader
            width 100%
            height (245/$rem)rem
            background #333333
            margin-bottom (20/$rem)rem
            display flex
            align-items center
            .copyright
                height (62/$rem)rem
                margin 0 auto
                display flex
                justify-content center
                a
                    height (62/$rem)rem
                    line-height (62/$rem)rem
                    width  (200/$rem)rem
                    font-size (30/$rem)rem
                    border 1px solid white
                    color white
                    text-align center
</style>
