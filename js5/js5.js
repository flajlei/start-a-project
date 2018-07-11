$(document).ready(function(){
  //如果浏览器中input已有预存值，可以读取
  user = $("#user").val();
  password = $("#password").val();
  //input值改变时，动态读取
  $("#user").on("input",function() {
    user = $("#user").val();
  });
  $("#password").on("input",function() {
    password = $("#password").val();
  });
  //发送账户密码到服务器
  $("button").click(function() {
    if (user == "") {
      $(".error").text("请输入账号");
    } else if (password == "") {
      $(".error").text("请输入密码");
    } else {
      var xhr = new XMLHttpRequest();
      var loginDate = new FormData();
      loginDate.append("name",user);
      loginDate.append("pwd",password);
      xhr.open("POST","/carrots-admin-ajax/a/login",true);
      xhr.onload = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
          //拆分服务器传回来的数据 json字符串分解为对象
          var loginInfo = JSON.parse(xhr.responseText);
          if (loginInfo.message != "success") {
            $(".error").text(loginInfo.message);
          } else {
            location.href = "http://dev.admin.carrots.ptteng.com/";
          }
        }
      }
      xhr.send(loginDate);
    }
  });
});