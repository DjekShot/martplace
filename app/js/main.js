$(function () {

    document.querySelectorAll('.form-search__select').forEach(function (fromSearchSelectWrapper) {

        const selectHeaderButton = fromSearchSelectWrapper.querySelector('.select__header-button');
        const selectBodyList = fromSearchSelectWrapper.querySelector('.select__body-list');
        const selectItem = selectBodyList.querySelectorAll('.select__item');

        selectHeaderButton.addEventListener('click', function () {
            selectBodyList.classList.toggle('select__body-list-visible');
            this.classList.add('select__header-button-active')
        });

        selectItem.forEach(function (listItem) {
            listItem.addEventListener('click', function (e) {
                e.stopPropagation();
                selectHeaderButton.innerText = this.innerText;
                selectHeaderButton.focus();
                selectBodyList.classList.remove('select__body-list-visible');
            });
        });

        document.addEventListener('click', function (e) {
            if (e.target !== selectHeaderButton) {
                selectBodyList.classList.remove('select__body-list-visible');
                selectHeaderButton.classList.remove('select__header-button-active');
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Tab' || e.key === 'Escape') {
                selectBodyList.classList.remove('select__body-list-visible');
                selectHeaderButton.classList.remove('select__header-button-active');
            }
        });

    });

    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    };

    $(".sliderProducts__item-bottom-star").rateYo({
        rating: 4.5,
        starWidth: "17px",
        readOnly: true
    });
    $(".item__content-rateBasket__rateyo").rateYo({
        rating: 4.5,
        starWidth: "17px",
        readOnly: true
    });
    $(".releaseProducts__item-content-bottom-star").rateYo({
        rating: 4.5,
        starWidth: "15px",
        readOnly: true
    });

    
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 350,
        from: 30,
        to: 300,
        grid: false,
        prefix: "$",
    });

    $('.sliderProducts__inner').slick({
        prevArrow: '<button type="button" class="slick-prev slick__arows lnr-chevron-left"></button>',
        nextArrow: '<button type="button" class="slick-next slick__arows lnr-chevron-right"></button>',
    });

    $('.followersFeed__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        // centerMode: true,
        prevArrow: '<button type="button" class="slick-prev slick__arows lnr-chevron-left"></button>',
        nextArrow: '<button type="button" class="slick-next slick__arows lnr-chevron-right"></button>',
    });

    $('.categories-page__list').on('click', function(){
        $('.categories-page__list').addClass('active');
        $('.categories-page__grid').removeClass('active');
        $('.breadcrumb__list-item.list').addClass('active');
        $('.breadcrumb__list-item.grid').removeClass('active');
        $('.categories-page__box-list').addClass('active');
        $('.categories-page__box.grid').removeClass('active');
    });
    $('.categories-page__grid').on('click', function(){
        $('.categories-page__grid').addClass('active');
        $('.categories-page__list').removeClass('active');
        $('.breadcrumb__list-item.grid').addClass('active');
        $('.breadcrumb__list-item.list').removeClass('active');
        $('.categories-page__box.grid').addClass('active');
        $('.categories-page__box-list').removeClass('active');
    });

    var mixer = mixitup('.releaseProducts__container');

});