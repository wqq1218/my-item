<template>
    <div id="personal" class="hide ">
        <div class="personHeader">
            <div class="iconfont">
                <i class="iconfont-index"></i>
                <img src="../../assets/images/logo/logo.png" alt="">
                <div class="iconfont-right">
                    <i class="iconfont icon-fangdajing"></i>
                    <i class="iconfont-cart"></i>
                </div>
            </div>
        </div>
        <div class="personContent">
            <div class="logo2">
                <img src="../../assets/images/shops/logo2.png" alt="">
            </div>
            <div class="personLogin">
                <div class="phone">
                    <i class="iconfont icon-shouji"></i>
                    <span>手机号快捷注册</span>
                </div>
                <div class="email">
                    <i class="iconfont icon-youxiang"></i>
                    <span>邮箱账号登录</span>
                </div>
            </div>
            <div class="footIcon">
                <div class="footItem">
                    <i class="iconfont icon-yingdaicon04"></i>
                    <span>微信</span>
                </div>
                <div class="footItem footItemQq">
                    <i class="iconfont icon-qq"></i>
                    <span>QQ</span>
                </div>
                <div class="footItem">
                    <i class="iconfont icon-icon"></i>
                    <span>微博</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Ucenter"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    $rem=75
    #personal
        width 100%
        height 100%
        background #F2F5F4
        .personHeader
            width 100%
            height (44/$rem)rem
            background white
            line-height (44/$rem)rem
            vertical-align bottom
            .iconfont
                width 100%
                height (44/$rem)rem
                display flex
                justify-content center
                align-items center
                padding-left (14/$rem)rem
                box-sizing border-box
                .iconfont-index
                    background url("../../assets/images/footer/tabBar.png") 0 (-150/$rem)rem no-repeat
                    background-size (24/$rem)rem
                    width (85/$rem)rem
                    height (22/$rem)rem
                    float left
                img
                    display block
                    width (86/$rem)rem
                    height (27/$rem)rem
                    margin auto
                .iconfont-right
                    width (90/$rem)rem
                    height (32/$rem)rem
                    line-height (32/$rem)rem
                    float right
                    vertical-align bottom
                    display flex
                    align-items center
                    justify-content space-around
                    margin-right (20/$rem)rem
                    .icon-fangdajing
                        width (25/$rem)rem
                        height (25/$rem)rem
                        font-size (35/$rem)rem
                        line-height (25/$rem)rem
                    .iconfont-cart
                        background url("../../assets/images/footer/tabBar.png") 0 (-30/$rem)rem no-repeat
                        background-size (24/$rem)rem
                        width (24/$rem)rem
                        height (22/$rem)rem
        .personContent
            width 100%
            .logo2
                width 100%
                height (241/$rem)rem
                line-height (241/$rem)rem
                text-align center
                img
                    width (134/$rem)rem
                    height (45/$rem)rem
            .personLogin
                width 100%
                height (110/$rem)rem
                display flex
                flex-direction column
                justify-content space-between
                .phone
                    width (335/$rem)rem
                    height (47/$rem)rem
                    background #b4282d
                    border-radius (3/$rem)rem
                    margin 0 auto
                    display flex
                    justify-content center
                    align-items center
                    .icon-shouji
                        font-size (20/$rem)rem
                        color white
                        margin-right (10/$rem)rem
                    span
                        font-size (15/$rem)rem
                        color white
                .email
                    width (335/$rem)rem
                    height (47/$rem)rem
                    border (1/$rem)rem solid #b4282d
                    border-radius (3/$rem)rem
                    margin 0 auto
                    display flex
                    justify-content center
                    align-items center
                    .icon-youxiang
                        font-size (20/$rem)rem
                        color #b4282d
                        margin-right (10/$rem)rem
                    span
                        font-size (15/$rem)rem
                        color #b4282d
            .footIcon
                width 100%
                height (20/$rem)rem
                display flex
                justify-content center
                position absolute
                bottom (40/$rem)rem
                .footItemQq
                    border-left (1/$rem)rem solid #ccc
                    border-right (1/$rem)rem solid #ccc
                .footItem
                    width (90/$rem)rem
                    height (20/$rem)rem
                    display flex
                    justify-content center
                    align-items center
                    .iconfont
                        width (20/$rem)rem
                        height (20/$rem)rem
                        font-size (20/$rem)rem
                        margin-right (5/$rem)rem
                    span
                        font-size (14/$rem)rem
</style>
