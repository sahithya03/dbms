(function () {

    angular.module("dbms")
        .controller("StaffController", StaffController);
    StaffController.$inject = ['$scope', 'MainService', '$state', '$window', '$location'];


    function StaffController($scope, MainService, $state, $window, $location) {

        var ctrl = this;
        ctrl.iscomplaintview = false;
        ctrl.tab = false;
        ctrl.isdeliveryview= false;

        ctrl.staffcomplaint = function(){

            var data = {

                staffId :ctrl.staffid
            }

            MainService.staffcomplaintview(data)
                .then(function(response){

                    if(response.status==200){
                        ctrl.complaintview = response.data;
                        ctrl.iscomplaintview = true;
                    }

                })
        };
        ctrl.staffdelivery = function(){

            var data = {

                staffId :ctrl.staffid
            }

            MainService.staffdeliveryview(data)
                .then(function(response){

                    if(response.status==200){
                        ctrl.deliveryview = response.data;
                        ctrl.isdeliveryview = true;
                    }

                })
        };
    ctrl.deliver = function( booking_id){

        var data = {
            booking_id : booking_id
        }
    MainService.changedeliverystatus(data).then(function(response){

        if(response.status==200){
            $window.alert("Status Changed");
        }

    })
        }

        ctrl.complaint = function( complaint_id){

            var data = {
                complaint_id : complaint_id
            }
            MainService.changecomplaintstatus(data).then(function(response){

                if(response.status==200){
                    $window.alert("Status Changed");
                }

            })
        }
    }

})();