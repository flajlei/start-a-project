menu();
function menu(){
    $(".menu-box li").click(function(){
        $(this).toggleClass("active");
    })
    $(".menu-box-first > li").click(function(){
        $(this).siblings(".menu-box-first li").removeClass("active");
        $(".menu-box-second .active").toggleClass("active");
    })
    $(".menu-box-second > li").click(function(){
        $(this).siblings(".menu-box-second > li").removeClass("active");
        $(".menu-box-third .active").toggleClass("active");
    })
    $(".menu-box-third > li").click(function(){
        $(this).siblings(".menu-box-third > li").removeClass("active");
    })
}