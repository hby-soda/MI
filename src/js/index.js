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
var search = {
    init:function () {
        this.listen()
    },
    listen: function () {
        hoveron();
        $(".search-text").focusin( function () {
            $(".search-hot-words").hide();//隐藏search-hot-words
            $(".search-form").find("input").css({
                borderColor: '#ff6700'
            });
            $(".search-hot-lists").show();//加载下拉列表
            hoverhide();
        });
        $(".search-text").focusout( function () {
            $(".search-hot-words").show();//显示search-hot-words
            $(".search-form").find("input").css({
                borderColor:'#e0e0e0'
            });
            $(".search-hot-lists").hide();//隐藏下拉列表
            hoveron();
        });
        function hoveron() {
            $(".search-form").hover(
                function () {
                    $(".search-form").find("input").css({
                        borderColor: '#b0b0b0'
                    });
                },
                function () {
                    $(".search-form").find("input").css({
                        borderColor: '#e0e0e0'
                    });
                },
            )
        };
        function hoverhide() {
            $(".search-form").hover(
                function () {
                    $(".search-form").find("input").css({
                        borderColor: '#ff6700'
                    });
                },
                function () {
                    $(".search-form").find("input").css({
                        borderColor: '#ff6700'
                    });
                },
            )
        };
    }
};
search.init();
// //------搜索框获得焦点、失去焦点end------


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

//----------小米闪购彩虹列表切换----------
$(function () {
    $(".more .control-prev").click(function () {
            $(".xm-flashPurchase-list").css({
                marginLeft:'0px'
            });
            $(this).addClass("control-disabled");
            $(this).removeClass("active");
            $(".more .control-next").addClass("active");
            $(".more .control-next").removeClass("control-disabled")
        }
    );
    $(".more .control-next").click(function () {
            $(".xm-flashPurchase-list").css({
                marginLeft:'-496px'
            });
            $(this).addClass("control-disabled");
            $(this).removeClass("active");
            $(".more .control-prev").addClass("active");
            $(".more .control-prev").removeClass("control-disabled")
        }
    )
})
//----------小米闪购彩虹列表切换end----------
//----------回到顶部----------
$(function () {
    $("#bar-s-totop").hide();
    $(function () {
        $(window).scroll(function () {
            if ( $(window).scrollTop() > $(window).height() ){
                $("#bar-s-totop").fadeIn(300);
            }
            else {$("#bar-s-totop").fadeOut(200);}
        })
    });
    $("#bar-s-totop").click(function () {
        $('body,html').animate({scrollTop:0},0);
        return flase;
    })
});
//----------回到顶部end----------
//----------产品列表切换end----------
$(function () {
    $("#homeelec .tab-list li").hover(
        function () {
            var ind = $(this).index();
            $("#homeelec .tab-list li.tab-active").removeClass("tab-active");
            $(this).addClass("tab-active");
            $("#homeelec .row .span16 ul").addClass("hide");
            $("#homeelec .row .span16 ul").eq(ind).removeClass("hide")
        },
        function () {
        }
    );
    $("#smart .tab-list li").hover(
        function () {
            var ind = $(this).index();
            $("#smart .tab-list li.tab-active").removeClass("tab-active");
            $(this).addClass("tab-active");
            $("#smart .row .span16 ul").addClass("hide");
            $("#smart .row .span16 ul").eq(ind).removeClass("hide")
        },
        function () {
        }
    );
    $("#math .tab-list li").hover(
        function () {
            var ind = $(this).index();
            $("#math .tab-list li.tab-active").removeClass("tab-active");
            $(this).addClass("tab-active");
            $("#math .row .span16 ul").addClass("hide");
            $("#math .row .span16 ul").eq(ind).removeClass("hide")
        },
        function () {
        }
    );
    $("#accessories .tab-list li").hover(
        function () {
            var ind = $(this).index();
            $("#accessories .tab-list li.tab-active").removeClass("tab-active");
            $(this).addClass("tab-active");
            $("#accessories .row .span16 ul").addClass("hide");
            $("#accessories .row .span16 ul").eq(ind).removeClass("hide")
        },
        function () {
        }
    );
    $("#around .tab-list li").hover(
        function () {
            var ind = $(this).index();
            $("#around .tab-list li.tab-active").removeClass("tab-active");
            $(this).addClass("tab-active");
            $("#around .row .span16 ul").addClass("hide");
            $("#around .row .span16 ul").eq(ind).removeClass("hide")
        },
        function () {
        }
    )
});
//----------产品列表切换end----------