/**
 * # inicioCtrl
 * se llama al modulo de la aplicacion "adminApp" y en seguida se llama al controlador con los parametros
 */
angular.module('adminApp').controller(
    'inicioCtrl', 
    function ($scope) { // $scope es propietario de las variables
        var id="inicio";
    	activeMenu(id);
    }
);