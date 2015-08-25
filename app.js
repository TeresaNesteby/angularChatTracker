// AngularJS starts automatically on the HTML DOMContentLoaded event.
// If an ng-app directive is found, AngularJS will load any module named in the directive, and compile the DOM with ng-app as the root of the application.
var app = angular.module("myChatTracker", []);

app.controller("myNoteController", function() {
    var list = {};
    // hardcoded list
    $scope.notes = list;
    // add note
    $scope.add = function(note) {
      list.push(note);
    };
    $scope.show = function(){
      // display all notes
    }
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

// -------------------To add Chart
// // angular.module("app", ["chart.js"]).controller("PolarAreaCtrl", function ($scope) {
//   $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
//   $scope.data = [300, 500, 100, 40, 120];
// });

// Settings
// .chart-polar-area
// data: series data
// labels: series labels
// legend (default: false): show legend below the chart
// options (default: {}): Chart.js options
// click (optional): onclick event handler
// hover (optional): onmousemove event handler
// colours (default to global colours): colours for the chart
