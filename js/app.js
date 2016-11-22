angular.module('ngCart', ['ngRoute'])

angular.module.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      template: 'partials/index.html',
      controller: HomeController
    })
    .when('/about',  {
      template: 'partial/about.html',
      controller: 'AboutController'
    })
    .when('/contact', {
      template: 'partials/contact.html',
      controller: 'ContactController'
    })
    .when('/shop', {
      template: 'partials/shop.html',
      controller: 'ShopController'
    })
    .when('/cart', {
      template: 'partials/cart.html',
      controller: 'CartController'
    })
    .otherwise('/error', {
      template: 'partials/error.html',
      controller: 'ErrorController'
    })
    $locationProvider.html5Mode(true);
})
