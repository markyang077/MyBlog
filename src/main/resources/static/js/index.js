
    //填充文章
    function putInArticle(data) {
    $('.articles').empty();
    var articles = $('.articles');
    $.each(data, function (index, obj) {
        if(index != (data.length) - 1){
            var center = $('<div class="center">' +
                '<header class="article-header">' +
                '<h1 itemprop="name">' +
                '<a class="article-title" href="' + obj['thisArticleUrl'] + '" target="_blank">' + obj['articleTitle'] + '</a>' +
                '</h1>' +
                '<div class="article-meta row">' +
                '<span class="articleType am-badge am-badge-success">' + obj['articleType'] + '</span>' +
                '<div class="articlePublishDate">' +
                '<i class="am-icon-calendar"><a class="linkColor" href="/archives?archive=' + obj['publishDate'] + '"> ' + obj['publishDate'] + '</a></i>' +
                '</div>' +
                '<div class="originalAuthor">' +
                '<i class="am-icon-user"> ' + obj['originalAuthor'] + '</i>' +
                '</div>' +
                '<div class="categories">' +
                '<i class="am-icon-folder"><a class="linkColor" href="/categories?category=' + obj['articleCategories'] + '"> ' + obj['articleCategories'] + '</a></i>' +
                '</div>' +
                '</div>' +
                '</header>' +
                '<div class="article-entry">' +
                obj['articleTabloid'] +
                '</div>' +
                '<div class="read-all">' +
                '<a href="' + obj['thisArticleUrl'] + '" target="_blank">阅读全文 <i class="am-icon-angle-double-right"></i></a>' +
                '</div>' +
                '<hr>' +
                '<div class="article-tags">' +

               '</div>' +
                '</div>');
            articles.append(center);
            var articleTags = $('.article-tags');
            for(var i=0;i<obj['articleTags'].length;i++){
                var articleTag = $('<i class="am-icon-tag"><a class="tag" href="/tags?tag=' + obj['articleTags'][i] + '"> ' + obj['articleTags'][i] + '</a></i>');
                articleTags.eq(index).append(articleTag);
            }
            // var likes = $('<span class="likes"><i class="am-icon-heart"> ' + obj['likes'] + '个喜欢</i></span>');
            // articleTags.eq(index).append(likes);
        }
    })

}

    //填充最新评论
    function putInNewComment(data) {
        var newComment = $('.new-comment');
        newComment.empty();
        var listNews = $('<div data-am-widget="list_news" class="am-list-news am-list-news-default" ></div>');
        var newCommentTitle = $('<div class="am-list-news-hd am-cf">' +
            '<a class="newComments">' +
            '<h2 style="color: #110101">最新评论</h2>' +
            '</a>' +
            '</div>');
        listNews.append(newCommentTitle);
        var amListNewsBd = $('<div class="am-list-news-bd"></div>');
        var ul = $('<ul class="fiveNewComments am-list"></ul>');
        $.each(data['result'],function (index,obj) {
            var li = $('<li class="am-g am-list-item-dated">' +
                '<a class="newCommentTitle" target="_blank" href="/findArticle?articleId=' + obj['articleId'] + '&originalAuthor=' + obj['originalAuthor'] + '" class="am-list-item-hd" style="padding-bottom: 5px" title="' + obj['articleTitle'] + '">'+ obj['articleTitle'] +'</a>' +
                '<span class="am-list-date">' + obj['commentDate'] + '</span>' +
                '<div class="new-comment-content" style="margin-bottom: 5px;">' + obj['answerer'] + '：' + obj['commentContent'] + '</div>' +
                '</li>');
            ul.append(li);
        });
        amListNewsBd.append(ul);
        listNews.append(amListNewsBd);
        newComment.append(listNews);
        newComment.append($('<div class="my-row" id="page-father">' +
            '<div class="newCommentPagination">' +
            '</div>' +
            '</div>'));
    }

    //填充最新留言
    function putInNewLeaveWord(data) {
        var newLeaveWord = $('.new-leaveWord');
        newLeaveWord.empty();
        var listNews = $('<div data-am-widget="list_news" class="am-list-news am-list-news-default" ></div>');
        var newCommentTitle = $('<div class="am-list-news-hd am-cf">' +
            '<a class="newLeaveWord">' +
            '<h2 style="color: #110101">最新留言</h2>' +
            '</a>' +
            '</div>');
        listNews.append(newCommentTitle);
        var amListNewsBd = $('<div class="am-list-news-bd"></div>');
        var ul = $('<ul class="fiveNewComments am-list"></ul>');
        $.each(data['result'], function (index, obj) {
            ul.append($('<li class="am-g am-list-item-dated">' +
                '<a class="newLeaveWordTitle" href="/' + obj['pagePath'] + '" title="' + obj['leaveWordContent'] + '">' + obj['answerer'] + '：' + obj['leaveWordContent'] + '</a>\n' +
                '<span class="am-list-date">' + obj['leaveWordDate'] + '</span>' +
                '</li>'));
        });
        amListNewsBd.append(ul);
        listNews.append(amListNewsBd);
        newLeaveWord.append(listNews);
        newLeaveWord.append($('<div class="my-row" id="page-father">' +
            '<div class="newLeaveWordPagination">' +
            '</div>' +
            '</div>'));
    }

    //添加标签云
    function putInTagsCloud(data){
        var right = $("#right");
        var tagCloud = $('.tag-cloud');
        tagCloud.empty();
        tagCloud.append($('<h3 class="widget-title">标签云</h3>'));
        var widgetTagCloud = $('<div class="widget-tag-cloud"></div>');
        $.each(data['result'], function (index, obj) {
            widgetTagCloud.append($('<a href="tags?tag=' + obj['tagName'] + '" style="font-size:' + obj['tagSize'] + 'px">' + obj['tagName'] + '</a>'));
        });
        tagCloud.append(widgetTagCloud);
        right.append(tagCloud);
    }

    //首页文章分页请求
    function ajaxFirst(currentPage) {
    //加载时请求
    $.ajax({
        type: 'POST',
        url: '/myArticles',
        dataType: 'json',
        data: {
            rows:"10",
            pageNum:currentPage
        },
        success: function (data) {
            //放入数据
            putInArticle(data);
            scrollTo(0,0);//回到顶部

            //分页
            $("#pagination").paging({
                rows:data[data.length-1]['pageSize'],//每页显示条数
                pageNum:data[data.length-1]['pageNum'],//当前所在页码
                pages:data[data.length-1]['pages'],//总页数
                total:data[data.length-1]['total'],//总记录数
                callback:function(currentPage){
                    ajaxFirst(currentPage);
                }
            });
        },
        error: function () {
            alert("获得文章信息失败！");
        }
    });
}

    function newCommentAjax(currentPage) {
    //最新评论
    $.ajax({
        type: 'GET',
        url: '/newComment',
        dataType: 'json',
        data: {
            rows:"5",
            pageNum:currentPage
        },
        success: function (data) {
            putInNewComment(data);

            //分页
            $(".newCommentPagination").paging({
                rows:data['pageInfo']['pageSize'],//每页显示条数
                pageNum:data['pageInfo']['pageNum'],//当前所在页码
                pages:data['pageInfo']['pages'],//总页数
                total:data['pageInfo']['total'],//总记录数
                flag:0,
                callback:function(currentPage){
                    newCommentAjax(currentPage);
                }
            });

        },
        error: function () {
            alert("获得最新评论信息失败！");
        }
    });
}
    function newLeaveWordAjax(currentPage) {
        //最新留言
        $.ajax({
            type: 'GET',
            url: '/newLeaveWord',
            dataType: 'json',
            data: {
                rows:"5",
                pageNum:currentPage
            },
            success: function (data) {
                putInNewLeaveWord(data);

                //分页
                $(".newLeaveWordPagination").paging({
                    rows:data['pageInfo']['pageSize'],//每页显示条数
                    pageNum:data['pageInfo']['pageNum'],//当前所在页码
                    pages:data['pageInfo']['pages'],//总页数
                    total:data['pageInfo']['total'],//总记录数
                    flag:0,
                    callback:function(currentPage){
                        newLeaveWordAjax(currentPage);
                    }
                });

            },
            error: function () {
                alert("获得最新留言信息失败！");
            }
        });
    }

    //点击扫描二维码时获取二维码图片
    $('.myCardBtn').click(function () {
        $('.qq_code').attr("src","https://zhy-myblog.oss-cn-shenzhen.aliyuncs.com/static/img/qq_code.png");
        $('.weixin_code').attr("src","https://zhy-myblog.oss-cn-shenzhen.aliyuncs.com/static/img/weixin_code.png");
    });

    ajaxFirst(1);

    newCommentAjax(1);
    newLeaveWordAjax(1);

    //标签云
    $.ajax({
        type: 'GET',
        url: '/findTagsCloud',
        dataType: 'json',
        data: {
        },
        success: function (data) {
            if(data['result'].length == 0){
                var tagCloud = $('.tag-cloud');
                tagCloud.empty();
                tagCloud.append($('<h3 class="widget-title">标签云</h3>'));
                var widgetTagCloud = $('<div class="widget-tag-cloud"><span>暂无标签</span></div>');
                tagCloud.append(widgetTagCloud);
                $('#right').append(tagCloud);
            } else {
                putInTagsCloud(data);
            }

        },
        error: function () {
            alert("获得标签云失败！");
        }
    });
