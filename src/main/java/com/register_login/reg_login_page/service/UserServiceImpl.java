package com.register_login.reg_login_page.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.register_login.reg_login_page.model.User;
import com.register_login.reg_login_page.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public User saveUser(User user) {
		return userRepository.save(user);
	}
	
	@Override
	public User validateUser(User user) {
		try {
		User userData= userRepository.findByEmail(user.getEmail()).get(0);
		if(userData.getPassword().equals(user.getPassword()))
			return userData;
		else
			return null; 
		}
		catch(IndexOutOfBoundsException exception){
			return null;
		}
	}

}
