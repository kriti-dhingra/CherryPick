package com.register_login.reg_login_page.model;

public class StatusCode {
    private int code;
    private String message;

    public StatusCode(){}
    public StatusCode(int code,String message){
        this.code=code;
        this.message=message;
    }

    public int getCode() {
        return this.code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMessage() {
        return this.message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
   
}
