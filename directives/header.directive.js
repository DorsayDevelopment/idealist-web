/**
 * Created by Brycen on 2015-06-10.
 */

app.directive('headerDirective', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/header.view.html',
    controller: 'HeaderController'
  }
});