window.onload = function () {
	$('#name').bind('focus', function () {
		$('#name').addClass('info');
		$('#name').addClass('123');
		$().next().text('必填');
		console.log($('#name').next().text());
		$('#name').next().addClass('info');
	}).bind('blur', function () {
		$('#name').removeClass();
	});
};