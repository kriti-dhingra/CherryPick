package com.register_login.reg_login_page.model;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.*;

@Entity
public class User {
	@Id
	private String email;
	private String password;
	private String user_name;
	public User()
	{}
	public User(String email, String password,String user_name) {
		super();
		this.email = email;
		this.password = password;
		this.user_name = user_name;
		// this.id=id;
	}
	// public int getId(){
	// 	return this.id;
	// }
	// public void getId(int id){
	// 	this.id=id;
	// }
	@NotBlank(message="Email is required")
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@NotBlank(message = "Password is required")
	@Size(min = 6, message = "Password must be at least 6 characters")
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	@NotBlank(message = "User name is required")
	public String getUser_name() {
		return this.user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
}
