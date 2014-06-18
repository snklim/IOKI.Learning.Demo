(function () {
    var app = angular.module('app');

    app.controller('MainCtrl', ['$scope', 'navSvr', function ($scope, navSvr) {

        var lessonContainer = $('.lesson-container'),
            topicContainer = $('.topic-container');

        $scope.$watch(navSvr.getCurrLesson, function (newVal, oldVal) {
            lessonContainer.html($('#' + newVal.templateId).html());
        });

        $scope.$watch(navSvr.getCurrTopic, function (newVal, oldVal) {
            if (newVal) topicContainer.html($('#' + newVal.templateId).html());
            else topicContainer.html('');
        });

    }]);
})();