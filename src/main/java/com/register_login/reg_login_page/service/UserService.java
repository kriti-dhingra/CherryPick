package com.register_login.reg_login_page.service;


import com.register_login.reg_login_page.model.User;

public interface UserService {
	public User saveUser(User user);
	public User validateUser(User user);
}
