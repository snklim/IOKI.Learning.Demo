(function () {
    var app = angular.module('app', []);

    app.constant('lessons', [{
        templateId: 'IntroHtml',
        title: 'Intro'
    }, {
        templateId: 'Less1Html',
        title: 'Lesson 1',
        topics: [{
            templateId: 'Less1Topic1Html',
            title: 'Topic 1'
        }, {
            templateId: 'Less1Topic2Html',
            title: 'Topic 2'
        }]
    }, {
        templateId: 'Less2Html',
        title: 'Lesson 2'
    }, {
        templateId: 'Less3Html',
        title: 'Lesson 3',
        topics: [{
            templateId: 'Less1Topic1Html',
            title: 'Topic 1'
        }, {
            templateId: 'Less1Topic2Html',
            title: 'Topic 2'
        }]
    }, {
        templateId: 'Less4Html',
        title: 'Lesson 4'
    }, {
        templateId: 'IntroHtml',
        title: 'Intro'
    }, {
        templateId: 'Less1Html',
        title: 'Lesson 1',
        topics: [{
            templateId: 'Less1Topic1Html',
            title: 'Topic 1'
        }, {
            templateId: 'Less1Topic2Html',
            title: 'Topic 2'
        }]
    }, {
        templateId: 'Less2Html',
        title: 'Lesson 2'
    }, {
        templateId: 'Less3Html',
        title: 'Lesson 3',
        topics: [{
            templateId: 'Less1Topic1Html',
            title: 'Topic 1'
        }, {
            templateId: 'Less1Topic2Html',
            title: 'Topic 2'
        }]
    }, {
        templateId: 'Less4Html',
        title: 'Lesson 4'
    }, ]);

})();