$(function(){
   $(".changeImg").mouseover(function(){
   	     //背景图片变换
          imgAddr = $(this).find("img").attr("src");
          var  str = imgAddr.split(".");
          var changeAddr = str[0]+"s."+str[1];
          $(this).find("img").attr("src",changeAddr);  
          // $(this).children(".la").show();    
    }).mouseout(function(){
          $(this).find("img").attr("src",imgAddr);
          // $(this).children(".la").hide();  
    });


})// 第一个括号