$(document).ready(function() {

 $("form#info").submit(function(event){

	var name = $("#name").val();
	var date = $("#date").val();
  var start = $("#starttime").val();
  var end = $("#endtime").val();

	$("#confirmname").text(name);
	$("#confirmdate").text(date);
  $("#confirmstart").text(start);
  $("#confirmend").text(end);

	$(".receipt").show();

	event.preventDefault();

	});
});
