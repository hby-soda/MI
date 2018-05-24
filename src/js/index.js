//经过购物车下拉动画
$(".topbar-cart").hover(
    function infoIn() {
        $(".cart-info").slideDown(100,function () {});
        $(".topbar-cart a").css({
            color:'#ff6700',
            backgroundColor:'#fff'
        })
    },
    function infoOut() {
        $(".cart-info").slideUp(100,function () {});
        $(".topbar-cart a").css({
            color:'#b0b0b0',
            backgroundColor:'#424242'
        })
    }
);

//搜索框获得焦点
//隐藏search-hot-words,加载下拉列表
$(".search-text").focusin( function () {
    $(".search-hot-words").hide();
    $(".search-form").find("input").css({
        borderColor: '#ff6700'
    });
    $(".search-hot-lists").show();
})
//搜索框失去焦点
//显示search-hot-words,隐藏下拉列表
$(".search-text").focusout( function () {
    $(".search-hot-words").show();
    $(".search-form").find("input").css({
        borderColor:'#e0e0e0'
    });
    $(".search-hot-lists").hide();
});

// 鼠标经过搜索按钮
$(".search-btn").hover(
    function handlerIn() {
        $(".search-btn").css({
            borderColor:'#ff6700',
            backgroundColor:'#ff6700',
            color:'#fff'
        })
    },
    function handlerOut() {
        $(".search-btn").css({
            borderColor:'#e0e0e0',
            backgroundColor:'#fff',
            color:'#616161'
        })
    }
)

