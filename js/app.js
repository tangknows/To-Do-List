$(document).ready( function() {
	
	$("#taskButton").on("click", function() {
		
	var task = $("#taskTextBox").val();
	var insertAsList = '<li>'+ '<button id="check" title="Got it">  </button>' + '<button id="x" title="Screw this" type="button"></button>' + '   '  + task + '</li>';
	
	$("ul").append(insertAsList).find("li").last().hide().fadeIn(1000);
	
	});
	
    $('ul').on('click', "li", function() {
           $(this).remove();
       });
	
	

	
});