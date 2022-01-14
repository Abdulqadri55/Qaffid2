const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}
$(document).ready(function() {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');



    /**Click event on toggle menu */
    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse');
    })


    //owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive

    });


    //click to scroll top
    $('.move-up a').click(function() {
            $('html,body').animate({
                scrollTop: 0
            }, 1000);
        })
        //AOS instance
    AOS.init();

    let $btns = $(".project-area .button-group button");

    $btns.click(function(e) {
        $(".project-area .button-group button").removeClass("active");
        e.target.classList.add("active");

        let selector = $(e.target).attr("data-filter");
        $(".project-area .grid").isotope({
            filter: selector
        });
        return false;
    })


    $(".project-area .button-group #btn 1").trigger("click");

    $(".project-area .grid .test-popup-link").magnificPopup({
        type: "image",
        gallery: { enabled: true }
    });

});