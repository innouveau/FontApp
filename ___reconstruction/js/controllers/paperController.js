app.controller('paperController', function($scope, sharedScope) {
    $scope.shared = sharedScope.data;
    
    $scope.shared.current.workarea = $scope.shared.workarea[0];
    $scope.shared.current.paper = $scope.shared.current.workarea.papers[0];
    $scope.shared.current.field = $scope.shared.current.paper.fields[0];

});
