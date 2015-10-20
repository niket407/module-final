(function() {
    'use strict';

    angular
        .module('achija')
        .controller('ReservationsController', ReservationsController);

    ReservationsController.$inject = ['reservationsService'];

    function ReservationsController (reservationsService) {
        var reservationsVm = this;
        console.log('ReservationsController');

        init();

        function init() {
            reservationsService
                .getReservations()
                .then(function (reservations) {
                    reservationsVm.registrations = reservations;
                }, function (error) {
                    console.log(error);
                });
        }
    }
})();