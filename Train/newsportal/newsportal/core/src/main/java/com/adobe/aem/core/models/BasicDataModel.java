package com.adobe.aem.core.models;

public class BasicDataModel {

    private String message = "Hai, this text is from the Sling model.";
    private  int[] arr = new int[]{ 2,4,6,8,10 }; 

    public String getMessage() {
        return message;
    }

    public int[] getArr() {
            return arr;
    }
}