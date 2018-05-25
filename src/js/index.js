//------经过购物车下拉动画------
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
//------经过购物车下拉动画end------

//------经过导航展示下拉菜单------

$(".nav-item-1 a").mouseenter(
    function () {
        $(".navinfo").slideDown(100,function () {
            $(".nav-item-1").find(".navinfo-list").show();
            $(".navinfo-border").show()
        })
    }
);
$(".nav-item-2 a").mouseenter(
    function () {
        $(".navinfo").slideDown(100,function () {
            $(".nav-item-2").find(".navinfo-list").show();
                $(".navinfo-border").show()
        })
    }
);
$(".nav-item ").mouseleave(
    function itemOut() {
        $(".navinfo").slideUp(100, function () {
            $(".navinfo-list").hide();
            $(".navinfo-border").hide()
        })
    }
);

//------经过导航展示下拉菜单end------

//------搜索框获得焦点、失去焦点------
$(".search-text").focusin( function () {
    $(".search-hot-words").hide();//隐藏search-hot-words
    $(".search-form").find("input").css({
        borderColor: '#ff6700'
    });
    $(".search-hot-lists").show();//加载下拉列表
});

$(".search-text").focusout( function () {
    $(".search-hot-words").show();//显示search-hot-words
    $(".search-form").find("input").css({
        borderColor:'#e0e0e0'
    });
    $(".search-hot-lists").hide();//隐藏下拉列表
});
//------搜索框获得焦点、失去焦点end------

// ------鼠标经过搜索按钮------
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
// ------鼠标经过搜索按钮end------

//----------轮播图----------
var banner = {
    $banner_pager: $('#banner-pager'),
    $btn_prev: $('#btn-prev'),
    $btn_next: $('#btn-next'),
    $banner_item: $('#banner-wrap li')
};
//轮播组件
var swiper = {
    curIndex: 0,
    nlength: banner.$banner_item.length,

    init: function() {
        this.listen();
    },
    listen: function() {
        var self = this;
        banner.$btn_prev.on('click', function() {
            self.fPrev();
        });
        banner.$btn_next.on('click', function() {
            self.fNext();
        });
        banner.$banner_pager.on('click', 'li', function() {
            self.curIndex = $(this).index();
            self.fToggleActiveByIndex(self.curIndex);
        });
        setInterval(function () {
            if (self.nlength - 1 == self.curIndex) {
                self.curIndex = 0;
            } else {
                self.curIndex += 1;
            }
            self.fToggleActiveByIndex(self.curIndex);
        },5000)
    },
    fPrev: function() { //轮播向前按钮
        var self = this;
        if (0 == self.curIndex) {
            self.curIndex = self.nlength - 1;
        } else {
            self.curIndex -= 1;
        }
        self.fToggleActiveByIndex(self.curIndex);
    },
    fNext: function() { //轮播向后按钮
        var self = this;
        if (self.nlength - 1 == self.curIndex) {
            self.curIndex = 0;
        } else {
            self.curIndex += 1;
        }
        self.fToggleActiveByIndex(self.curIndex);
    },
    fToggleActiveByIndex: function(index) {
        banner.$banner_item.fadeOut().removeClass('banner-item-active').eq(index).fadeIn().addClass('banner-item-active');
        banner.$banner_pager.find('li').removeClass('active').eq(index).addClass('active');
    }
};
//初始化轮播插件
swiper.init();
//----------轮播图end----------