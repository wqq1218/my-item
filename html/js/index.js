window.onload = function() {
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        autoplay:true,
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    })

}
var footerItems=document.querySelectorAll('.footerContainer a')
var hide = document.getElementsByClassName('hide')

for (let i = 0; i < footerItems.length; i++) {
    footerItems[i].addEventListener('click',()=>{
        for (let j = 0; j < hide.length; j++) {
            hide[j].classList.remove('show')
        }
        hide[i].classList.add('show')
    })
}

var login=document.querySelector('.footerContainer .login')
var  meta=document.getElementsByTagName("meta")
var  footerContainer=document.getElementsByClassName('footerContainer')
login.addEventListener('click',()=>{
    meta[1]["content"]="width=device-width, initial-scale=1,user-scalable=no"
    footerContainer[0].classList.add('show')
})


