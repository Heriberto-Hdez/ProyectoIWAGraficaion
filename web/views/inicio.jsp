<%-- 
    Document   : main
    Created on : 8/03/2018, 10:18:59 AM
    Author     : Heriberto Hernández
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<link rel="stylesheet" href="client/bower_components/bootstrap/dist/css/bootstrap.css" />
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/jquery-1.12.0.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/Chart.bundle.min.js"></script>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/css/style.css"/>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/graficas.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/d3.v4.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/circular.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/doblelinea.js"></script>

	<div data-ng-init="inf='A continuación se presentan algunas de las estadísticas del crimen en 1998 a 2011 que varían considerablemente a través de diferentes partes de Canadá. En general, las provincias orientales tienen las tasas de delincuencia violenta más bajas, mientras que las provincias occidentales tienen tasas más altas y los territorios aún más altos. Las gráficas a continuación muestran homicidios, crimen violento y no violento por año o por ciudad.'; inf2='Se observa que la tasa de crimen no violento más alta fue en 1998, Toronto tiene la tasa de homicidios más alta en 2011 y se muestra que en Edmonton ha aumentado los homicidios en de 1998 a 2011.'">
		<p class="parrafo">{{  inf }}​ </p>
                <p class="parrafo"> {{  inf2 }} </p>
        
        <table style="width:100%">
            <tr>
                <td>
                   <div >
                        <canvas id="chart" width="600" height="400"></canvas>
                   </div> 
                </td>
                <td >
                    <div  id="canvas-container" >
                        <canvas id="circular" width="600" height="450"></canvas>
                    </div>
                </td>
            </tr>
            
        </table>        
                    <div class="graficas" id="canvas-container" >
                    <h3 class="tituloGrafica">Homicidios por año en Edmonton, Canadá.</h3>
		    <script > dona()</script>
                    </div>
                
                
                    <div >
                    <script>doble()</script>  
                    </div>
                
        </div>
	​


