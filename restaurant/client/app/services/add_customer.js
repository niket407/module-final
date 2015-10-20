function add_reservation(cus) {
    var defer = $q.defer();

    $http
        .post('http://localhost:8080/restaurant-api/api/customer', cus)
        .then(successFn, errorFn);

    function successFn(response) {
        defer.resolve(response.data);
    }

    function errorFn(error) {
        defer.reject(error.statusText);
    }

    return defer.promise;
}