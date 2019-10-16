(function() {
    app.factory("wpFactory", ['$http', '$q',
        function wpFactory($http, $q) {
            var url = 'http://hpnguyen52.wordpress.com/wp-json/wp/v2';

            const getPosts = (number) => {
                return ($http.get(url + 'posts?per_page=' + number).then(_success, _error));
            };

            const getMediaDataForId = (id) => {
                return ($http.get(url + 'media/' + id).then(_success, _error));
            };

            const _success = (response) => {
                return response.data;
            };

            const _error = (response) => {
                if (!angular.isObject || !response.data.message)
                    return ($q.reject('An unknown error has occured.'));

                return ($q.reject(response.data.message));
            };

            return {
                getPosts: getPosts,
                getMediaDataForId: getMediaDataForId
            }

        }

    ]);
})();