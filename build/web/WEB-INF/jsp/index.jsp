<%@page contentType="text/html" pageEncoding="UTF-8"%>
<DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">

<html class="no-js">
    <head>
        <meta charset="utf-8">
        <title>Proyecto IWA Graficación</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
     
        <link rel="stylesheet" href="client/bower_components/bootstrap/dist/css/bootstrap.css" />
        <link rel="stylesheet" href="static/styles/main.css">
	<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/jquery-1.12.0.min.js"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/static/js/Chart.bundle.min.js"></script>
        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/css/style.css"/> 
        
        <script type="text/javascript" src="${pageContext.request.contextPath}/static/js/doblelinea.js"></script>
        
	
        <script src="client/bower_components/angular/angular.js"></script>
	<script src="client/bower_components/es5-shim/es5-shim.js"></script>
	<script src="client/bower_components/json3/lib/json3.js"></script>
	<script src="client/bower_components/angular-resource/angular-resource.js"></script>
	<script src="client/bower_components/angular-cookies/angular-cookies.js"></script>
	<script src="client/bower_components/angular-sanitize/angular-sanitize.js"></script>
	<script src="client/bower_components/angular-animate/angular-animate.js"></script>
	<script src="client/bower_components/angular-touch/angular-touch.js"></script>
	<script src="client/bower_components/angular-route/angular-route.js"></script>

        <!-- Controladores Angular -->
        <script src="static/app.js"></script>
        <script src="static/controllers/inicio.js"></script>
        <script src="static/controllers/informacion.js"></script>
        <script src="static/controllers/acerca.js"></script>
        <script src="static/controllers/tecnologias.js"></script>
        <script src="static/functions.js"></script>
        
    </head>
    <body ng-app="adminApp">
       
        <!-- Aplicacion web de graficación -->
        <div class="container">
            <div class="header">
                <ul class="nav nav-pills pull-right">
                    <li class="active" id="inicio"><a ng-href="#/">Inicio</a></li>
                    <li id="informacion"><a ng-href="#/informacion">Más Información</a></li>
                    <li id="acerca"><a ng-href="#/acerca" >Acerca de</a></li>
		    <li id="tecnologias"><a ng-href="#/tecnologias" >Tecnologías utilizadas</a></li>
                </ul>
               <h3 class="text-muted">Estadísticas principales del crimen de la ciudad canadiense 1998-2011</h3> 
            </div>
            
            <!--Muestra el contenido de cada una de las vistas-->
            <div ng-view=""></div>
        </div>
        
    </body>
</html>