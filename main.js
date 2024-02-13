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
    
    $("#cookies-consent-all").on("click touch", function() {
        $("#cookies-consent-all").attr("href", "#");
    });
})
