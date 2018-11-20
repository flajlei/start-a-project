window.onload= function(){
  var int = 2;
  var n = parseInt(window.prompt("input"));
  if(n<0) return false;
  for(;--n;){
    int=int*2
  };
  document.write(int); 
}
console.log(typeof(null));

(function(){
  console.log("123")
}())