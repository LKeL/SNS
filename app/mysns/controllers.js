


var snsController = angular.module('snsController', []);


snsController.controller('test', function($scope) {
    $scope.phones = [
        {'name': 'Nexus S',
            'snippet': 'Fast just got faster with Nexus S.'},
        {'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.'},
        {'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.'}
    ];

});


snsController.controller('loginController', function($scope) {
    $scope.loginTOregister = function() {
        $('#mylogin').modal('toggle');
        setTimeout(myregister,600);
        function myregister() {
            $("#myregister").modal("show");
        }
    }
    $scope.clickdownlogin = function () {
        $('#mylogin').modal('toggle');
    }
    $scope.mypopover = function () {
        $('#mypopover').popover('show');
    }
    $scope.dropdownbutton = function () {
        $('.items').toggleClass('open');
    }
    $scope.dropdownitems = function () {
        var $li = $(this);//选中当前DOM元素
        $('.items > p').text($li.attr('data-value'));
        $li.addClass('selected').siblings().removeClass('selected');
        $('.items').removeClass('open');
    }
});

