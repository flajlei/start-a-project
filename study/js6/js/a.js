var login = angular.module('login',[]);

login.controller('loginCtrl',function($scope,$http){

})

var myApp = angular.module('myApp',['ngRoute'])
myApp.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/',{template:'<h1>'})
}])