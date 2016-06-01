// check oof specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, 'linear', function(){
		$(this).remove()
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {	

	if(event.which === 13) {		
		var todoText = $(this).val();
		$('ul').append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + todoText + "</li>");
		$(this).val("");
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").slideToggle(500, 'linear');
});