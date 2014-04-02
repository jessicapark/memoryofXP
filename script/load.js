$(function(){
	var beforeDate = new Date();
	//页面加载
	var $window = $(window),
		$doc = $(document),
		$body = $("body"),
	    winWidth = $window.width(),
		docWidth = $doc.width(),
		docHeight = $doc.height(),
		winHeight = $window.height(),	
		speed = 250;
	var afterDate = new Date(),
	    pagePreLoad = (afterDate - beforeDate),
	    time = 10/pagePreLoad,
		preImgLen = 35/pagePreLoad,
		n = 0,
		m = 0,
		play = setInterval(function(){
			if(Number(n) >= 100 && Number(m) >= 350) { 
				clearInterval(play); 
				n = 100;
				m = 350;			
				//页面加载完毕后执行(主线)
				setTimeout(function(){
					$(this).remove();
					window.scrollTo(0,17000);
					document.getElementById('loading').style.display = 'none';
				},2000);
			};
			n += time;
			m += preImgLen;
		},100);
	$(".start").click(function(){ 
        $.scrollTo(0,0); 
    }); 
});