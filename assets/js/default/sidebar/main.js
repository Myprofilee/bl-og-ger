$(function () {
    var bar = '';
    <!-- Header -->

    bar += '<div class="col-lg-3">';
        bar += '<div class="sidebar">';
            bar += '<div class="sidebar_background"></div>';

            <!-- Top Stories -->

            bar += '<div class="sidebar_section">';
                bar += '<div class="sidebar_title_container">';
                    bar += '<div class="sidebar_title">Top Stories</div>';
                    bar += '<div class="sidebar_slider_nav">';
                        bar += '<div class="custom_nav_container sidebar_slider_nav_container">';
                            bar += '<div class="custom_prev custom_prev_top">';
                                bar += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"';
                                bar += 'x="0px" y="0px" width="7px" height="12px" viewBox="0 0 7 12" enable-background="new 0 0 7 12"';
                                bar += 'xml:space="preserve">';
                                bar += '<polyline fill="#bebebe"';
                                    bar += 'points="0,5.61 5.609,0 7,0 7,1.438 2.438,6 7,10.563 7,12 5.609,12 -0.002,6.39 " />';
                                bar += '</svg>';
                            bar += '</div>';
                            bar += ' <ul id="custom_dots" class="custom_dots custom_dots_top">';
                                bar += '<li class="custom_dot custom_dot_top active"><span></span></li>';
                                bar += '<li class="custom_dot custom_dot_top"><span></span></li>';
                                bar += '<li class="custom_dot custom_dot_top"><span></span></li>';
                            bar += '</ul>';
                            bar += '<div class="custom_next custom_next_top">';
                                bar += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"';
                                    bar += 'x="0px" y="0px" width="7px" height="12px" viewBox="0 0 7 12" enable-background="new 0 0 7 12"';
                                    bar += 'xml:space="preserve">';
                                    bar += '<polyline fill="#bebebe"';
                                    bar += 'points="6.998,6.39 1.389,12 -0.002,12 -0.002,10.562 4.561,6 -0.002,1.438 -0.002,0 1.389,0 7,5.61 " />';
                                bar += '</svg>';
                            bar += '</div>';
                        bar += '</div>';
                    bar += '</div>';
                bar += '</div>';
                bar += '<div class="sidebar_section_content">';
        

    $("#sidebar").html(bar);
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