//数据双向绑定
var login = angular.module('login',[]);
//post发送头文件格式
// login.config(function($httpProvider){
//   $httpProvider.defaults.headers.post = { 'Content-Type': 'application/x-www-form-urlencoded' }
// });
//发送数据转化为字符串
login.config(function ($httpProvider) {
  $httpProvider.defaults.transformRequest = function (obj) {
      var str = []; //定义字符串
      for (var p in obj) {
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));//左边为数据名，右边为数据内容
      }
      return str.join("&");//使用&分隔
  };
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8';
});
//读取输入框内容
login.controller('loginCtrl',function($scope,$http) {
  $scope.name = "";
  $scope.pwd = "";
  $scope.error = " ";
  $scope.loginBtn = function() {
    $scope.error = " "
    if ($scope.name == "") {
      $scope.error = "请输入账号";
    } else if ($scope.pwd == "") {
      $scope.error = "请输入密码";
    } else {
      $http({
        method: 'post',
        url: '/carrots-admin-ajax/a/login',
        data: {name: $scope.name,pwd: $scope.pwd}
      })
        .then(function (response) {
          $scope.data = response.data;
        if ($scope.data.message == "success"){
          //跳转页面
          sessionStorage.setItem("name",$scope.name);
          location.href = 'js6-2.html';
        }
      });
    }
  };
});