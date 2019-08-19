<template>
    <div id="category">
        <div class="categoryHeader">
            <div class="categorySearch">
                <i class="iconfont icon-fangdajing"></i>
                <span class="text">搜索商品，共99件好物</span>
            </div>
        </div>
        <div class="categoryContent">
            <div class="categoryList">
                <ul class="categoryArea">
                    <li class="categoryItem selectItem red">推荐专区</li>
                    <li class="categoryItem">推荐专区</li>
                    <li class="categoryItem">推荐专区</li>
                    <li class="categoryItem">推荐专区</li>
                    <li class="categoryItem">推荐专区</li>
                    <li class="categoryItem">推荐专区</li>
                    <li class="categoryItem">推荐专区</li>
                    <li class="categoryItem">推荐专区</li>
                    <li class="categoryItem">推荐专区</li>
                    <li class="categoryItem">推荐专区</li>
                    <li class="categoryItem">推荐专区</li>
                    <li class="categoryItem">推荐专区</li>
                    <li class="categoryItem">推荐专区</li>
                </ul>
            </div>
            <div class="categorys">
                <div class="cate">
                    <div class="categoryLogo">
                        <img src="../../assets/images/shops/category-1.jpg" alt="">
                    </div>
                </div>
                <div class="categorygoods">
                    <a href="javascript:;">
                        <img src="../../assets/images/shops/category-2.png" alt="">
                        <span>优选美食两件</span>
                    </a>
                    <a href="javascript:;">
                        <img src="../../assets/images/shops/category-2.png" alt="">
                        <span>优选美食两件</span>
                    </a>
                    <a href="javascript:;">
                        <img src="../../assets/images/shops/category-2.png" alt="">
                        <span>优选美食两件</span>
                    </a>
                    <a href="javascript:;">
                        <img src="../../assets/images/shops/category-2.png" alt="">
                        <span>优选美食两件</span>
                    </a>
                    <a href="javascript:;">
                        <img src="../../assets/images/shops/category-2.png" alt="">
                        <span>优选美食两件</span>
                    </a>
                    <a href="javascript:;">
                        <img src="../../assets/images/shops/category-2.png" alt="">
                        <span>优选美食两件</span>
                    </a>
                    <a href="javascript:;">
                        <img src="../../assets/images/shops/category-2.png" alt="">
                        <span>优选美食两件</span>
                    </a>
                    <a href="javascript:;">
                        <img src="../../assets/images/shops/category-2.png" alt="">
                        <span>优选美食两件</span>
                    </a>
                    <a href="javascript:;">
                        <img src="../../assets/images/shops/category-2.png" alt="">
                        <span>优选美食两件</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Category"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    $rem=75
    #category
        width 100%
        .categoryHeader
            height (88/$rem)rem
            width 100%
            border-bottom (1/$rem)rem solid #ccc
            display flex
            align-items center
            .categorySearch
                width 90%
                height (56/$rem)rem
                line-height (56/$rem)rem
                text-align center
                border-radius (10/$rem)rem
                background #eee
                margin 0 auto
                .text
                    font-size (30/$rem)rem
                    color #333
                    vertical-align top
                .icon-fangdajing
                    display inline-block
                    font-size (50/$rem)rem
                    vertical-align top
        .categoryContent
            width 90%
            margin-top (20/$rem)rem
            .categoryList
                width (162/$rem)rem
                height (1148/$rem)rem
                float left
                .categoryArea
                    width (162/$rem)rem
                    height (1120/$rem)rem
                    display flex
                    flex-direction column
                    justify-content space-around
                    .categoryItem
                        font-size (29/$rem)rem
                        width (162/$rem)rem
                        height (50/$rem)rem
                        text-align center
                        line-height (50/$rem)rem

                    .red::before
                        width (6/$rem)rem
                        height (50/$rem)rem
                        background #b4282d
                        display inline-block
                        content ''
                        vertical-align middle
                        float left
                        &.selectItem
                            color #b4282d
            .categorys
                width (588/$rem)rem
                height (1148/$rem)rem
                margin-left (162/$rem)rem
                .cate
                    width (528/$rem)rem
                    height (192/$rem)rem
                    position relative
                    .categoryLogo
                        width (528/$rem)rem
                        height (192/$rem)rem
                        position absolute
                        left (30/$rem)rem
                        img
                            width (528/$rem)rem
                            height (192/$rem)rem
                .categorygoods
                    width (528/$rem)rem
                    display flex
                    flex-wrap wrap
                    justify-content space-around
                    align-content space-around
                    margin (20/$rem)rem 0 0 (20/$rem)rem
                    a
                        width (144/$rem)rem
                        height (216/$rem)rem
                        display flex
                        flex-direction column
                        img
                            width (144/$rem)rem
                            height (144/$rem)rem
                        span
                            font-size (25/$rem)rem
                            text-align center
</style>
