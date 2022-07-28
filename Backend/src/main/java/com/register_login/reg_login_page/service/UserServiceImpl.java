package com.register_login.reg_login_page.service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import org.springframework.stereotype.Service;

import com.register_login.reg_login_page.model.StatusCode;
import com.register_login.reg_login_page.model.User;

@Service
public class UserServiceImpl implements UserService{
	@PersistenceContext
	private EntityManager entityManager;

	public String encrypt(String str){
	    int code;
	    String result = "";
	    for (int i = 0; i < str.length(); i++) {
	      code = Math.round((float) Math.random()*8+1);
	      result += code + Integer.toHexString( ((int) str.charAt(i) ) ^ code )+"-";
	    }
	    return result.substring(0, result.lastIndexOf("-"));
	  }

	  public String decrypt(String str){
	    str = str.replace("-", "");
	    String result = "";
	    for (int i = 0; i < str.length(); i+=3) {
	      String hex =  str.substring(i+1, i+3);
	      result += (char) (Integer.parseInt(hex, 16) ^ (Integer.parseInt(String.valueOf(str.charAt(i)))));
	    }
	    return result;
	  }
	
	@Override
	@Transactional
	public StatusCode saveUser(User user) {
		StatusCode status=new StatusCode();
		User searchData=(User)entityManager.find(User.class,user.getEmail());
		if(searchData!=null){
			status.setCode(0);
			status.setMessage("User already exists");
		}
		else{
			user.setPassword(encrypt(user.getPassword()));
			entityManager.persist(user);
			status.setCode(1);
			status.setMessage("User Successfully inserted");
		}
		return status;
	}
	
	@Override
	public User validateUser(User user) {
		try {
		User userData= (User)entityManager.find(User.class,user.getEmail());
		if(userData==null){
			user.setEmail(null);
			return user;
		}
		if(decrypt(userData.getPassword()).equals(user.getPassword()))
			return userData;
		else{
			user.setPassword(null);
			return user; 
			}
		}
		catch(IndexOutOfBoundsException exception){
			return null;
		}
	}

}
