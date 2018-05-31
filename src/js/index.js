//------经过购物车下拉动画------
$(function () {
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
    )
});
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
$(function () {
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
    }
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
    }
});
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
    $(".site-main .more .control-prev").click(function () {
            $(".xm-flashPurchase-list").css({
                marginLeft:'0px'
            });
            $(this).addClass("control-disabled");
            $(this).removeClass("active");
            $(".site-main .more .control-next").addClass("active");
            $(".site-main .more .control-next").removeClass("control-disabled")
        }
    );
    $(".site-main .more .control-next").click(function () {
            $(".xm-flashPurchase-list").css({
                marginLeft:'-496px'
            });
            $(this).addClass("control-disabled");
            $(this).removeClass("active");
            $(".site-main .more .control-prev").addClass("active");
            $(".site-main .more .control-prev").removeClass("control-disabled")
        }
    )
});
//----------小米闪购彩虹列表切换end----------
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
//----------为你推荐列表切换----------
$( function() {
    $("#recommend .more .control-prev").click(function () {
        $(".xm-recommend-list").css('marginLeft',function () {
            if ($(".xm-recommend-list").css('marginLeft') == '-3720px') {
                return '-2480px';
            }else if ($(".xm-recommend-list").css('marginLeft') == '-2480px') {
                return '-1240px';
            }else if ($(".xm-recommend-list").css('marginLeft') == '-1240px') {
                return '0px';
            }
        });
        if ($(".xm-recommend-list").css('marginLeft') == '-2480px' || $(".xm-recommend-list").css('marginLeft') == '-3720px') {
            $("#recommend .more .control-next").addClass("active");
            $("#recommend .more .control-prev").addClass("active");
            $("#recommend .more .control-prev").removeClass("control-disabled");
            $("#recommend .more .control-next").removeClass("control-disabled");
        }else {
            $("#recommend .more .control-prev").addClass("control-disabled");
            $("#recommend .more .control-prev").removeClass("active");
            $("#recommend .more .control-next").addClass("active")
        }
    });
    $("#recommend .more .control-next").click(function () {
        $(".xm-recommend-list").css('marginLeft', function () {
            if ($(".xm-recommend-list").css('marginLeft') == '0px') {
                return '-1240px';
            }else if ($(".xm-recommend-list").css('marginLeft') == '-1240px') {
                return '-2480px';
            }else if ($(".xm-recommend-list").css('marginLeft') == '-2480px') {
                return '-3720px';
            }
        });
        if ($(".xm-recommend-list").css('marginLeft') == '0px' || $(".xm-recommend-list").css('marginLeft') == '-1240px') {
            $("#recommend .more .control-next").addClass("active");
            $("#recommend .more .control-prev").addClass("active");
            $("#recommend .more .control-prev").removeClass("control-disabled");
            $("#recommend .more .control-next").removeClass("control-disabled");
        }else {
            $("#recommend .more .control-next").addClass("control-disabled");
            $("#recommend .more .control-next").removeClass("active");
            $("#recommend .more .control-prev").addClass("active")
        }
    });
});
//----------为你推荐列表切换end----------

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

