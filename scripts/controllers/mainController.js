dgMovieApp.controller('mainCtrl', function($scope, $http){

});

dgMovieApp.filter('unique', function() {
    return function(item, filterType) {
        var uniqueItems = [],
            keys = [];

        angular.forEach(item, function(item) {
            var key = item[filterType];
            if (keys.indexOf(key) === -1) {
                keys.push(key);
                uniqueItems.push(item);
            }
        });

        return uniqueItems;
    };
});
