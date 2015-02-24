var myApp = angular.module("myApp",[]);

myApp.controller("AppCtrl",function($scope){

	person1 = {
		name : "harry",
		email : "harry@gmail.com",
		number : "9698566594"
	};
	person2 = {
		name : "harry1",
		email : "harry@gmail.com",
		number : "9698566594"
	};
	person3 = {
		name : "harry2",
		email : "harry@gmail.com",
		number : "9698566594"
	}

	$scope.contactList = [person1,person2,person3];

})
