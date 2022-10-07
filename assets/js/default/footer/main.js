$(function () {
    var bar = '';

    <!-- Header -->

    bar += '<footer class="footer">';
        bar += '<div class="container">';
            bar += '<div class="row row-lg-eq-height">';
                bar += '<div class="col-lg-9 order-lg-1 order-2">';
                    bar += '<div class="footer_content">';
                        bar += '<div class="footer_logo"><a href="/">Blogandre</a></div>';
                        bar += '<div class="footer_social">';
                            bar += '<ul>';
                                bar += '<li class="footer_social_facebook"><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>';
                            bar += '</ul>';
                        bar += '</div>';
                        bar += '<div class="copyright">';
                            bar += 'Copyright &copy; 2022 All rights reserved made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="/" target="_blank">Blogandre</a>';
                        bar += '</div>';
                    bar += '</div>';
                bar += '</div>';
                bar += '<div class="col-lg-3 order-lg-2 order-1">';
                    bar += '<div class="subscribe">';
                        bar += '<div class="subscribe_background"></div>';
                        bar += '<div class="subscribe_content">';
                            bar += '<div class="subscribe_title">Subscribe</div>';
                            bar += '<form action="#">';
                                bar += '<input type="email" class="sub_input" placeholder="Your Email" required="required">';
                                bar += '<button class="sub_button">';
                                    bar += '<svg version="1.1" id="link_arrow_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="13px" viewBox="0 0 19 13" enable-background="new 0 0 19 13" xml:space="preserve"> <polygon fill="#FFFFFF" points="12.475,0 11.061,0 17.081,6.021 0,6.021 0,7.021 17.038,7.021 11.06,13 12.474,13 18.974,6.5 " /></svg>';
                                bar += '</button>';
                            bar += '</form>';
                        bar += '</div>';
                    bar += '</div>';
                bar += '</div>';
            bar += '</div>';
        bar += '</div>';
    bar += '</footer>';
        
    $("#footer").html(bar);
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