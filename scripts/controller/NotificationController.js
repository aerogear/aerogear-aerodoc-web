'use strict';

function ShowNotificationController($scope, $rootScope, $routeParams, $location,
		dataService) {
	var showBar = false;
    $scope.$on('loginDone', function(e,arg){
    navigator.setMessageHandler("push", function(message) {
		console.log("Message received" + message.channelID);
		showBar = true;
		var message = "refresh";
		$rootScope.$broadcast('refreshLeads', message);
	});
    });
	$scope.$on('hideNotif', function(e,arg){
		showBar = false;
	});

	$scope.showNotification = function() {
		return showBar;
	};

}