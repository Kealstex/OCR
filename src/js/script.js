$(document).ready(function () {
//   let slider = tns({
//     container: '.carousel__inner',
//     items: 1,
//     slideBy: 'page',
//     autoplay: false,
//     nav: false,
//     controlsText: [
//       '<img src="icons/left.svg">',
//       '<img src="icons/right.svg">'
//     ]
//   });

//   $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
//     $(this)
//       .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
//       .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
//   });

//   function toggleSlide(class_item) {
//     $(class_item).each(function (i) {
//       $(this).on('click', function (e) {
//         console.log('i = ', i, 'e = ', e);
//         e.preventDefault();
//         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
//         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
//       })
//     })
//   }

//   toggleSlide('.catalog-item__link');
//   toggleSlide('.catalog-item__back');

//   //modal consultation open
//   $('[data-modal=consultation]').on('click', function () {
//     $('.overlay, #consultation').fadeIn('slow');
//   });

//   //modal close
//   $('.modal__close').on('click', function () {
//     $('.overlay, .modal').fadeOut('slow');
//   });

//   //modal buy open
//   $('.button_mini').on('click', function () {
//     $('.overlay, #order').fadeIn('slow');
//   });

//   $('.button_mini').each(function (i) {
//     $(this).on('click', function () {
//       $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
//     });
//   });

//   function validateForm(form){
//     $(form).validate({
//       rules: {
//         name: {
//           required: true,
//           minlength: 2
//         },
//         phone: "required",
//         email: {
//           required: true,
//           email: true
//         }
//       },
  
//       messages: {
//         name: {
//           required: "Пожалуйста, введите своё имя",
//           minlength: jQuery.validator.format("Минимальная длина поля - {0}")
//         },
//         email: {
//           required: "Пожалуйста, введите свой почтовый адрес",
//           email: "Введите коректный адресс"
//         },
//         phone: "Пожауйста, введите свой номер телефона"
//       }
  
//     });
//   }

//   validateForm('#consultation-form');
//   validateForm('#order form');
//   validateForm('#consultation form');
  
//   $('input[name=phone]').mask("+375 (99) 999-99-99");

//   $('form').submit(function(e) {
//     e.preventDefault();
//     $.ajax({
//         type: "POST",
//         url: "mailer/smart.php",
//         data: $(this).serialize()
//     }).done(function() {
//         $(this).find("input").val("");
//         $('#consultation, #order').fadeOut();
//         $('.overlay, #thanks').fadeIn('slow');

//         $('form').trigger('reset');
//     });
//     return false;
// });

})(jQuery);