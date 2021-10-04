// OTIMIZADO

// quando é colocado [], está selecionando todos os atributos do site com esse atributo
$('[data-group]').each(function() {
    // variavel com todos os data-click e data-target
    var $allTarget = $(this).find('[data-target]'),
        $allClick = $(this).find('[data-click]'),
        activeClass = 'active';

    // adiciono ao primeiro data-target e ao primeiro data-click a classe 'active'
    $allTarget.first().addClass(activeClass);
    $allClick.first().addClass(activeClass);

    $allClick.click(function(e) {
        e.preventDefault();

        var id = $(this).data('click'), // o valor vai ser uma string (por isso não colocar o $ na frente)
            $target = $('[data-target="' + id + '"]'); // o valor vai ser um objeto (por isso é colocado o $ na frente)

        // remove as classes 'active' de todos os elementos
        $allClick.removeClass(activeClass);
        $allTarget.removeClass(activeClass);

        // adiciona a classe 'active' nos elementos do botão selecionado
        $target.addClass(activeClass);
        $(this).addClass(activeClass);
    })
})









// NÃO OTIMIZADO

// $(document).ready(function() {
//     // coloca a class 'active' numa var padrão
//     var classActive = 'active';


//     // ANIMAIS
    
//     // adiciona a class 'active' no primeiro botão por padrão
//     $('.animais .tab-menu a').first().addClass(classActive);
//     $('.animais .item').first().addClass(classActive);
    
//     // verifica se o usuário clicou em algum dos botões
//     $('.animais .tab-menu a').click(function(e) {
//         e.preventDefault();
        
//         // para saber em qual href foi clicado
//         var itemId = $(this).attr('href');
    
//         // selecinando todos os 'a' que estão dentro de 'tab-menu'
//         $('.animais .tab-menu a, .animais .item').removeClass(classActive);
    
//         // para adicionar uma classe de botão ativo
//         $(this).addClass(classActive);
    
//         // para adicionar o na classe de active
//         $(itemId).addClass(classActive); 
//     });
    
    
    
//     // FLORESTAS
    
//     $('.florestas .tab-menu a').first().addClass(classActive);
//     $('.florestas .item').first().addClass(classActive);
    
//     $('.florestas .tab-menu a').click(function(e) {
//         e.preventDefault();
//         var itemId = $(this).attr('href')
//         $('.florestas .tab-menu a, .florestas .item').removeClass(classActive)
//         $(this).addClass(classActive);
//         $(itemId).addClass(classActive); 
//     });
// })
