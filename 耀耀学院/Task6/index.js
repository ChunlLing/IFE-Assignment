window.onload = function () {
	var scrollTop;		// 记录锁屏后滚动条所在高度
	var cw, clientW;	// cw为弹窗默认宽度，clientW为修改的宽度
	var ch, clientH;	// ch为弹窗默认宽度，clientH为修改的宽度

	clientW = parseInt($('.client').css('width'));
	clientH = parseInt($('.client').css('height'));
	$('.client').css('marginLeft', -(clientW/2) + 'px').css('marginTop', -(clientH/2) + 'px');

	// 点击弹窗按钮
	$('#click-client').click(function () {
		if ($('.client').css('width') == 'auto') {
			$('.cover').show();
			$('.client').show();
			clientW = parseInt($('.client').css('width'));
			clientH = parseInt($('.client').css('height'));
			cw = clientW;
			ch = clientH;
		} else {
			$('.cover').show();
			$('.client').show();
		}
		// 窗口居中
		$('.width').text(cw);
		$('.height').text(ch);
		$('.client').css('marginLeft', -(clientW/2) + 'px').css('marginTop', -(clientH/2) + 'px');
	});

	// 点击关闭按钮
	$('.close').click(function () {
		$('.cover').hide();
		$('.client').hide();
	});

	// 点击button1,点击浮出层以外的部分关闭浮出层
	$('#button1').click(function () {
		$(this).css('backgroundColor', '#cccceb');
		$('#button2').css('backgroundColor', '#fff');
		$('.cover').bind('click', hide);
	});

	// 点击button2
	$('#button2').click(function () {
		$(this).css('backgroundColor', '#cccceb');
		$('#button1').css('backgroundColor', '#fff');
		$('.cover').unbind('click', hide);
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
		document.addEventListener('mousewheel', preventScroll, false);
		document.addEventListener('scroll', preventScroll, false);
	});

	// 点击修改窗口大小按钮
	$('#modify').click(function () {
		if ($('#width').value() !== '') {
			if (parseInt($('#width').value()) >= cw) {
				clientW = $('#width').value();
				$('.client').css('width', clientW + 'px').css('marginLeft', -(clientW/2) + 'px');
			} else {
				alert('请不要输入小于默认值的值，会变形哒~~~');
			}
		}
		if ($('#height').value() !== '') {
			if (parseInt($('#height').value()) >= ch) {
				clientH = $('#height').value();
				$('.client').css('height', clientH + 'px').css('marginTop', -(clientH/2) + 'px');
			} else {
				alert('请不要输入小于默认值的值，会变形哒~~~');
			}
		}
	});

	// 拖曳
	$('.client').bind('mousedown', function (e) {
		var _this = this;
		var diffX = e.clientX - _this.offsetLeft;
		var diffY = e.clientY - _this.offsetTop;
		$(_this).css('margin', 0);
		document.onmousemove = function (e) {
			var left = e.clientX - diffX;
			var top = e.clientY - diffY;
			if (left < 0) {
				left = 0;
			} else if (left > document.body.clientWidth - _this.offsetWidth) {
				left = document.body.clientWidth - _this.offsetWidth;
			}
			if (top < 0) {
				top = 0;
			} else if (top > document.body.clientHeight - _this.offsetHeight) {
				top = document.body.clientHeight - _this.offsetHeight;
			}
			$(_this).left(left + 'px');
			$(_this).top(top + 'px');
		};
		document.onmouseup = function () {
			this.onmousemove = null;
			this.onmouseup = null;
		}
	});

	function hide() {
		$('.cover').hide();
		$('.client').hide();
	}

	function preventScroll(e) {
		e.preventDefault();
		window.scroll(0, scrollTop);
	}
};