package com.register_login.reg_login_page.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.register_login.reg_login_page.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, String>{
}
