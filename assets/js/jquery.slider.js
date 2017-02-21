/*
*  Slider 1.0
*  author: Anthony Dillon
*/

var slideAmount = 906;
var xPos = -10;
var numberOfSlides = 3;
var index = 1;
var animating = false;
$('.slider-controls .next').bind('click',function(){
	if(!$(this).hasClass('disabled') && !animating){
		xPos -= slideAmount;
		animating = true;
		$('.slider').animate({marginLeft: xPos+'px'} , 1000, function(){
			animating = false;
		});
		index++;
		$('.slider-controls div').removeClass('disabled');
		if(index >= numberOfSlides){ $(this).addClass('disabled'); }
		$('.slider-jump li').removeClass('active');
		$('.slider-jump .dot'+index).addClass('active');
	}
});
$('.slider-controls .prev').bind('click',function(){
	if(!$(this).hasClass('disabled') && !animating){
		xPos += slideAmount;
		animating = true;
		$('.slider').animate({marginLeft: xPos+'px'} , 1000, function(){
			animating = false;
		});
		index--;
		$('.slider-controls div').removeClass('disabled');
		if(index <= 1){ $(this).addClass('disabled');  }
		$('.slider-jump li').removeClass('active');
		$('.slider-jump .dot'+index).addClass('active');
	}
});
$('.slider-jump li').bind('click',function(){
	if(!$(this).hasClass('active') && !animating){
		index = $(this).attr('class').substr(3,1);
		xPos = -((slideAmount * index) - slideAmount) - 10;
		animating = true;
		$('.slider').animate({marginLeft: xPos+'px'} , 1000, function(){
			animating = false;
		});
		$('.slider-jump li').removeClass('active');
		$('.slider-jump .dot'+index).addClass('active');
		$('.slider-controls div').removeClass('disabled');
		if(index <= 1){ $('.slider-controls .prev').addClass('disabled');  }
		if(index >= numberOfSlides){ $('.slider-controls .next').addClass('disabled'); }
	}
});