/**
 * Created by chenyu on 15/11/24.
 */
app.controller('OrderMealsCtrl',function($scope, $location){
    $scope.for_orders = function(){
        $location.path('choose_order_meals');
    };
})