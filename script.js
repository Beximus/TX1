$(document).ready(function(){
	var windowWidth =0;
	var windowHeight =0;

	function checkWidth(){
		windowWidth =$(window).width();
		$(".wnot").text(windowWidth);
	}

	function checkHeight(){
		windowHeight =$(window).height();
		$(".hnot").text(windowHeight);
	}

	checkWidth();
	checkHeight();
	$(window).resize(checkWidth);
	$(window).resize(checkHeight);
})