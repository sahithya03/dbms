(function () {

  angular.module("dbms")
    .controller("MainController",MainController);
  MainController.$inject=['$scope','MainService','$state','$window','$location'];


    function MainController($scope,MainService,$state,$window,$location) {
        var ctrl = this;
        ctrl.loggedin = false;
        ctrl.tab = true;
        //$scope.departmentid ;
        ctrl.login = function () {
            ctrl.bill = false;
            var data = {
                studentid: ctrl.id,
                contact: ctrl.contact
            };

            MainService.Login(data).then(function (response) {

                console.log(response);
                if (response.status == 200) {
                    MainService.departmentid = response.data.departmentid;
                    //console.log(ctrl.departmentid);
                    $state.go('student')
                } else if (response.status == 401) {
                    $window.alert("Invald Password");
                }
            })

        };

        ctrl.viewcourses = function () {

            ctrl.tab = false;
            console.log(MainService.departmentid);
            var data = {
                did: MainService.departmentid
            };
            MainService.ViewCourses(data).then(function (response) {

                ctrl.courses = response.data;

            });

        };
        ctrl.isExam=false;
        ctrl.viewexams = function(courseid){

            console.log(courseid);
            ctrl.isExam = true;
            MainService.courseid = courseid;
            var data = {
                cid: MainService.courseid
            };
            MainService.ExamView(data).then(function(response){

                    ctrl.examview = response.data;
                    //$state.go('exams');                 }


            });


        }

        ctrl.isEnrollError = false;
        ctrl.isEnrollSuccess = false;
        ctrl.enroll = function () {

            var data = {
                sid : ctrl.student_id,
                cid : ctrl.course_id
            };

            MainService.Enroll(data).then(function(response){

                console.log(response.status);
                if(response.status == 200){
                   $window.alert('Registered Successfully')
                }
                else if (response.status == 402){
                    $window.alert("Course Full");
                }
                else if (response.status == 403){
                    $window.alert("Already Registered");
                }

            })
        }
    }

})();
