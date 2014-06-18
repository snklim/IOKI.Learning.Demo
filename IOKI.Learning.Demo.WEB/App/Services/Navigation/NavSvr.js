(function () {
    var app = angular.module('app');

    app.factory('navSvr', ['lessons', function (lessons) {

        var numOfLessons = lessons.length,
            topics,
            numOfTopics = 0,
            currLesson = 0,
            currTopic = 0;

        topics = lessons[currLesson].topics || [];
        numOfTopics = topics.length;

        // methods for working with navigation of previous items of lessons and topics

        function isMovePrevLessonAllowed() {
            return currLesson > 0;
        };

        function isMovePrevTopicAllowed() {
            return currTopic > 0;
        };

        function isMovePrevAllowed() {
            return isMovePrevTopicAllowed() || isMovePrevLessonAllowed();
        };

        // methods for working with navigation of next items of lessons and topics

        function isMoveNextLessonAllowed() {
            return currLesson < numOfLessons - 1;
        };

        function isMoveNextTopicAllowed() {
            return currTopic < numOfTopics - 1;
        };

        function isMoveNextAllowed() {
            return isMoveNextTopicAllowed() || isMoveNextLessonAllowed();
        };

        function isAnyTopics() {
            return numOfTopics > 0;
        };

        function getCurrTopic() {
            if (isAnyTopics()) return topics[currTopic];
            return null;
        };

        function getCurrLesson() {
            return lessons[currLesson];
        };

        function movePrevTopic() {
            currTopic--;
        };

        function movePrevLesson() {
            currLesson--;
            topics = lessons[currLesson].topics || [];
            numOfTopics = topics.length;
            currTopic = numOfTopics - 1 || 0;
        };

        function movePrev() {
            if (isMovePrevTopicAllowed()) movePrevTopic();
            else if (isMovePrevLessonAllowed()) movePrevLesson();
        };

        function moveNextTopic() {
            currTopic++;
        };

        function moveNextLesson() {
            currLesson++;
            topics = lessons[currLesson].topics || [];
            numOfTopics = topics.length;
            currTopic = 0;
        };

        function moveNext() {
            if (isMoveNextTopicAllowed()) moveNextTopic();
            else if (isMoveNextLessonAllowed()) moveNextLesson();
        };

        return {
            isMovePrevAllowed: isMovePrevAllowed,
            isMoveNextAllowed: isMoveNextAllowed,
            getCurrTopic: getCurrTopic,
            getCurrLesson: getCurrLesson,
            movePrev: movePrev,
            moveNext: moveNext
        };
    }]);
})();