var myApp = angular.module("myApp",[]);

myApp.controller("AppCtrl",function($scope,$http){

var refresh = function(){
	$http.get('/contactList').success(function(response){
		$scope.contactList = response;
		$scope.contact = "";
	});
}

refresh();

$scope.addContact = function(){
	$http.post('/contactList',$scope.contact).success(function(response){
		console.log(response);
		refresh();
	});
};	

$scope.remove = function(id){
	$http.delete('/contactList/'+id).success(function(response){
		console.log(response);
		refresh();
	});
}

$scope.edit = function(id){
	$http.get('/contactList/'+id).success(function(response){
		//console.log(response);
		$scope.contact = response;
	});
}

$scope.update = function(){
	$http.put('/contactList/'+$scope.contact._id,$scope.contact).success(function(response){
		//console.log(response);
		refresh();
	});
}
$scope.deselect = function(){
	$scope.contact = "";
}

})
