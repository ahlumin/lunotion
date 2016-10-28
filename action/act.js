
function toggleOut(_c, _p, _this){
    _this.toggle(500);
    _c.toggle(750);

    $('html, body').animate({
        scrollTop: _p.offset().top
    }, 750);
    $('.artical').not(_p).fadeTo(750, 0.3);
}

function collapse(_c, _p, _rm)
{
    _rm.toggle(500);
    _c.toggle(750);
    $('.artical').not(_p).fadeTo(750, 1);
}

$(function () {
    
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

