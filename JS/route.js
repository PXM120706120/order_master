/**
 * Created by chenyu on 15/11/24.
 */
var app = angular.module('order_master_app',['ngRoute']);
app.config(function ($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:'HTML/order_meals.html',
            controller:'OrderMealsCtrl'
        })
        .when('/choose_order_meals',{
            templateUrl:'HTML/choose_order_meals.html',
            controller:'ChooseOrderMealsCtrl'
        })
        .when('/choose_people',{
            templateUrl:'HTML/choose_people.html',
            controller:'ChoosePeopleCtrl'
        })
        .when('/choose_restaurant',{
            templateUrl:'HTML/choose_restaurant.html',
            controller:'ChooseRestaurantCtrl'
        })
        .when('/choose_set_meal',{
            templateUrl:'HTML/choose_set_meal.html',
            controller:'ChooseSetMealsCtrl'
        })
        .when('/show_orders',{
            templateUrl:'HTML/show_orders.html',
            controller:'ShowOrdersCtrl'
        })
});