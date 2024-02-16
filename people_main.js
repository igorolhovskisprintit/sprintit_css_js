$(window).on("load", function() {

    $('.accordion > .card > a.card-header.collapsed').on('click', function (e) {
        window.history.pushState("", "", $(this).attr("data-bs-target"));
    });
    
    var thehash = window.location.hash;
    thehash = thehash.replace(/[^a-zA-Z0-9_-]/g, '');
    
    if(thehash) {

        var thehashele = $("#"+thehash).prev();

        if(thehashele.length) {
            setTimeout(function() {
                thehashele.next().attr("class", "collapse show");
            }, 1000);
        }
    }

})


$(document).ready(function() {
    var pathname = window.location.pathname;
    $("#website_cookies_bar a").each(function() {
        if($(this).attr("href") == pathname && $(this).attr("href").length > 2) {
            $("#website_cookies_bar").hide();
            $("body").attr("style", "").removeClass("modal-open");
            $("#wrapwrap").css("overflow", "auto");
            setTimeout(function() {
                $("body").attr("style", "overflow:auto;").removeClass("modal-open");
                $("#wrapwrap").css("overflow", "auto");
            }, 1500);
        }
        $(this).on("click touch mouseover focus", function() {
            var arr = $(this).attr("href").split('?');
            if(arr !== undefined) {
                arr.pop();
                if(arr[0] !== undefined) {
                    url = arr[0].replace(/^.*\/\/[^\/]+/, '');
                    if(url == "/") {
                        url = "#";
                    }
                    $(this).attr("href", url);
                }
            }
        });
    });
});
