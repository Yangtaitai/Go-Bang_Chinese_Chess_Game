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

            $scope.winFlag = false; //whether show win message

            $scope.nextStep = function(i, j) {
                if ($scope.dots[i][j] == 0) { // current location can put chess.
                    $scope.dots[i][j] = $scope.player;
                    $scope.player = ($scope.player == 1 ? 2 : 1);
                    if ($scope.checkIfSomeoneWin(i, j)) {
                        winFlag = true;
                        $scope.player == 1 ? alert('Black player wins') : alert('White player wins');

                        for (var i = 0; i < 15; i++) {
                            for (var j = 0; j < 15; j++) {
                                dots[i][j] = 0;
                            }
                        }
                    }
                }
                console.log($scope.dots[i][j]);
            }

            //optimized function
            $scope.getNumber = function(i, j, flag1, flag2) {
                var a = flag1; // treat flag as offset later
                var b = flag2; // flag1,flag2 value can only be 1,0,-1.
                var count = 0;

                while (i + a <= 14 && i + a >= 0 && j + a <= 14 && j + a >= 0 && dots[i + a][j + b] == dots[i][j]) {
                    a += flag1;
                    b += flag2;
                    count++;
                }
                return count;
            }

            $scope.checkIfSomeoneWin = function(i, j) {

                var count1 = $scope.getNumber(i, j, 0, -1) + $scope.getNumber(i, j, 0, 1) + 1;
                var count2 = $scope.getNumber(i, j, -1, 0) + $scope.getNumber(i, j, 1, 0) + 1;
                var count3 = $scope.getNumber(i, j, -1, 1) + $scope.getNumber(i, j, 1, -1) + 1;
                var count4 = $scope.getNumber(i, j, -1, -1) + $scope.getNumber(i, j, 1, 1) + 1;


                if (count1 >= 5 || count2 >= 5 || count3 >= 5 || count4 >= 5) {
                    return true;
                }

                // var count11 = 0, //horizon left
                //     count12 = 0, // horizon right
                //     count21 = 0, // vertical up
                //     count22 = 0, // vertical down
                //     count31 = 0, //left down
                //     count32 = 0, //right up
                //     count41 = 0, //left up
                //     count42 = 0; //right down

                // second one
                // $scope.getNumberLeft = function(i, j) {
                //     var a = 1;
                //     var count = 0;
                //     while (dots[i][j - a] == dots[i][j]) {
                //         if (j - a > 0 && i >= 0)
                //             a++;
                //         count++;
                //     }
                //     return count;

                // }

                // $scope.getNumberRight = function(i, j) {
                //     var a = 1;
                //     var count = 0;
                //     while (dots[i][j + a] == dots[i][j]) {
                //         a++;
                //         count++;
                //     }
                //     return count;
                // }

                // $scope.getNumberUp = function(i, j) {
                //     var a = 1;
                //     var count = 0;
                //     while (dots[i - a][j] == dots[i][j]) {
                //         if (i - a > 0 && j >= 0)
                //             a++;
                //         count++;
                //     }
                //     return count;
                // }

                // $scope.getNumberDown = function(i, j) {
                //     var a = 1;
                //     var count = 0;
                //     while (dots[i + a][j] == dots[i][j]) {
                //         if (i + a < 15 && j >= 0)
                //             a++;
                //         count++;
                //     }
                //     return count;
                // }

                // $scope.getNumberLeftDown = function(i, j) {
                //     var a = 1,
                //         b = 1;
                //     var count = 0;
                //     while (dots[i - a][j - b] == dots[i][j]) {
                //         if (i - a > 0 && j - b > 0) {
                //             a++;
                //             b++;
                //         }
                //         count++;
                //     }
                //     return count;
                // }

                // /direction
                // while (dots[i - e][j - f] == dots[i][j]) {
                //     e++;
                //     f++;

                //     count31++;

                //     if (count31 + count32 + 1 >= 5) {
                //         return true;
                //     }
                // }

                // $scope.getNumberRightUp = function(i, j) {
                //     var a = 1,
                //         b = 1;
                //     var count = 0;
                //     while (dots[i + a][j + b] == dots[i][j]) {
                //         if (i + a < 15 && j + b < 15) {
                //             a++;
                //             b++;
                //         }
                //         count++;
                //     }
                //     return count;
                // }

                // $scope.getNumberLeftUp = function(i, j) {
                //     var a = 1,
                //         b = 1;
                //     var count = 0;
                //     while (dots[i - a][j + b] == dots[i][j]) {
                //         if (i - a > 0 && j + b < 15) {
                //             a++;
                //             b++;
                //         }
                //         count++;
                //     }
                //     return count;
                // }

                // $scope.getNumberRightDown = function(i, j) {
                //     var a = 1,
                //         b = 1;
                //     var count = 0;
                //     while (dots[i + a][j - b] == dots[i][j]) {
                //         if (i + a < 15 && j - b > 0) {
                //             a++;
                //             b++;
                //         }
                //         count++;
                //     }
                //     return count;
                // }

                // count11 = $scope.getNumberLeft(i, j);
                // count12 = $scope.getNumberRight(i, j);
                // count21 = $scope.getNumberUp(i, j);
                // count22 = $scope.getNumberDown(i, j);
                // count31 = $scope.getNumberLeftDown(i, j);
                // count32 = $scope.getNumberRightUp(i, j);
                // count41 = $scope.getNumberLeftUp(i, j);
                // count42 = $scope.getNumberRightDown(i, j);

                // if (count11 + count12 + 1 >= 5) {
                //     return true;
                // }

                // if (count21 + count22 + 1 >= 5) {
                //     return true;
                // }

                // if (count31 + count32 + 1 >= 5) {
                //     return true;
                // }

                // if (count41 + count42 + 1 >= 5) {
                //     return true;
                // }

                // while (dots[i][j + b] == dots[i][j]) {
                //     count12++;
                //     b++;

                //     if (count11 + count12 + 1 >= 5) {
                //         return true;
                //     }
                // }

                // | direction
                // while (dots[i - c][j] == dots[i][j]) {
                //     if (i - c > 0 && j > 0)
                //         c++;
                //     count21++;

                //     if (count21 + count22 + 1 >= 5) {
                //         return true;
                //     }
                // }

                // while (dots[i + d][j] == dots[i][j]) {
                //     d++;
                //     count22++;

                //     if (count21 + count22 + 1 >= 5) {
                //         return true;
                //     }
                // }

                // /direction
                // while (dots[i - e][j - f] == dots[i][j]) {
                //     e++;
                //     f++;

                //     count31++;

                //     if (count31 + count32 + 1 >= 5) {
                //         return true;
                //     }
                // }

                // while (dots[i + g][j + h] == dots[i][j]) {
                //     g++;
                //     h++;
                //     count32++;

                //     if (count31 + count32 + 1 >= 5) {
                //         return true;
                //     }
                // }

                // \ direction
                // while (dots[i - m][j + n] == dots[i][j]) {
                //     m++;
                //     n++;
                //     count41++;
                //     if (count41 + count42 + 1 >= 5) {
                //         return true;
                //     }
                // }

                // while (dots[i + o][j - p] == dots[i][j]) {
                //     o++;
                //     p++;
                //     count42++;
                //     if (count41 + count42 + 1 >= 5) {
                //         return true;
                //     }
                // }

                // console.log('count 11 : ' + count11);
                // console.log('count 12 : ' + count12);
                // console.log('count 21 : ' + count21);
                // console.log('count 22 : ' + count22);
                // console.log('count 31 : ' + count31);
                // console.log('count 32 : ' + count32);
                // console.log('count 41 : ' + count41);
                // console.log('count 42 : ' + count42);

                console.log('count 1 : ' + count1);
                console.log('count 2 : ' + count2);
                console.log('count 3 : ' + count3);
                console.log('count 4 : ' + count4);

                return false;
            }

        })
})();
