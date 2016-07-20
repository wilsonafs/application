//Criar badges que somam ao click os elementos da lista
$('.collection-item').on('click', function(){

    var $badge = $('.badge', this);
    if ($badge.length == 0) {
    	$badge = $('<span class="badge brown-text">0</span>').appendTo(this);
    }

    $badge.text(parseInt($badge.text()) + 1);

    //barra preta de notificação
    var nomeProduto = this.firstChild.textContent;
	Materialize.toast(nomeProduto + ' adicionado', 900);
});
		
// resumo dos itens do pedido no modal
$('#confirmar').on('click', function(){

	var texto = '';

	$('.badge').parent().each(function(){
		var produto = this.firstChild.textContent;
		var quantidade = this.lastChild.textContent;
		

		texto += produto + ': ' + quantidade + ', ';
	});

	$('#resumo').text(texto);	
});

//modal
$('.modal-trigger').leanModal();

//limpar o pedido no click do badge
$('.collection').on('click', '.badge', function(){
	$(this).remove();
	return false;
});

//limpar o pedido no botão limpar
$('.acao-limpar').on('click', function() {
	$('#numero-mesa').val('');
	$('.badge').remove();
});