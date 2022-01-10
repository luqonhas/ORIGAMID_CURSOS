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
$('.menu-nav a[href^="#"]').click(function(e) {
	e.preventDefault();

	var id = $(this).attr('href'),
		menuHeight = $('.menu').innerHeight(),
		targetOffset = $(id).offset().top;

	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500)
})

$('.logo').click(function(e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: 0
	}, 500)
})



// MARCAR LINHA DO MENU QUANDO ESTIVER EM UMA SECTION

// pega a altura de cada section em relação ao topo
$('section').each(function() {
	// pega a altura de todas as sections
	var height = $(this).height(),
		// diferença entre o elemento da section com o topo
		offsetTop = $(this).offset().top,
		// pega o nome dos ids das sections
		id = $(this).attr('id'),
		// pega o objeto com o nome com o id da section
		$itemMenu = $('a[href="#' + id + '"]'),
		menuHeight = $('.menu').innerHeight();
	
	// verifica se está ou não na section
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		
		// caso o offsetTop é menor que o scrollTop && se caso o offsetTop + height for maior que scrollTop
		if (offsetTop - menuHeight < scrollTop && offsetTop + height - menuHeight > scrollTop) {
			$itemMenu.addClass('active')
		} else {
			$itemMenu.removeClass('active')
		}
	})
})



// MENU MOBILE

$('.mobile-btn').click(function(){
	$(this).toggleClass('active');
	$('.mobile-menu').toggleClass('active')
})