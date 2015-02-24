var myApp = angular.module("myApp",[]);

myApp.controller("AppCtrl",function($scope,$http){

$http.get('/contactList').success(function(response){
	$scope.contactList = response;
});
	

	

})
