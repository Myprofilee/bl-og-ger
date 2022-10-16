$(function () {
    var bar = '';
    <!-- Header -->

    bar += '<header class="header">';
        bar += '<div class="container">';
            bar += '<div class="row">';
                bar += '<div class="col">';
                    bar += '<div class="header_content d-flex flex-row align-items-center justify-content-start">';
                        bar += '<div class="logo"><a href="/">Blogandre</a></div>';
                        bar += '<nav class="main_nav">';
                            bar += '<ul>';
                                bar += '<li><a href="/">Home</a></li>';
                                bar += '<li><a href="/m/category/education/">Education</a></li>';
                                bar += '<li><a href="/m/category/source-code/">Source Code</a></li>';
                                bar += '<li><a href="/m/contact/">Contact</a></li>';
                            bar += '</ul>';
                        bar += '</nav>';
                        bar += '<div class="search_container ml-auto">';
                            bar += '<div class="weather">';
                                bar += '<div class="temperature">+10°</div>';
                                bar += '<img class="weather_icon" src="/assets/images/cloud.png" alt="Blogandre">';
                            bar += '</div>';

                            <!-- Search --
                            bar += '<!-- Search --';
                            bar += '<form action="#">';
                                bar += '<input type="search" class="header_search_input" required="required" placeholder="Type to Search...">';
                                bar += '<img class="header_search_icon" src="/assets/images/search.png" alt="Blogandre">';
                            bar += '</form>';
                            bar += '<!-- Search -->';
                            <!-- Search --

                        bar += '</div>';
                        bar += '<div class="hamburger ml-auto menu_mm">';
                            bar += '<i class="fa fa-bars trans_200 menu_mm" aria-hidden="true"></i>';
                        bar += '</div>';
                    bar += '</div>';
                bar += '</div>';
            bar += '</div>';
        bar += '</div>';
    bar += '</header>';

    <!-- Menu Mobile -->

    bar += '<div class="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">';
        bar += '<div class="menu_close_container">';
            bar += '<div class="menu_close">';
                bar += '<div></div>';
                bar += '<div></div>';
            bar += '</div>';
        bar += '</div>';
        bar += '<div class="logo menu_mm"><a href="/">Blogandre</a></div>';
        bar += '<div class="search">';
            <!-- Search --
            bar += '<!-- Search --';
            bar += '<form action="#">';
                bar += '<input type="search" class="header_search_input menu_mm" required="required" placeholder="Type to Search...">';
                bar += '<img class="header_search_icon menu_mm" src="images/search_2.png" alt="">';
            bar += '</form>';
            bar += '<!-- Search -->';
            <!-- Search --
        bar += '</div>';
        bar += '<nav class="menu_nav">';
            bar += '<ul class="menu_mm">';
                bar += '<li class="menu_mm"><a href="/">home</a></li>';
                bar += '<li class="menu_mm"><a href="/m/contact/">Contact</a></li>';
            bar += '</ul>';
        bar += '</nav>';
    bar += '</div>';

    $("#navbar").html(bar);
});

function getValueByName(name) {
    var url = document.getElementById('blabz').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}