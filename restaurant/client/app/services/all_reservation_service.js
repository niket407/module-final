function all_reservation_service() {

    var defer = $q.defer();

    $http
        .get('http://jsonplaceholder.typicode.com/users')
        .then(successFn, errorFn);

    function successFn(response) {
        defer.resolve(response.data);
    }

    function errorFn(error) {
        defer.reject(error.statusText);
    }

    return defer.promise;
}