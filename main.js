window.onload = function(){
	var mylink = document.getElementsByClassName('my-link') [0],
	    paragraph = document.getElementByld('paragraph');
	mylink.onclick = function() {
		if (paragraph.style.visibility == '') {
			paragraph.style.visibility = 'hidden';
		} elese {
			paragraph.style.visibility = '';
		};
		return false;
	};	
};