//Check off item by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//Click on X to delete item
$("ul").on("click", "span", function(e) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	e.stopPropagation();
});

//Add item by press enter
$("input[type='text']").keypress(function(e) {
	if(e.which === 13) {
		var nextTodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span class='trash'><i class='fa fa-trash'></i></span> "+ nextTodo + "</li>");
	}
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});