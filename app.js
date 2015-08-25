// AngularJS starts automatically on the HTML DOMContentLoaded event.
// If an ng-app directive is found, AngularJS will load any module named in the directive, and compile the DOM with ng-app as the root of the application.
var app = angular.module("myChatTracker", []);

app.controller("myNoteControl", function() {

    $scope.clear = function() {$scope.message = "";};
    $scope.save  = function() {alert("Note Saved");};
});



app.controller('formCtrl', function($scope) {
    $scope.master = {firstName:"Teresa", lastName:"Nesteby"};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
});
