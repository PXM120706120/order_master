/**
 * Created by qianshiguang on 15-11-27.
 */
app.controller('ChoosePeopleCtrl',function($scope,$location){
    $scope.people = ['赵大', '钱二', '张三', '李四', '王五', '刘六'];


    $scope.for_people = function(person){
        sessionStorage.setItem('person',person);
        //localStorage.setItem('person',person);
        $location.path('choose_order_meals');
    };
})