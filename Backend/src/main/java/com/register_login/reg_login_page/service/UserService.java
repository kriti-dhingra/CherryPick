package com.register_login.reg_login_page.service;


import com.register_login.reg_login_page.model.StatusCode;
import com.register_login.reg_login_page.model.User;

public interface UserService {
	public StatusCode saveUser(User user);
	public User validateUser(User user);
	public String encrypt(String str);
	public String decrypt(String str);
}
