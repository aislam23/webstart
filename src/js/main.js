

/* Ининциализация WOW.js */
		new WOW().init();
		
		$(document).ready(function() {
			var button = document.querySelector('#button');
			var modal = document.querySelector('#modal');
			var close = document.querySelector('#close');

			button.addEventListener('click', function() {
				modal.classList.add('modal_active');
			});

			close.addEventListener('click', function() {
				modal.classList.remove('modal_active');
			});
			$('#form').submit(function (e) { 
				e.preventDefault();
				​if(!$form.valid()) return false; 
			});
			/* Валидация формы */
			$('#brif-form').validate({
				rules: {
					phone: {
						required: true
					}
				}, 
				messages: {
					phone: {
						required: "Укажите телефон"
					}
				}
			});
			/* Маска для телефона */
			$('.phone').mask('+7 (999) 999-99-99');
			/* Скрипт слайдера */
			$('.slider').slick({
				slidesToShow: 3,
				slidesToScroll: 1, 
				prevArrow: $('.arrows__left'),
				nextArrow: $('.arrows__right'),
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
		});
