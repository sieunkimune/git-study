const $indicator = $('.slides-pagination a');
const $container = $('.slides-container');

$indicator.on('click', function (evt) {
	evt.preventDefault();

	const nowIdx = $indicator.index(this);

	//컨테이너 이동
	$container.css({ left: -1120 * nowIdx });

	//활성화 표시 //메소드체인, 아래와 같은 결과
	$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

	// $indicator.eq(nowIdx).parent().addClass('on'); //원래 얘네 둘로 나누어 쓰는 것을 위에서 줄여서 씀
	// $indicator.eq(nowIdx).parent().siblings().removeClass('on');
});
