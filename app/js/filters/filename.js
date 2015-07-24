angular.module('jlApp').filter('filename', function() {
    return function(input) {
        var uri = URI(input);
        return uri.suffix('').filename(true);
    };
});