window.onload = function () {
	console.log($('button').length());
	$('button').bind('click', function () {
		alert(this);
	});

};