// DEBOUNCE DO LODASH

debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};



// MUDAR TAB AO CLICK

$('[data-group]').each(function(){
	var $allTarget = $(this).find('[data-target]'),
			$allClick = $(this).find('[data-click]'),
			activeClass = 'active';
	
	$allTarget.first().addClass(activeClass);
	$allClick.first().addClass(activeClass);
	
	$allClick.click(function(e){
		e.preventDefault();
		
		var id = $(this).data('click'),
				$target = $('[data-target="' + id + '"]');
		
		$allClick.removeClass(activeClass);
		$allTarget.removeClass(activeClass);
		
		$target.addClass(activeClass);
		$(this).addClass(activeClass);
	});
});



// SCROLL SUAVE

// [href^="#"] = seleciona todos os elementos (menus internos) que possuem um href começando com '#', deixando o preventDefault somente nesses
$('.menu-nav a[href^="#"]').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('.menu').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});

$('.logo').click(function(e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop: 0
	}, 500)
});



// MARCAR LINHA DO MENU QUANDO ESTIVER EM UMA SECTION

// pega a altura de cada section em relação ao topo
$('section').each(function() {
	// pega a altura de todas as sections
	var height = $(this).height(),
		// diferença entre o elemento da section com o topo
		offsetTop = $(this).offset().top,
		menuHeight = $('.menu').innerHeight(),
		// pega o nome dos ids das sections
		id = $(this).attr('id'),
		// pega o objeto com o nome com o id da section
		$itemMenu = $('a[href="#' + id + '"]');
	
	// verifica se está ou não na section
	$(window).scroll(debounce(function(){
		var scrollTop = $(window).scrollTop();
		
		// caso o offsetTop é menor que o scrollTop && se caso o offsetTop + height for maior que scrollTop
		if(offsetTop - menuHeight < scrollTop && offsetTop + height - menuHeight > scrollTop) {
			$itemMenu.addClass('active');
		} else {
			$itemMenu.removeClass('active');
		}
	}, 200));
});


$('section').each(function(){
	var height = $(this).height(),
			offsetTop = $(this).offset().top,
			menuHeight = $('.menu').innerHeight(),
			id = $(this).attr('id'),
			$itemMenu = $('a[href="#' + id + '"]');
	
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(offsetTop - menuHeight < scrollTop && offsetTop + height - menuHeight > scrollTop) {
			$itemMenu.addClass('active');
		} else {
			$itemMenu.removeClass('active');
		}
	});
});



// MENU MOBILE

$('.mobile-btn').click(function(){
	$(this).toggleClass('active');
	$('.mobile-menu').toggleClass('active');
});



// SLIDES

(function() {
	function slider(sliderName, velocidade) {
		var sliderClass = '.' + sliderName,
				activeClass = 'active',
				rotate = setInterval(rotateSlide, velocidade);
		
		// .slide > :first = vai pegar o primeiro item que está dentro de slide
		$(sliderClass + ' > :first').addClass(activeClass);

		$(sliderClass).hover(function(){
			clearInterval(rotate);
		}, function() {
			rotate = setInterval(rotateSlide, velocidade);
		});
		
		function rotateSlide() {
			var activeSlide = $(sliderClass + ' > .' + activeClass),
				// next = passa para a próxima div
				nextSlide = activeSlide.next();

			// caso o length do próximo slide for igual a zero...
			if(nextSlide.length == 0) {
				nextSlide = $(sliderClass + ' > :first');
			}
			activeSlide.removeClass(activeClass);
			nextSlide.addClass(activeClass);
		} 
	}

	slider('introducao', 2000);
})();


// ANIMAÇÃO AO SCROLL

(function() {
	var $target = $('[data-anime="scroll"]'),
	animationClass = 'animate',
	// (window).height() * 3/4 = altura total da janela vezes 3/4
	offset = $(window).height() * 3/4;

	function animeScroll() {
		var documentTop = $(document).scrollTop();
		
		$target.each(function(){
			var itemTop = $(this).offset().top;

			// se a distância do topo até o elemento for maior que...
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
	}, 100));
})();
