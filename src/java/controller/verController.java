/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;


import javax.ejb.Local;
import org.springframework.context.i18n.LocaleContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.portlet.ModelAndView;

/**
 *
 * @author Heriberto Hernández
 */
@Controller
//@RequestMapping("/ver.htm")
public class verController {
    
//se retorna un string, siempre

    @RequestMapping(value = "/index")
    public String titulo(Model model){
    
        String t= "Estadísticas principales del crimen de la ciudad canadiense 1998-2011";
        String i= "Este es un ejemplo de dc.js que demuestra las diferencias de la tasa de criminalidad entre las principales ciudades canadienses. Esta visualización revela que la tasa de criminalidad en general, incluidos los delitos violentos y no violentos, ha disminuido en la mayoría de las principales ciudades de Canadá. Este ejemplo particular utiliza un gráfico de superposición de burbujas con un mapa svg personalizado para generar una visualización flexible de datos geográficos combinada con otros gráficos dc.js.";
        model.addAttribute("titulo", t);
        model.addAttribute("informacion", i);
        return "index"; //aqui muestra la vista error
    

    }
    
}
