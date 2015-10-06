$(document).ready(function() {

console.log("hello")

	$("ul")
		.on("click", ".plus", function(){
			
			var newPlusLine = $("<li><a class='plus'></a><a class='minus'></a>&nbsp;<form><input type='text' name='item'></form></li>");

			$(".minus").css({
				"display":"inline-block"
			});

			$("form").css({
				"display":"inline-block"
			});
			$("input").focus();
			$(this).parent("li")
				.after(newPlusLine);
			$(this).remove();
		})
	
		.on("click", ".minus", function(){
			$(this).parent("li")
				.remove();	
		})

	$("ul")
		.on("keypress", "input", function(e){

			var newMinusLine = $("<li><a class='minus'></a>&nbsp;<form><input type='text' name='item'></form></li>");

			if (e.which == 13) {
   				$(this).parents("li")
   					.after(newMinusLine);
   				
   				newMinusLine.find(".minus, form").css({
					"display":"inline-block"
				});
				
				newMinusLine.find("input").focus();
   				return false;
    		}
  		})
	;

	// $("input")
	// 	.on("click", function(e){
	// 		e.preventDefault();
	// });


	// $("input")
	// 	.on("dblclick", function(){
	// 		$(this).focus();
	// });

});