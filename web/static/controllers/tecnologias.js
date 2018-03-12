/**
 * # tecnologiasCtrl
 * se llama al modulo de la aplicacion "adminApp" y en seguida se llama al controlador con los parametros
 */
angular.module('adminApp').controller(
    'tecnologiasCtrl', 
    function ($scope) {
        var id="tecnologias";
    	activeMenu(id);
    }
);