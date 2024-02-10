$(function () {
  $(".menu a, .go-top").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор блока с атрибута href
    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $("body,html").animate({ scrollTop: top }, 1500);
  });

  var mixer = mixitup(".portfolio__content");
});

// Когда документ загружен
document.addEventListener("DOMContentLoaded", function () {
  // Настройка Fancybox для элементов с data-fancybox
  Fancybox.bind("[data-fancybox]", {
    Thumbs: false,
    Toolbar: false,
    closeButton: "top",
    placeFocusBack: false,
    click: false,
    dragToClose: true,
    l10n: { CLOSE: "Закрыть", NEXT: "Следующий", PREV: "Предыдущий" },
  });

  // Настройка слайдера
  $(".slider-blog__inner").slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/arrow-left.svg"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/arrow-right.svg"></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
    $(".ham").toggleClass("active");
  });

  $(".menu a").on("click", function () {
    $(".menu__list").removeClass("menu__list--active");
    $(".ham").removeClass("active");
  });
});
