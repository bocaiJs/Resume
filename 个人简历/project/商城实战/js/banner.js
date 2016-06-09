/**
 * Created by Bocai on 2015/12/15.
 */
var t=n=0,count;

$(document).ready(function(){
    //获取A标签的个数
    conut = $('#banner_list a').length;

    $("#banner_list a:not(:first-child)").hide();        //除了第一个元素其余全部隐藏
     $("#banner_info").html($("#banner_list a:first-child").find("img").attr('alt'));  //#banner_info 得到 a 下面的img标签下面alt
    $("#banner_info").click(function(){window.open($("#banner_list a:first-child").attr("href"),"_blank");});
    $("#banner li").click(function(){
         var i = $(this).text() -1 ; //获取Li元素的值 1，2，3，4；
         n = i;
         if(i>=count) return;

        $("#banner_info").html($("#banner_list a").eq(i).find("img").attr('alt'));
        $("#banner_info").unbind().click(function(){window.open($("#banner_list a").eq(i).attr("href"),"_blank");});//先解除事件 ，在绑定
        $("#banner_list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
        document.getElementById("banner").background="";

        $(this).addClass("on");
        $(this).siblings().removeAttr("class");
    });

    t= setInterval("showAuto()",1000);
    $("#banner").hover(function(){clearInterval(t);},function(){t = setInterval("showAuto()",4000);});


});

function showAuto()
{
    n = n >=(count -1) ?0 : ++n;
    $("#banner li").eq(n).trigger('click');
}