$(document).ready(function() {


    $("#whenI-was-a-little-stem-cell").hovercard({
        detailsHTML: "<p style='font-size:16px'>Image from \
                      biocomicals.com</p><a href='http://biocomicals.blogspot.com/2011/06/when-i-was-little- \
                      stem-cell.html'><p>http://biocomicals.blogspot.com/2011/06/when-i-was-little-stem-cell. \
                      html</p></a>",
        width: 400,
        openOnTop: true,
        //cardImgSrc: 'http://ejohn.org/files/short.sm.jpg',
    });

    $("#stemCell").hovercard({
        detailsHTML: "<p>Image from:<a href='http://nas-sites.org/stemcells/stem-cell-basics/download-stem-cell-figures/'>http://nas-sites.org/stemcells/stem-cell-basics/download-stem-cell-figures/</a></p>",
        width: 400,
        openOnTop: true,
        //cardImgSrc: 'http://ejohn.org/files/short.sm.jpg',
    });

    var myCanvas_HoverContent = "<p>Animation adjusted from a demo on Codecademy.</p> \
                     <p>You can learn it if you are interested!</p> \
                     <a href='https://www.codecademy.com/zh/courses/animate-your-name/0/1'><p>the \
                     demo on Codecademy</p></a>";
    $("#myCanvas").hovercard({
        detailsHTML:myCanvas_HoverContent,
        width:400,
        openOnTop: true,
    });



});
