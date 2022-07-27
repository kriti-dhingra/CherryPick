package com.register_login.reg_login_page.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.register_login.reg_login_page.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, String>{
	
	public List<User> findByEmail(String email);
}
