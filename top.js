$(function(){
    $(".mob").click(function(){
        $(".collapse").slideToggle();
        $(this).toggleClass("active");
    })
})

$(".top").click(function()
    {
        $("body,html").animate(
        {
            scrollTop:0
        },1500)
    });

    $(window).scroll(function()
    {
        var y=$(this).scrollTop();
        var vh=$(window).height();

        if(y>=500){
            $(".top").fadeIn()
        }
        else{
            $(".top").fadeOut()
        }       
    });