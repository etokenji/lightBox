
$(function(){
	var isImageLoaded = false;
	var isAnimationEnd = false;
	var lbImage = new Image();

	$(document).on("click", ".test-image", function(){

	    lbImage.src = $(this).find('img')[0].src;
		
	    $("#lightBox .lbImage").attr("src",lbImage.src);
		
		$("#lightBoxOverlay").addClass("active");
		$("#lightBox").addClass("active");
	
		$("#lightBox .lbOuterContainer").height(lbImage.height + 5);
		$("#lightBox .lbOuterContainer").width(lbImage.width + 5);
	
		$("#lightBox .lbContainer").height(lbImage.height);
		$("#lightBox .lbContainer").width(lbImage.width);
	
		$("#lightBox .lbDataContainer").width(lbImage.width);
	
		$("#lightBox .lbContainer").addClass("active");
		$("#lightBox .lbLoader").addClass("active");
	});

	lbImage.onload = function(){
	    isImageLoaded = true;
	    if(isImageLoaded && isAnimationEnd) ActiveImage();
	}
	
	$(document).on("animationend",".lbContainer",function(){
		isAnimationEnd = true;
		if(isImageLoaded && isAnimationEnd) ActiveImage();
	});
	
	//画像周り、閉じるボタンで非表示
	$(document).on("click",".lbClose, .imageBoxLightBox, .imageBoxLightBoxOverlay",function(){
		$("#lightBox").removeClass("active");
		$("#lightBox .lbItem").removeClass("active");
		$("#lightBoxOverlay").removeClass("active");
		isImageLoaded = false;
		isAnimationEnd = false;
		lbImage.src = "";
	});
	
	//画像部分のクリックは除く
	$(document).on("click",".lbOuterContainer",function(e){
		return false;
	});

	var ActiveImage = function(){
		
		$("#lightBox .lbImage").addClass("active");
		$("#lightBox .lbClose").addClass("active");
		$("#lightBox .lbLoader").removeClass("active");	
	}

});