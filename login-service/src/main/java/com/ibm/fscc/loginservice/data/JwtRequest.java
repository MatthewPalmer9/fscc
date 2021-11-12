package com.ibm.fscc.loginservice.data;

import java.io.Serializable;

public class JwtRequest implements Serializable {
	
	private static final long serialVersionUID = 5926468583005150707L;

	private String username;
	private String password;
	
	//default constructor for JSON Parsing
	public JwtRequest(){}

	public JwtRequest(String username, String password) {
		this.setUsername(username);
		this.setPassword(password);
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String email) {
		this.username = email;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "JwtRequest [email=" + username + ", password=" + password + "]";
	}
}
