function MovieListController($scope, $http) {

    var baseUrl = 'http://www.omdbapi.com/?',
        apiKey = '&apikey=5824d754';

    var movies = [],
        decades = [],
        count = 0,
        filterIsActive,
        filteredMovies;

    $http.get(baseUrl + 's=Batman' + apiKey).success(function(response) {

        angular.forEach(response.Search, function(val) {

            $http.get(baseUrl + 'i=' + val.imdbID + apiKey).success(function(response) {

                return [
                    movies.push({
                        'movieInfo': response,
                        'decade': Math.floor(response.Released.split(' ')[2] / 10) * 10
                    }),
                    decades.push({
                        'id': count,
                        'decade': Math.floor(response.Released.split(' ')[2] / 10) * 10
                    }),
                    count += 1
                ];

            });

        });

    });

    $scope.filterOnDecade = function(currentDecade, currentId) {
        if ($scope.activeTab != 'tab-' + currentDecade) {
            filteredMovies = [];

            if (filterIsActive == true) {
                $scope.movies = movies;
            }

            // Set current active tab
            angular.forEach($scope.decades, function(val, key) {
                if (val.id === currentId) {
                    return $scope.activeTab = 'tab-' + currentDecade;
                }
            });

            // Set new list for fitered movies
            angular.forEach($scope.movies, function(val, key) {
                if (val.decade === currentDecade) {
                    return filteredMovies.push(val);
                }
            });

            return [
                filterIsActive = true,
                $scope.movies = filteredMovies
            ]
        } else {
            return [
                filterIsActive = false,
                $scope.activeTab = '',
                $scope.movies = movies
            ]
        }

    };
    $scope.movies = movies;
    $scope.decades = decades;

}

dgMovieApp.component('movieList', {
    templateUrl: 'movie-list/movie-list.html',
    controller: MovieListController
})
