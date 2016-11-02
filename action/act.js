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

}

$(function () {
    
    var _readMore = {
        template: '<a class="rdmore">《read more》</a>'
    };

    var _collapse = {
        template: '<a class="collapse">《collapse》</a>'
    };

    var _tags = {
        template: '<ul class="tags"><li v-for="one in taglist">{{one}}</li></ul>',
        props: {
            taglist:Array
        }
    };

    var _content = {
        template: '<div v-html="paragraph"></div>',
        props: {
            paragraph:String
        }
    };

    var _artical = {
        template: '#artical-template',
        components: {
            'readmore-btn': _readMore,
            'collapse-btn': _collapse,
            'tags-btn': _tags,
            'content-template':_content
        },
        props: {
            artical: Object
        }
    }

    var _thedata = [
        {
            title: 'LINQ與練Q',
            date: '2016-10-26',
            cover: 'images/hidapi.jpg',
            summary: '<p>今天有前端同事跑來問我"什麼是練Q"</p><p>當時一時反應不過來,所以決定寫一篇文記錄記錄</p>',
            tags: ['LINQ','.NET'],
            content: '<p>LINQ(音同Link)是由微軟所發展出來的整合查詢語言,封裝在.NET Framework</p><p>它讓開發者能用他們所熟悉的語言(C#, VB或其他)存取物件集合或資料庫</p><p>LINQ的使用方法有 Query Syntax 與 Method Syntax 兩種</p><p>編譯時, Query Syntax 最終會被編譯成 Method Syntax</p><p>Query Syntax 對於對認識 SQL 的人來說會覺得"很像SQL"</p><p>因此我的前端同事們對 LINQ 的印象就是"很像SQL的那個"</p><p>Method Syntax 即是使用 Enumerable 對 IEnumerable<T> 的擴充</p><p>詳細可以拜讀in91大大的快樂學LINQ系列文章有很詳細的說明</p><p>雖然 LINQ 在 MSDN 的說明是標榜著易於學習的，但他背後的學問可是非常大的</p><p>從匿名型別, 為什麼要有var, 委派, Lambda ,一直到 foreach 的原理</p><p>以及 Enumerable 與 IEnumerable,IEnumerable<T> 的關係乃至最後的 Fluent Programming</p><p>以上切扯到一拖拉庫的東西不會太難，但好像也不是那麼好懂</p><p>最後還是要推薦一下in91大的系列文章會有非常好的解釋</p>'
        }];

    new Vue({
        el: '.waterfall',
        data: {
            data: _thedata
        },
        components: {
            'my-artical':_artical
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

