(function() {
    angular.module('ChessBoardApp', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/hello');
            $stateProvider
                .state('hello', {
                    url: '/hello',
                    controller: 'ChessBoardController',
                    // controller: function($scope) {
                    //     $scope.greet = 'Hello World ...';
                    // },
                    templateUrl: 'ChessBoard.html'
                })
        })
})();