//----------内容轮播----------
$(function () {
    $(function(){
        $(".content-item-book .control-prev").click(function () {
            $(".content-item-book .item-list").css('marginLeft',function () {
                if ($(".content-item-book .item-list").css('marginLeft') == '-592px') {
                    return '-296px';
                }else if ($(".content-item-book .item-list").css('marginLeft') == '-296px') {
                    return '0px';
                }else {
                    return '0px';
                }
            });
            if ($(".content-item-book .item-list").css('marginLeft') == '-296px'){
                $(".content-item-book .control-prev").addClass("control-disabled");
                $(".content-item-book .pager").eq(0).addClass("pager-active");
                $(".content-item-book .pager").eq(1).removeClass("pager-active")
            }else if ($(".content-item-book .item-list").css('marginLeft') == '-592px'){
                $(".content-item-book .control-next").removeClass("control-disabled");
                $(".content-item-book .pager").eq(1).addClass("pager-active");
                $(".content-item-book .pager").eq(2).removeClass("pager-active")
            }
        });
        $(".content-item-book .control-next").click(function () {
            $(".content-item-book .item-list").css('marginLeft',function () {
                if ($(".content-item-book .item-list").css('marginLeft') == '0px') {
                    return '-296px';
                }else if ($(".content-item-book .item-list").css('marginLeft') == '-296px') {
                    return '-592px';
                }else {
                    return '-592px';
                }
            });
            if ($(".content-item-book .item-list").css('marginLeft') == '-296px'){
                $(".content-item-book .control-next").addClass("control-disabled");
                $(".content-item-book .pager").eq(2).addClass("pager-active");
                $(".content-item-book .pager").eq(1).removeClass("pager-active")
            }else if ($(".content-item-book .item-list").css('marginLeft') == '0px'){
                $(".content-item-book .control-prev").removeClass("control-disabled");
                $(".content-item-book .pager").eq(1).addClass("pager-active");
                $(".content-item-book .pager").eq(0).removeClass("pager-active")
            }
        });
        $(".content-item-book .pager").eq(0).click(function () {
            $(".content-item-book .item-list").css('marginLeft','0px');
            $(".content-item-book .control-prev").addClass("control-disabled");
            $(".content-item-book .pager").eq(0).addClass("pager-active");
            $(".content-item-book .pager").eq(1).removeClass("pager-active");
            $(".content-item-book .pager").eq(2).removeClass("pager-active")
        });
        $(".content-item-book .pager").eq(1).click(function () {
            $(".content-item-book .item-list").css('marginLeft','-296px');
            $(".content-item-book .control-prev").removeClass("control-disabled");
            $(".content-item-book .control-next").removeClass("control-disabled");
            $(".content-item-book .pager").eq(1).addClass("pager-active");
            $(".content-item-book .pager").eq(0).removeClass("pager-active");
            $(".content-item-book .pager").eq(2).removeClass("pager-active")
        });
        $(".content-item-book .pager").eq(2).click(function () {
            $(".content-item-book .item-list").css('marginLeft','-592px');
            $(".content-item-book .control-next").addClass("control-disabled");
            $(".content-item-book .pager").eq(2).addClass("pager-active");
            $(".content-item-book .pager").eq(1).removeClass("pager-active");
            $(".content-item-book .pager").eq(0).removeClass("pager-active")
        });
    });
    $(function() {
        $(".content-item-theme .control-prev").click(function () {
            $(".content-item-theme .item-list").css('marginLeft',function () {
                if ($(".content-item-theme .item-list").css('marginLeft') == '-888px')  {
                    return '-592px';
                }
                else if ($(".content-item-theme .item-list").css('marginLeft') == '-592px') {
                    return '-296px';
                }else if ($(".content-item-theme .item-list").css('marginLeft') == '-296px') {
                    return '0px';
                }else {
                    return '0px';
                }
            });
            if ($(".content-item-theme .item-list").css('marginLeft') == '-296px'){
                $(".content-item-theme .control-prev").addClass("control-disabled");
                $(".content-item-theme .pager").eq(0).addClass("pager-active");
                $(".content-item-theme .pager").eq(1).removeClass("pager-active")
            }else if ($(".content-item-theme .item-list").css('marginLeft') == '-592px'){
                $(".content-item-theme .pager").eq(1).addClass("pager-active");
                $(".content-item-theme .pager").eq(2).removeClass("pager-active")
            }else if ($(".content-item-theme .item-list").css('marginLeft') == '-888px'){
                $(".content-item-theme .control-next").removeClass("control-disabled");
                $(".content-item-theme .pager").eq(2).addClass("pager-active");
                $(".content-item-theme .pager").eq(3).removeClass("pager-active")
            }
        });
        $(".content-item-theme .control-next").click(function () {
            $(".content-item-theme .item-list").css('marginLeft',function () {
                if ($(".content-item-theme .item-list").css('marginLeft') == '0px') {
                    return '-296px';
                }else if ($(".content-item-theme .item-list").css('marginLeft') == '-296px') {
                    return '-592px';
                }else if ($(".content-item-theme .item-list").css('marginLeft') == '-592px') {
                    return '-888px';
                }else {
                    return '-888px';
                }
            });
            if ($(".content-item-theme .item-list").css('marginLeft') == '-592px'){
                $(".content-item-theme .control-next").addClass("control-disabled");
                $(".content-item-theme .pager").eq(3).addClass("pager-active");
                $(".content-item-theme .pager").eq(2).removeClass("pager-active")
            }else if ($(".content-item-theme .item-list").css('marginLeft') == '-296px'){
                $(".content-item-theme .pager").eq(2).addClass("pager-active");
                $(".content-item-theme .pager").eq(1).removeClass("pager-active")
            }else if ($(".content-item-theme .item-list").css('marginLeft') == '0px'){
                $(".content-item-theme .control-prev").removeClass("control-disabled");
                $(".content-item-theme .pager").eq(1).addClass("pager-active");
                $(".content-item-theme .pager").eq(0).removeClass("pager-active")
            }
        });
        $(".content-item-theme .pager").eq(0).click(function () {
            $(".content-item-theme .item-list").css('marginLeft','0px');
            $(".content-item-theme .control-prev").addClass("control-disabled");
            $(".content-item-theme .pager").eq(0).addClass("pager-active");
            $(".content-item-theme .pager").eq(1).removeClass("pager-active");
            $(".content-item-theme .pager").eq(2).removeClass("pager-active");
            $(".content-item-theme .pager").eq(3).removeClass("pager-active")
        });
        $(".content-item-theme .pager").eq(1).click(function () {
            $(".content-item-theme .item-list").css('marginLeft','-296px');
            $(".content-item-theme .control-prev").removeClass("control-disabled");
            $(".content-item-theme .control-next").removeClass("control-disabled");
            $(".content-item-theme .pager").eq(1).addClass("pager-active");
            $(".content-item-theme .pager").eq(0).removeClass("pager-active");
            $(".content-item-theme .pager").eq(2).removeClass("pager-active");
            $(".content-item-theme .pager").eq(3).removeClass("pager-active")
        });
        $(".content-item-theme .pager").eq(2).click(function () {
            $(".content-item-theme .item-list").css('marginLeft','-592px');
            $(".content-item-theme .control-prev").removeClass("control-disabled");
            $(".content-item-theme .control-next").removeClass("control-disabled");
            $(".content-item-theme .pager").eq(2).addClass("pager-active");
            $(".content-item-theme .pager").eq(1).removeClass("pager-active");
            $(".content-item-theme .pager").eq(0).removeClass("pager-active");
            $(".content-item-theme .pager").eq(3).removeClass("pager-active")
        });
        $(".content-item-theme .pager").eq(3).click(function () {
            $(".content-item-theme .item-list").css('marginLeft','-888px');
            $(".content-item-theme .control-next").addClass("control-disabled");
            $(".content-item-theme .pager").eq(3).addClass("pager-active");
            $(".content-item-theme .pager").eq(1).removeClass("pager-active");
            $(".content-item-theme .pager").eq(0).removeClass("pager-active");
            $(".content-item-theme .pager").eq(2).removeClass("pager-active")
        });
    });
    $(function() {
        $(".content-item-game .control-prev").click(function () {
            $(".content-item-game .item-list").css('marginLeft',function () {
                if ($(".content-item-game .item-list").css('marginLeft') == '-888px')  {
                    return '-592px';
                }
                else if ($(".content-item-game .item-list").css('marginLeft') == '-592px') {
                    return '-296px';
                }else if ($(".content-item-game .item-list").css('marginLeft') == '-296px') {
                    return '0px';
                }else {
                    return '0px';
                }
            });
            if ($(".content-item-game .item-list").css('marginLeft') == '-296px'){
                $(".content-item-game .control-prev").addClass("control-disabled");
                $(".content-item-game .pager").eq(0).addClass("pager-active");
                $(".content-item-game .pager").eq(1).removeClass("pager-active")
            }else if ($(".content-item-game .item-list").css('marginLeft') == '-592px'){
                $(".content-item-game .pager").eq(1).addClass("pager-active");
                $(".content-item-game .pager").eq(2).removeClass("pager-active")
            }else if ($(".content-item-game .item-list").css('marginLeft') == '-888px'){
                $(".content-item-game .control-next").removeClass("control-disabled");
                $(".content-item-game .pager").eq(2).addClass("pager-active");
                $(".content-item-game .pager").eq(3).removeClass("pager-active")
            }
        });
        $(".content-item-game .control-next").click(function () {
            $(".content-item-game .item-list").css('marginLeft',function () {
                if ($(".content-item-game .item-list").css('marginLeft') == '0px') {
                    return '-296px';
                }else if ($(".content-item-game .item-list").css('marginLeft') == '-296px') {
                    return '-592px';
                }else if ($(".content-item-game .item-list").css('marginLeft') == '-592px') {
                    return '-888px';
                }else {
                    return '-888px';
                }
            });
            if ($(".content-item-game .item-list").css('marginLeft') == '-592px'){
                $(".content-item-game .control-next").addClass("control-disabled");
                $(".content-item-game .pager").eq(3).addClass("pager-active");
                $(".content-item-game .pager").eq(2).removeClass("pager-active")
            }else if ($(".content-item-game .item-list").css('marginLeft') == '-296px'){
                $(".content-item-game .pager").eq(2).addClass("pager-active");
                $(".content-item-game .pager").eq(1).removeClass("pager-active")
            }else if ($(".content-item-game .item-list").css('marginLeft') == '0px'){
                $(".content-item-game .control-prev").removeClass("control-disabled");
                $(".content-item-game .pager").eq(1).addClass("pager-active");
                $(".content-item-game .pager").eq(0).removeClass("pager-active")
            }
        });
        $(".content-item-game .pager").eq(0).click(function () {
            $(".content-item-game .item-list").css('marginLeft','0px');
            $(".content-item-game .control-prev").addClass("control-disabled");
            $(".content-item-game .pager").eq(0).addClass("pager-active");
            $(".content-item-game .pager").eq(1).removeClass("pager-active");
            $(".content-item-game .pager").eq(2).removeClass("pager-active");
            $(".content-item-game .pager").eq(3).removeClass("pager-active")
        });
        $(".content-item-game .pager").eq(1).click(function () {
            $(".content-item-game .item-list").css('marginLeft','-296px');
            $(".content-item-game .control-prev").removeClass("control-disabled");
            $(".content-item-game .control-next").removeClass("control-disabled");
            $(".content-item-game .pager").eq(1).addClass("pager-active");
            $(".content-item-game .pager").eq(0).removeClass("pager-active");
            $(".content-item-game .pager").eq(2).removeClass("pager-active");
            $(".content-item-game .pager").eq(3).removeClass("pager-active")
        });
        $(".content-item-game .pager").eq(2).click(function () {
            $(".content-item-game .item-list").css('marginLeft','-592px');
            $(".content-item-game .control-prev").removeClass("control-disabled");
            $(".content-item-game .control-next").removeClass("control-disabled");
            $(".content-item-game .pager").eq(2).addClass("pager-active");
            $(".content-item-game .pager").eq(1).removeClass("pager-active");
            $(".content-item-game .pager").eq(0).removeClass("pager-active");
            $(".content-item-game .pager").eq(3).removeClass("pager-active")
        });
        $(".content-item-game .pager").eq(3).click(function () {
            $(".content-item-game .item-list").css('marginLeft','-888px');
            $(".content-item-game .control-next").addClass("control-disabled");
            $(".content-item-game .pager").eq(3).addClass("pager-active");
            $(".content-item-game .pager").eq(1).removeClass("pager-active");
            $(".content-item-game .pager").eq(0).removeClass("pager-active");
            $(".content-item-game .pager").eq(2).removeClass("pager-active")
        });
    });
    $(function() {
        $(".content-item-app .control-prev").click(function () {
            $(".content-item-app .item-list").css('marginLeft',function () {
                if ($(".content-item-app .item-list").css('marginLeft') == '-888px')  {
                    return '-592px';
                }
                else if ($(".content-item-app .item-list").css('marginLeft') == '-592px') {
                    return '-296px';
                }else if ($(".content-item-app .item-list").css('marginLeft') == '-296px') {
                    return '0px';
                }else {
                    return '0px';
                }
            });
            if ($(".content-item-app .item-list").css('marginLeft') == '-296px'){
                $(".content-item-app .control-prev").addClass("control-disabled");
                $(".content-item-app .pager").eq(0).addClass("pager-active");
                $(".content-item-app .pager").eq(1).removeClass("pager-active")
            }else if ($(".content-item-app .item-list").css('marginLeft') == '-592px'){
                $(".content-item-app .pager").eq(1).addClass("pager-active");
                $(".content-item-app .pager").eq(2).removeClass("pager-active")
            }else if ($(".content-item-app .item-list").css('marginLeft') == '-888px'){
                $(".content-item-app .control-next").removeClass("control-disabled");
                $(".content-item-app .pager").eq(2).addClass("pager-active");
                $(".content-item-app .pager").eq(3).removeClass("pager-active")
            }
        });
        $(".content-item-app .control-next").click(function () {
            $(".content-item-app .item-list").css('marginLeft',function () {
                if ($(".content-item-app .item-list").css('marginLeft') == '0px') {
                    return '-296px';
                }else if ($(".content-item-app .item-list").css('marginLeft') == '-296px') {
                    return '-592px';
                }else if ($(".content-item-app .item-list").css('marginLeft') == '-592px') {
                    return '-888px';
                }else {
                    return '-888px';
                }
            });
            if ($(".content-item-app .item-list").css('marginLeft') == '-592px'){
                $(".content-item-app .control-next").addClass("control-disabled");
                $(".content-item-app .pager").eq(3).addClass("pager-active");
                $(".content-item-app .pager").eq(2).removeClass("pager-active")
            }else if ($(".content-item-app .item-list").css('marginLeft') == '-296px'){
                $(".content-item-app .pager").eq(2).addClass("pager-active");
                $(".content-item-app .pager").eq(1).removeClass("pager-active")
            }else if ($(".content-item-app .item-list").css('marginLeft') == '0px'){
                $(".content-item-app .control-prev").removeClass("control-disabled");
                $(".content-item-app .pager").eq(1).addClass("pager-active");
                $(".content-item-app .pager").eq(0).removeClass("pager-active")
            }
        });
        $(".content-item-app .pager").eq(0).click(function () {
            $(".content-item-app .item-list").css('marginLeft','0px');
            $(".content-item-app .control-prev").addClass("control-disabled");
            $(".content-item-app .pager").eq(0).addClass("pager-active");
            $(".content-item-app .pager").eq(1).removeClass("pager-active");
            $(".content-item-app .pager").eq(2).removeClass("pager-active");
            $(".content-item-app .pager").eq(3).removeClass("pager-active")
        });
        $(".content-item-app .pager").eq(1).click(function () {
            $(".content-item-app .item-list").css('marginLeft','-296px');
            $(".content-item-app .control-prev").removeClass("control-disabled");
            $(".content-item-app .control-next").removeClass("control-disabled");
            $(".content-item-app .pager").eq(1).addClass("pager-active");
            $(".content-item-app .pager").eq(0).removeClass("pager-active");
            $(".content-item-app .pager").eq(2).removeClass("pager-active");
            $(".content-item-app .pager").eq(3).removeClass("pager-active")
        });
        $(".content-item-app .pager").eq(2).click(function () {
            $(".content-item-app .item-list").css('marginLeft','-592px');
            $(".content-item-app .control-prev").removeClass("control-disabled");
            $(".content-item-app .control-next").removeClass("control-disabled");
            $(".content-item-app .pager").eq(2).addClass("pager-active");
            $(".content-item-app .pager").eq(1).removeClass("pager-active");
            $(".content-item-app .pager").eq(0).removeClass("pager-active");
            $(".content-item-app .pager").eq(3).removeClass("pager-active")
        });
        $(".content-item-app .pager").eq(3).click(function () {
            $(".content-item-app .item-list").css('marginLeft','-888px');
            $(".content-item-app .control-next").addClass("control-disabled");
            $(".content-item-app .pager").eq(3).addClass("pager-active");
            $(".content-item-app .pager").eq(1).removeClass("pager-active");
            $(".content-item-app .pager").eq(0).removeClass("pager-active");
            $(".content-item-app .pager").eq(2).removeClass("pager-active")
        });
    });
});

//----------内容轮播end----------