/**
 * Created by Bocai on 2015/12/15.
 */
var t=n=0,count;

$(document).ready(function(){
    //��ȡA��ǩ�ĸ���
    conut = $('#banner_list a').length;

    $("#banner_list a:not(:first-child)").hide();        //���˵�һ��Ԫ������ȫ������
     $("#banner_info").html($("#banner_list a:first-child").find("img").attr('alt'));  //#banner_info �õ� a �����img��ǩ����alt
    $("#banner_info").click(function(){window.open($("#banner_list a:first-child").attr("href"),"_blank");});
    $("#banner li").click(function(){
         var i = $(this).text() -1 ; //��ȡLiԪ�ص�ֵ 1��2��3��4��
         n = i;
         if(i>=count) return;

        $("#banner_info").html($("#banner_list a").eq(i).find("img").attr('alt'));
        $("#banner_info").unbind().click(function(){window.open($("#banner_list a").eq(i).attr("href"),"_blank");});//�Ƚ���¼� ���ڰ�
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