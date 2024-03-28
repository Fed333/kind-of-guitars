export {
    initSlickSlider
}

function initSlickSlider() {
    return $('.slider-tabs-1').slick({
        dots: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: true,
                    dots: false,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    centerMode: true,
                    arrows: true,
                    dots: false,
                }
            }
        ]
    });
}