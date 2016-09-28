(function() {
    angular.module('ChessBoardApp')
        .controller('ChessBoardController', function($scope) {
            $scope.greet = 'Chess board';
            var dots = [];

            $scope.dots = dots; //chess board

            $scope.player = 1; // record who should play

            for (var i = 0; i < 15; i++) { // dots.length = 15
                dots.push([]);
            }

            for (var i = 0; i < dots.length; i++) { //dots[i].length = 15
                for (var j = 0; j < 15; j++) {
                    dots[i].push([0]);
                }
            }

            $scope.nextStep = function(i, j) {
                if ($scope.dots[i][j] == 0) { // current location can put chess.
                    if ($scope.player == 1) { // white
                        $scope.dots[i][j] = 1;
                        $scope.player = 2;
                        if ($scope.checkIfSomeoneWin(i, j)) {
                            alert('white wins!');
                            for (var i = 0; i < 15; i++) {
                                for (var j = 0; j < 15; j++) {
                                    dots[i][j] = 0;
                                }
                            }
                        }

                    } else {
                        $scope.dots[i][j] = 2; //black
                        $scope.player = 1;
                        if ($scope.checkIfSomeoneWin(i, j)) {
                            alert('black wins!');
                            for (var i = 0; i < 15; i++) {
                                for (var j = 0; j < 15; j++) {
                                    dots[i][j] = 0;
                                }
                            }

                        }
                    }
                }
                // console.log($scope.dots[i][j]);
            }

            $scope.checkIfSomeoneWin = function(i, j) {
                var count11 = 0, //horizon left
                    count12 = 0, // horizon right
                    count21 = 0, // vertical up
                    count22 = 0, // vertical down
                    count31 = 0, //left down
                    count32 = 0, //right up
                    count41 = 0, //left up
                    count42 = 0; //right down

                var a = 1, //horizon
                    b = 1,
                    c = 1, // vertical
                    d = 1,
                    e = 1, // / direction
                    f = 1,
                    g = 1,
                    h = 1, // \ direction
                    m = 1,
                    n = 1,
                    o = 1,
                    p = 1;

                console.log(dots[i][j]);


                // -- direction
                while (dots[i][j - a] == dots[i][j]) {
                    if (j - a > 0 && i >= 0)
                        a++;
                    count11++;

                    if (count11 + count12 + 1 >= 5) {
                        return true;
                    }
                }

                while (dots[i][j + b] == dots[i][j]) {
                    count12++;
                    b++;

                    if (count11 + count12 + 1 >= 5) {
                        return true;
                    }
                }
                // | direction
                while (dots[i - c][j] == dots[i][j]) {
                    if (i - c > 0 && j > 0)
                        c++;
                    count21++;

                    if (count21 + count22 + 1 >= 5) {
                        return true;
                    }
                }

                while (dots[i + d][j] == dots[i][j]) {
                    d++;
                    count22++;

                    if (count21 + count22 + 1 >= 5) {
                        return true;
                    }
                }

                // /direction
                while (dots[i - e][j - f] == dots[i][j]) {
                    e++;
                    f++;

                    count31++;

                    if (count31 + count32 + 1 >= 5) {
                        return true;
                    }
                }

                while (dots[i + g][j + h] == dots[i][j]) {
                    g++;
                    h++;
                    count32++;

                    if (count31 + count32 + 1 >= 5) {
                        return true;
                    }
                }

                // \ direction
                while (dots[i - m][j + n] == dots[i][j]) {
                    m++;
                    n++;
                    count41++;
                    if (count41 + count42 + 1 >= 5) {
                        return true;
                    }
                }

                while (dots[i + o][j - p] == dots[i][j]) {
                    o++;
                    p++;
                    count42++;
                    if (count41 + count42 + 1 >= 5) {
                        return true;
                    }
                }

                console.log('count 11 : ' + count11);
                console.log('count 12 : ' + count12);
                console.log('count 21 : ' + count21);
                console.log('count 22 : ' + count22);
                console.log('count 31 : ' + count31);
                console.log('count 32 : ' + count32);
                console.log('count 41 : ' + count41);
                console.log('count 42 : ' + count42);

                return false;
            }



        })
})();