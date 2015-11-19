
$(document).ready(function () {
    var hoverHTMLDemoBasic = "<p>John Resig is an application developer at Khan Academy. \
                            He was a JavaScript tool developer for the Mozilla Corporation. \
                            He is also the \
                            library.<p>";

    $("#theme_cartoon").hovercard({
        detailsHTML: hoverHTMLDemoBasic,
        width: 400,
        cardImgSrc: 'http://ejohn.org/files/short.sm.jpg',
    });

});