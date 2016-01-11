/**
 * Created by Brycen on 2015-06-10.
 */
app.controller('SignupController', ['$scope','$http', '$mdToast','$document',function($scope, $http, $mdToast) {
    $scope.createUser = function (user) {
        var msg = "";
        if (!user) {
            msg = "User information are blank or not filled in";
            this.showSimpleToast(msg);
        }
        else if ((!user.name) || (!user.email)) {
            msg = "Username or Email Address isn't valid";
            this.showSimpleToast(msg);
        } else if (checkPassword(user)) {
            $scope.master = angular.copy(user);
            $http({
                method: 'POST',
                data: {username: user.name, password: user.password},
                url: 'http://idealist-api-staging-1.idealist-staging.brymastr.cont.tutum.io:9000/api/users'
            }).then(function successCallback(response) {
                console.log("Success " + response);
            }, function errorCallback(response) {
                console.log("Failed " + response);
            });
        }
    };
    var last = {
        bottom: false,
        top: true,
        left: false,
        right: true
    };
    $scope.toastPosition = angular.extend({}, last);
    $scope.getToastPosition = function () {
        sanitizePosition();
        return Object.keys($scope.toastPosition)
            .filter(function (pos) {
                return $scope.toastPosition[pos];
            })
            .join(' ');
    };
    function sanitizePosition() {
        var current = $scope.toastPosition;
        if (current.bottom && last.top) current.top = false;
        if (current.top && last.bottom) current.bottom = false;
        if (current.right && last.left) current.left = false;
        if (current.left && last.right) current.right = false;
        last = angular.extend({}, current);
    }

    $scope.showSimpleToast = function () {
        $mdToast.show(
            $mdToast.simple()
                .textContent('Simple Toast!')
                .position($scope.getToastPosition())
                .hideDelay(3000)
        );
    }
    $scope.showSimpleToast = function (msg) {
        console.log(msg);
        $mdToast.show(
            $mdToast.simple()
                .textContent(msg)
                .position($scope.getToastPosition())
                .hideDelay(3000)
        );
    }
    var checkPassword = function(user){
        console.log(user);
        if(!user.password) {
            msg = "Password is empty";
            this.showSimpleToast(msg);
        }else if(user.password == user.confirmpassword){
            msg = "Password Match";
            this.showSimpleToast(msg);
            return true;
        } else{
            msg = "Password Not Match";
            this.showSimpleToast(msg);
            $scope.passwordCheck = false;
            return false;
        }
    }
}]);
