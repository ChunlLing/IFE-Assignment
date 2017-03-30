window.onload = function () {
	var text;

	$('#name').bind('focus', function () {
		$(this).addClass('info');
		$(this).next().text('必填，长度为4-16个字符');
	}).bind('blur', function () {
		$(this).removeClass().value('12');
		console.log($(this).value());
	});
};