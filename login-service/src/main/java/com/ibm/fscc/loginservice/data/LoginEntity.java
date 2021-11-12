package com.ibm.fscc.loginservice.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="users")
public class LoginEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	@Column(name="email")
	private String email; // primary key
	@Column(name="password")
	private String password; // encrypted
	@Column(name="loggedin")
	private boolean loggedIn;
	
	public LoginEntity() {}
	
	public LoginEntity(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}

	public LoginEntity(long id, String email, String password) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
	}


	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean isLoggedIn() {
		return loggedIn;
	}

	public void setLoggedIn(boolean loggedIn) {
		this.loggedIn = loggedIn;
	}

}
