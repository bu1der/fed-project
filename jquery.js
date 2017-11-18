$(function(){
	$('.my-link').click(function(){
		var paragraph = $('paragraph');
		if (paragraph.is(':hidden')) {
			paragraph.show();
		}else{

			paragraph.hide();
		}
		return false;
	});
});