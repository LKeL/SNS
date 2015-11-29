/**
 * Created by heartblood on 15/11/18.
 */

var phonecatServices = angular.module('snsServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
    function($resource){
        return $resource('phones/:phoneId.json', {}, {
            query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
        });
    }]);
