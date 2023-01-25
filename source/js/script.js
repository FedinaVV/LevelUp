//Burger-menu (jQuery)
$(document).ready(function(){
    $('.icon-menu').click(function(event){
        $('body, .icon-menu, .menu__body').toggleClass('active');
    });
});

//Slider (jQuery)
$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        dots: false,
        //adaptiveHeight: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings:{
                    slidesToShow: 1,
                }
            }
        ]
    });
});

//Button to top (jQuery)
function backToTop(){
    let button=$('.to-top');
    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 50) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });
    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop:0}, 50);
    })
}

backToTop();

//timer (JS)

window.onload = function () {
    let minute = 29;
    let sec = 59;
    setInterval(function () {
        document.getElementById("timer").innerHTML =
            minute + " : " + sec;
        sec--;
        if (sec == 00) {
            minute--;
            sec = 59;
            if (minute == 0) {
                minute = 29;
            }
        }
    }, 1000);
};
