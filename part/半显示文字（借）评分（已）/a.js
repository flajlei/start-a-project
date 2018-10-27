var allw = $(".clear").width();
$(".box").click(function(e){
  var per = Math.ceil(10*e.offsetX/allw)*10;
  console.log(0.05*per+'%');
  $(".clear").css('width',per+'%');
})