window.onload = function () {
	$('#name').bind('focus', function () {
		$('#name').addClass('info');
		$('#name').addClass('123');
		$('#name').next().text('必填');
		$('#name').next().addClass('info');
	}).bind('blur', function () {
		$('#name').removeClass();
	});
};