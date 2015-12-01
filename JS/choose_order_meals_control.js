/**
 * Created by chenyu on 15/11/24.
 */
app.controller('ChooseOrderMealsCtrl',function($scope, $location){

    $scope.choose_people = function(){
        $location.path('choose_people');
    };

    $scope.choose_restaurant = function(){
        $location.path('choose_restaurant');
    };

    $scope.choose_set_meal = function(){
        $location.path('choose_set_meal');
    };

    $scope.for_order = function(){
        $location.path('choose_order_meals');
    }

    $scope.person = sessionStorage.getItem('person');
    $scope.restaurant = sessionStorage.getItem('restaurant');
    $scope.set_meal = sessionStorage.getItem('set_meal');
    //$scope.person = localStorage.getItem('person');
    //$scope.restaurant = localStorage.getItem('restaurant');
    //$scope.set_meal = localStorage.getItem('set_meal');
});