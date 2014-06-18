(function () {
    var app = angular.module('app');

    app.controller('NavCtrl', ['$scope', 'navSvr', 'lessons', function ($scope, navSvr, lessons) {

        var lessonsAndTopics = [];

        for (var i = 0; i < lessons.length; i++) {
            var less = lessons[i],
                topics = less.topics || [];

            less.type = 'less';
            lessonsAndTopics.push(less);

            for (var j = 0; j < topics.length; j++) {
                var top = topics[j];
                top.type = 'top';
                lessonsAndTopics.push(top);
            }
        }

        $scope.lessonsAndTopics = lessonsAndTopics;

        $scope.isPrevVisible = function () {
            return navSvr.isMovePrevAllowed();
        };

        $scope.isNextVisible = function () {
            return navSvr.isMoveNextAllowed();
        };

        $scope.prev = function () {
            return navSvr.movePrev();
        };

        $scope.next = function () {
            return navSvr.moveNext();
        };

    }]);
})();