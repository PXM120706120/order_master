/**
 * Created by qianshiguang on 15-11-27.
 */
app.controller('ChooseRestaurantCtrl',function($scope,$location){
    $scope.restaurants = ['KFC', '7-11', '成都小吃'];

    $scope.for_restaurant = function(restaurant){
        sessionStorage.setItem('restaurant',restaurant);
        //localStorage.setItem('restaurant',restaurant);
        $location.path('choose_order_meals');
    };
})
