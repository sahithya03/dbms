(function(){

    angular.module('dbms')
        .factory("MainService",MainService);
    MainService.$inject=['$http'];
    function MainService($http){

        var service = {};
        service.Login = Login;
        service.ViewCourses = ViewCourses;
        service.ExamView = ExamView;
        service.Enroll = Enroll;
        /*service.hirestaff = hireStaff;
//        service.staffdeliveryview = staffdeliveryview;
        service.changedeliverystatus = changedeliverystatus;
        service.changecomplaintstatus = changecomplaintstatus;
        */
        service.departmentid;
        service.courseid;



        return service;
        function Login(params) {

            return $http.post("http://localhost:8081/web/api/login",params).then(handleSucess,handleRemoteError)

        }

        function ViewCourses(params) {

          //  console.log(params);
            return $http.post("http://localhost:8081/web/api/viewcourse",params).then(handleSucess,handleRemoteError)

        }
        function ExamView (params){

            return $http.post("http://localhost:8081/web/api/examview",params).then(handleSucess,handleRemoteError)

        }
        function Enroll (params){

            return $http.post("http://localhost:8081/web/api/enroll",params).then(handleSucess,handleRemoteError)

        }

        function handleSucess(data)
        {
            console.log(data);
            return data;

        }

        function handleRemoteError(data)
        {
            return data;
        }


    }


})();
