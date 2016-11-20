$(document).ready(function(){
	$('#registr').click( function(){
		window.location = 'registration.html';
	});
});
$(document).ready(function(){
	$('#create_resume').click( function(){
		window.location = 'student/create_resume.html';
	});
});
$(document).ready( function() {
    $(".file-upload input[type=file]").change(function(){
         var filename = $(this).val().replace(/.*\\/, "");
         $("#filename").val(filename);
    });
});






