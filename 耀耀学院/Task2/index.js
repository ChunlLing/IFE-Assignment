window.onload = function () {
	$('#name').bind('focus', function () {
		this.className = 'info';
		$('#name').next().elements[0].innerText = '必填';
		$('#name').next().elements[0].className = 'info';
	}).bind('blur', function () {

	});
};