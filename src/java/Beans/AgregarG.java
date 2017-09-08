/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Beans;

/**
 *
 * @author Marco
 */
public class AgregarG {

        int compo_cd;
        String compo_ds;
        String desc;
        String  nparte;
        String  nparte2;
        int  Stock;
    
        public AgregarG(int compo_cd, String compo_ds, String desc, String nparte, String nparte2, int Stock) {
        this.compo_cd = compo_cd;
        this.compo_ds = compo_ds;
        this.desc = desc;
        this.nparte = nparte;
        this.nparte2 = nparte2;
        this.Stock = Stock;
    }
    
    public AgregarG(){}
        
        
    public int getCompo_cd() {
        return compo_cd;
    }

    public void setCompo_cd(int compo_cd) {
        this.compo_cd = compo_cd;
    }

    public String getCompo_ds() {
        return compo_ds;
    }

    public void setCompo_ds(String compo_ds) {
        this.compo_ds = compo_ds;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getNparte() {
        return nparte;
    }

    public void setNparte(String nparte) {
        this.nparte = nparte;
    }

    public String getNparte2() {
        return nparte2;
    }

    public void setNparte2(String nparte2) {
        this.nparte2 = nparte2;
    }

    public int getStock() {
        return Stock;
    }

    public void setStock(int Stock) {
        this.Stock = Stock;
    }


    
    
}
