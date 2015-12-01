/**
 * Created by qianshiguang on 15-11-30.
 */
app.controller('ChooseSetMealsCtrl',function($scope, $location){
    $scope.foods = {
        'FKC': [
            {name: '田园脆鸡堡', price: '10.00'},
            {name: '黄金咖喱猪排饭', price: '23.50'},
            {name: '意式肉酱肉丸饭', price: '16.00'},
            {name: '老北京鸡肉卷', price: '14.00'},
            {name: '劲脆鸡腿堡', price: '15.00'}
        ]



    };

    $scope.for_set_meal = function(set_meal){
        sessionStorage.setItem('set_meal',set_meal);
        //localStorage.setItem('set_meal',set_meal);
        $location.path('choose_order_meals');
    };
})