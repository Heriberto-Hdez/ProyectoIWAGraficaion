/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package prueba;

/**
 *
 * @author Heriberto Hernández
 */
public class crimen {
    
    private String ciudad;
    private String tipoCrimen;
    private String año;
    private int cantidad;

    public crimen() {
    }

    public crimen(String ciudad, String tipoCrimen, String año, int cantidad) {
        this.ciudad = ciudad;
        this.tipoCrimen = tipoCrimen;
        this.año = año;
        this.cantidad = cantidad;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public String getTipoCrimen() {
        return tipoCrimen;
    }

    public void setTipoCrimen(String tipoCrimen) {
        this.tipoCrimen = tipoCrimen;
    }

    public String getAño() {
        return año;
    }

    public void setAño(String año) {
        this.año = año;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

}
