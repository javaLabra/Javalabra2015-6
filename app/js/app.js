var jlApp = angular.module('jlApp', ['ui.router', 'ngSanitize']);

jlApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/pages/");

    $stateProvider
        .state('page', {
            url: '/pages/*page',
            templateUrl: "main.html",
            controller: 'MainCtrl'
        })
});