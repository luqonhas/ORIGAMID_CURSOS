// Dica: Quebre em pequenas partes, procure códigos semelhantes e teste.

// 1 - Distância entre o scroll e o topo
// 2 - Ditância entre o elemento e o topo
$(window).scroll(function() {
    // para saber a distância do topo até onde estou
    var windowTop = $(this).scrollTop();

    // para saber a distância do topo até o elemento
    // each = vai pegar cada classe "anime" da página
    $('.anime').each(function() {
        // offset = retorna um objeto com a distância left e top em relação ao topo
       if (windowTop > $(this).offset().top - 500) {
           $(this).addClass('anime-init')
       } else {
           $(this).removeClass('anime-init');
       }
    });
});

// 3 - Verificar essas duas variáveis sempre que o scroll for ativado
// 4 - Se distância entre o elemento e o topo for maior que do scroll, adicionar classe
// 5 - A classe deve mostrar e animar o elemento