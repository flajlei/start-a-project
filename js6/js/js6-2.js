var name = sessionStorage.getItem("name");
//左侧选项
$(document).ready(function() {
  $(".leftList").click(function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active")
    } else{
      $(".leftList").removeClass("active");
      $(this).addClass("active");
    }
  })
  $(".leftList").siblings("a").click(function() {
    $(".leftList").siblings("a").css("background-color","#222939");
    $(this).css("background-color","#777");
  })
});
var myApp = angular.module('myApp',['ngRoute'])
//转换字符串
myApp.config(function ($httpProvider) {
  $httpProvider.defaults.transformRequest = function (obj) {
    var str = []; //定义字符串
      for (var p in obj) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));//左边为数据名，右边为数据内容
      }
    return str.join("&");//使用&分隔
  };
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8';
});
//单页面路由
myApp.config(['$routeProvider',function($routeProvider) {
  $routeProvider
  .when('/',{template:'<h1>welcome</h1>'})
  .when('/a',{templateUrl:'js6-2a.html'})
  .when('/b',{templateUrl:'js6-2b.html'})
  .otherwise({redirectTo:'/'});
}]);
//登陆id
myApp.controller('myCtrl',function($scope,$http) {
  $scope.name = name;
  $scope.searchBtn = function() {
    $http({
      method: 'post',
      url: '/carrots-admin-ajax/get/a/article/search',
      data: {
        name: $scope.name,
        pwd: $scope.pwd,
      }
    });
  };
});