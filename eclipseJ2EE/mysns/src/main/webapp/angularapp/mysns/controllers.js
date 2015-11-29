


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

snsController.controller('homeController', function($scope) {
    var AnimEnd = 'animationend';
    var nav = $('.nav');
    var navButton = $('.nav-el');
    var overlay = $('.home-overlay');
    $scope.test = function () {
        console.log(123);
    }
    /* On menu button click event */
    $(navButton).click(function(event){
        /* This conditional statement is here to prevent
         clicks on inactive buttons on IE10, as pointer-events
         cannot be applied on non-SVG elements */
        if ($(this).hasClass("inactive")) {
            event.preventDefault();

        } else {

            /* Remove old previous classes */
            $(navButton).removeClass('inactive_reverse active_reverse');
            $(nav).removeClass('fx-box_rotate fx-box_rotate_reverse');
            $(overlay).removeClass('active active_reverse');

            /* Add classes on defined elements */
            $(this).siblings().addClass('inactive');
            $(this).addClass('active');
            $(nav).addClass('fx-box_rotate');
            if ($(this).hasClass("active")) {
                console.log(this);
            }
                /* Activate related overlay */
            var o_target = $(this).data('id');
            console.log(o_target);
            console.log(this.id);
            $('#'+o_target).addClass('active');

            /* Prevent scrolling */
            $("body").addClass('home-noscroll');
            if ($(o_target).hasClass("active"))  {
                console.log(o_target);
                console.log(this.id);
            }

        }

    });

    /* On close button click event */
    $(".close").click(function(){

        /* Add *_reverse classes */
        $('.active', nav).removeClass('active').addClass('active_reverse');
        $('.inactive', nav).addClass('inactive_reverse');
        $(nav).addClass('fx-box_rotate_reverse');
        $(this).parent().addClass('active_reverse');

        /* Remove .noscroll and .inactive when animation is finished */
        $('.inactive_reverse').bind(AnimEnd, function(){

            $('body').removeClass('home-noscroll');
            $(navButton).removeClass('inactive');
            $('.inactive_reverse').unbind(AnimEnd);

        });

    });
});