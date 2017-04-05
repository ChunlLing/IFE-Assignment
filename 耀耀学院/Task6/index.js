window.onload = function () {
	var scrollTop;

	// 点击弹窗按钮
	$('#click-client').click(function () {
		$('.cover').css('display', 'block');
		$('.client').css('display', 'block');
	});
	// 点击关闭按钮
	$('.close').click(function () {
		$('.cover').css('display', 'none');
		$('.client').css('display', 'none');
	});

	// 点击button1,点击浮出层以外的部分关闭浮出层
	$('#button1').click(function () {
		$(this).css('backgroundColor', '#cccceb');
		$('#button2').css('backgroundColor', '#fff');
		document.addEventListener('click', hide, true);
	});

	// 点击button2
	$('#button2').click(function () {
		$(this).css('backgroundColor', '#cccceb');
		$('#button1').css('backgroundColor', '#fff');
		document.removeEventListener('click', hide, true);
	});

	// 点击button3
	$('#button3').click(function () {
		$(this).css('backgroundColor', '#cccceb');
		$('#button4').css('backgroundColor', '#fff');
		document.removeEventListener('mousewheel', preventScroll, false);
		document.removeEventListener('scroll', preventScroll, false);
	});

	// 点击button4
	$('#button4').click(function () {
		$(this).css('backgroundColor', '#cccceb');
		$('#button3').css('backgroundColor', '#fff');
		scrollTop = document.body.scrollTop;
		console.log(scrollTop);
		document.addEventListener('mousewheel', preventScroll, false);
		document.addEventListener('scroll', preventScroll, false);
	});

	function hide() {
		$('.cover').css('display', 'none');
		$('.client').css('display', 'none');
	}

	function preventScroll(e) {
		e.preventDefault();
		window.scroll(0, scrollTop);
	}
};