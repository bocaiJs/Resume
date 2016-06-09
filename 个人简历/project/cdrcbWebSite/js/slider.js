 var index=0,length=0;
$(function(){
		length =  $("#bg_img a").length;
		$("#bg_img a:first-child ").show().siblings("a").hide();
		$("#bg_list li").click(function(){
		    index =$(this).index();
		    $(this).addClass('on').siblings().removeClass('on');
		    $("#bg_img a").filter(":visible").fadeOut(500).parent().children().eq(index).fadeIn(1000);
		  
		});

   
     t= setInterval("showAuto()",4000);
	// $("#slider").hover(function(){clearInterval(t)},function(){t=setInterval(showAuto(),4000);});
	$("#slider").hover(function(){clearInterval(t)},function(){t= setInterval(showAuto(),4000);});
});
    


function showAuto(){
	     if(index>(length-2)){
	     	index=0;
	     }else{
	     	++index;
	     }
	   console.log(index);
		$("#bg_list li").eq(index).trigger('click');

	}