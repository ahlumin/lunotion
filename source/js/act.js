
//展開
function toggleOut(_c, _p, _this){
    _this.toggle(250);
    _c.toggle(250);

    $('html, body').animate({
        scrollTop: _p.offset().top
    }, 750);

    _p.css('z-index', 10001);

    $('.artical').not(_p).fadeTo(750, 0.3);
    $('.lightpad').show();
}

//收合
function collapse(_c, _p, _rm)
{
    _rm.toggle(250);
    _c.toggle(250);
    _p.css('z-index', 9999);
    $('.artical').not(_p).fadeTo(750, 1);
    $('.lightpad').hide();

    $('html, body').animate({
        scrollTop: _p.offset().top
    }, 750);
}


$(function () {

    new Vue({
        el: '.waterfall',
        data: {
            data: data
        },
        components: {
            'my-artical':require('artical')
        }
    });

    $('.rdmore').on('click', function () {
        var _c = $(this).parent().find('.content');
        var _p = $(this).parent();
        toggleOut(_c, _p, $(this));
    });

    $('.collapse').on('click', function () {
        var _c = $(this).parent().parent().find('.content');
        var _p = $(this).parent().parent();
        var _rm = _p.find('.rdmore')
        collapse(_c, _p, _rm);
    });
});

