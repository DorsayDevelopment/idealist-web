/**
 * Created by dannyt on 2015-12-16.
 */
app.directive('signupDirective', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/signup.view.html',
        controller: 'SignupController'
    }
});