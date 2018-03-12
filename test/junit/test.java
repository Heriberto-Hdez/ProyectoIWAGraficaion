/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package junit;

import prueba.crimen;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author Heriberto Hernández
 */
public class test {
    
    crimen instance;
    
    @Before
    public void before(){
        System.out.println("before ()");
        instance = new crimen();
    }
    
   @Test
   public void testGetCiudad(){
       String expResult = "Toronto";
       instance.setCiudad("Toronto");// se asigna un valor vacio
       String result = instance.getCiudad();
       System.out.println("Ciudad: "+result);
       assertEquals(expResult, result);
   }
   
   @Test
   public void testGetTipoCrimen(){
       String expResult = "Homicidio";
       instance.setTipoCrimen("Homicidio");// se asigna un valor vacio
       String result = instance.getTipoCrimen();
       System.out.println("Tipo de crimen: "+result);
       assertEquals(expResult, result);
    }
   
   @Test
   public void testGetAño(){
       String expResult = "2007";
       instance.setAño("2007");// se asigna un valor vacio
       String result = instance.getAño();
       System.out.println("Año: "+result);
       assertEquals(expResult, result);
    }
  
   @Test
   public void testGetCantidad(){
       int expResult = 112;
       instance.setCantidad(112);
       int result = instance.getCantidad();
       System.out.println("Cantidad: "+result);
       assertEquals(expResult, result);
   }

}
