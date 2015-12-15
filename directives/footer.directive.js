/**
 * Created by Brycen on 2015-06-10.
 */

app.directive('footerDirective', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/footer.view.html',
    controller: 'FooterController'
  }
});