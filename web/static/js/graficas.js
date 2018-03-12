/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


	$(document).ready(function(){
		/*se crean los labels, 3 datasets con los labels, color y datos*/
		var datos = {
			labels : ["1998", "1999", "2000", "2001", "2002","2003","2004", "2005", "2006", "2007", "2008","2009","2010","2011"],
			datasets : [{
				label : "Homicidios",
				backgroundColor : "#00ff00",
				data : [76,61,81,78,90,95,94,104,99,112,103,90,80,86]
			},
			{

				label : "Crimen no violento",
				backgroundColor : "#46BFBD",
				data : [5584,4813,4596,4654,4610,4379,3983,3801,3921,3679,3481,3309,3113,2984]
			},
			{
				label : "Crimen violento",
				backgroundColor : "#0000ff",
				data : [1118,1142,1290,1300,1210,1106,1037,1034,1054,1046,987,940,906,876]
			}
			]
		};

                /*se selecciona el grafico en una variable, se crea objeto tipo bar de la libreria 
                 * primer parametro canvas y el segunto es un objeto json con el tipo de grafica, continua con los datos que se van a graficar y las opciones de graficacion*/
		var canvas = document.getElementById('chart').getContext('2d');
		window.bar = new Chart(canvas, {
			type : "bar",
			data : datos,
			options : {
				elements : {
					rectangle : {
						borderWidth : 1,
						borderColor : "rgb(0,255,0)",
						borderSkipped : 'bottom'
					}
				},
				responsive : true,  /*compatible con dispositivos moviles*/
				title : {  /*titulo de la grafica*/
					display : true,
					text : "Crimenes en Toronto, Canadá 1998-2011"
				}
			}
		});
	});
	
	
	$(document).ready(function(){
            /*variable con los datos, tipo de grafico, el objeto json, colores y los labels son las etiquetas para cada
             * uno de los datos*/
		var datos = {
			type: "pie",
			data : {
				datasets :[{
					data : [
						4,
						18,
						3,
						3,
						54,
						16,
						86,
						39,
						6,
						14,
						50,
						43,
						0,
						3,
						7,
					
					],
					backgroundColor: [
						"#00FF00",
						"#CC99FF",
						"#FFFF00",
						"#FF6666",
						"#0000ff",
						"#F7464A",
						"#46BFBD",
						"#FDB45C",
						"#FF3399",
						"#330066",
						"#299BFF",
						"#70F393",
						"#DAFA06",
						"#0657FA",
						"#CAC3F7",
						
					],
				}],
				labels : [
					"St. John's",
					"Halifax",
					"Saint John",
					"Quebec",
					"Montreal",
					"Ottawa",
					"Toronto",
					"Winnipeg",
					"Saskatoon",
					"Calgary",
					"Edmonton",
					"Vancouver",
					"Yukon",
					"Northwest Territories",
					"Nunavut",
				]
			},
			options : {
				responsive : true, /*compatible con dispositivos moviles*/
				title : {  /*titulo de la grafica*/
					display : true,
					text : "Homicidios en Canadá 2011"
				}
			}
		};

                /*se selecciona el grafico en una variable y se crea un objeto de la libreria con los parametros donde se quiere graficar y los datos*/
		var canvas = document.getElementById('circular').getContext('2d');
		window.pie = new Chart(canvas, datos);

			

	});
        