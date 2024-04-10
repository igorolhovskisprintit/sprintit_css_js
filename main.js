$(window).on("load", function() {

    var finHyph = new FinnishHyphenator();
    var elements = $("h1 > font");
    finHyph.hyphenateElements(elements);

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
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;

        if(name == ' website_cookies_bar' && cookie.substr(eqPos+1) != "" && website_cookies_bar('website_cookies_bar') == '') {
            var url = window.location.pathname;
            let path = url.split("/");
            path.pop();
            url = path.join("/");
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=" + url;
            document.cookie = "website_cookies_bar=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        }
        if(name == 'website_cookies_bar' && cookie.substr(eqPos+1) == "") {
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=" + window.location.pathname;
        }
    }
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
