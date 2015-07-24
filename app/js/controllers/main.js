angular.module('jlApp').controller('MainCtrl', function($scope, $stateParams, Page) {
    $scope.page = $stateParams['page'];

    $scope.pages = Page.all;

    $scope.isActive = function(href) {
        var foundPage;
        $scope.pages.forEach(function(page) {
            if (page.href === $scope.page) {
                foundPage = page;
            }
        });

        if (foundPage === undefined) {
            if (href === 'README.md') {
                return true;
            }
            return false;
        }
        return foundPage.href === href;
    }
});
