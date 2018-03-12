/**
 * # informacionCtrl
 * se llama al modulo de la aplicacion "adminApp" y en seguida se llama al controlador con los parametros
 */

angular.module('adminApp').controller(
    'informacionCtrl', 
    function ($scope) {
        var id="informacion";
    	activeMenu(id);
    }
);

