$(document).ready(function(){
    //如果浏览器中input已有预存值，可以读取
    user = $(".user").val();
    password = $(".password").val();
    //input值改变时，动态读取
    $(".user").on("input",function() {
      user = $(".user").val();
    });
    $(".password").on("input",function() {
      password = $(".password").val();
    });
    //发送账户密码到服务器
    $("button").click(function() {
      if (user == "") {
        $(".error").text("请输入账号");
      } else if (password == "") {
        $(".error").text("请输入密码");
      } else {
        $.post("/carrots-admin-ajax/a/login", {
          name : user ,
          pwd  : password
        }, function (data) {
          data = $.parseJSON(data);//解析传回来的json
          if (data.message != "success") {
            $(".error").text(data.message);
          } else {
            location.href = "js6-2.html";
          };
        });
      }
    });
  })