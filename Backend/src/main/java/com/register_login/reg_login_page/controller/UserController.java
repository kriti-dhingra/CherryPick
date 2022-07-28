package com.register_login.reg_login_page.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.register_login.reg_login_page.model.StatusCode;
import com.register_login.reg_login_page.model.User;
import com.register_login.reg_login_page.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper; 
import com.fasterxml.jackson.databind.ObjectWriter; 



@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
	@Autowired
	private UserService userService;
	
	@PostMapping("/signup")
	public String add(@RequestBody User user)throws JsonProcessingException {
		StatusCode status= userService.saveUser(user);
		ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
		String json = ow.writeValueAsString(status);
		return json;
	}
	

	@PostMapping("/login")
	@ResponseBody
	public String login(@RequestBody User user) throws JsonProcessingException {
		User bool= userService.validateUser(user);
		ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
		String json = ow.writeValueAsString(bool);
		return json;
	}

}
