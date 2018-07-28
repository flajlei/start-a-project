angular.module('myApp',['ngRoute'])
            .config(['$routeProvider',function($routeProvider) {
                $routeProvider
                .when('/',{template:'<h1>welcome</h1>'})
                .when('/a',{templateUrl:'js6-2a.html'})
                .when('/b',{templateUrl:'js6-2b.html'})
                .otherwise({redirectTo:'/'});
            }]);