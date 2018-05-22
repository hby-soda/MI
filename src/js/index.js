//搜索框获得焦点
$(".search-text").focusin( function () {
    $(".search-hot-words").hide();
    $(".search-form").find("input").css({
        borderColor : '#ff6700'
    });
});
$(".search-text").focusout( function () {
    $(".search-hot-words").show();
    $(".search-form").find("input").css({
        borderColor : '#e0e0e0'
    })
});

//鼠标经过搜索框边框颜色改变

$(".search-text").hover(handIn, handOut);
function handIn() {
    $(".search-text").addClass("addborder");
    $(".search-btn").addClass("addborder")
}
function handOut() {
    $(".search-text").removeClass("addborder");
    $(".search-btn").removeClass("addborder")
}

// 鼠标经过搜索按钮
$(".search-btn").hover(handlerIn, handlerOut);
function handlerIn() {
    $(".search-btn").addClass("active")
}
function handlerOut() {
    $(".search-btn").removeClass("active")
}