(function() {
    'use strict';

    angular
        .module('achija')
        .controller('AllReservationController', AllReservationController);

    AllReservationController.$inject = ['reservationService'];

    function AllReservationController (reservationService) {
        var reservationVm = this;
        console.log('AllReservationController');

        init();

        function init() {
            reservationService
                .getCustomer()
                .then(function (customer) {
                    reservationVm.customer = customer;
                }, function (error) {
                    console.log(error);
                });
        }
    }
})();