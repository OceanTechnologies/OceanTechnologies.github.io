$(document).ready(function(){
	$('.main').on('mousewheel', function(updown){
		if(updown.originalEvent.wheelDelta/120 > 0) {
			$(".main").css({"transform":"scale(1)"})
		}else{
			$(".container").css({"top":"-100%"})
			$(".scup").css({"transform":"scale(1)"})
			$(".main").css({"transform":"scale(0.7)"})
		}
	})

	$('.scup').on('mousewheel', function(updow){
		if(updow.originalEvent.wheelDelta/120 > 0) {
			$(".container").css({"top":"0"})
			$(".scup").css({"transform":"scale(0.7)"})
			$(".main").css({"transform":"scale(1)"})
		}else{
			$(".container").css({"top":"-200%"})
			$(".scup").css({"transform":"scale(0.7)"})
			$(".products").css({"transform":"scale(1)"})
		}
	})

	$('.products').on('mousewheel', function(updo){
		if(updo.originalEvent.wheelDelta/120 > 0) {
			$(".container").css({"top":"-100%"})
			$(".products").css({"transform":"scale(0.7)"})
			$(".scup").css({"transform":"scale(1)"})
		}else{
			/*$(".container").css({"top":"-300%"})
			$(".products").css({"transform":"scale(0.7)"})
			$(".scup").css({"transform":"scale(0.7)"})*/
		}
	})
});