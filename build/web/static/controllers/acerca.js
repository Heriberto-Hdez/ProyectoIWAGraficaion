/**
 * # acercaCtrl
 * se llama al modulo de la aplicacion "adminApp" y en seguida se llama al controlador con los parametros
 */

angular.module('adminApp').controller(
    'acercaCtrl', 
    function ($scope) {
        var id="acerca";
    	activeMenu(id);
    }
);