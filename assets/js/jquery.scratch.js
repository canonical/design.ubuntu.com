jQuery(document).ready(function($) {

    $(window).on('resize', function() {

        var viewportWidth = $(window).width();

        // Check if on mobile
        if (viewportWidth < 768) {
            $('html').addClass('mobile');
        } else {
            $('html').removeClass('mobile');

            $('.filter-toggle').removeClass('active');
            $('.filter').css('display', '');
        }

    }).trigger('resize');

    $('.filter-toggle').on('click', function() {
        $(this).toggleClass('active');
        $('.filter').toggle();
    });

    function equalHeight (elementClass) {

        $(elementClass).each(function(){

            var maxHeight = 0;
            var contents = $('> div, > ul li', this);

            contents.each(function(){
                if ($(this).outerHeight() > maxHeight) {
                    maxHeight = $(this).height();
                }
            });

            contents.height(maxHeight);

        });
    }

    $(window).load(function() {
        equalHeight('.equalHeight');
    });
});
