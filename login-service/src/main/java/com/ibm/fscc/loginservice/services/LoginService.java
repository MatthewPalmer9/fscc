package com.ibm.fscc.loginservice.services;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.ibm.fscc.loginservice.data.JwtRequest;
import com.ibm.fscc.loginservice.data.JwtResponse;
import com.ibm.fscc.loginservice.data.LoginEntity;

@Service
public interface LoginService {

	public List<LoginEntity> getUsers();

	public Object loginUser(LoginEntity payload);

	public Object logoutUser(LoginEntity payload);

	public UserDetails loadUserByUsername(String username);

	public ResponseEntity<JwtResponse> requestToken(JwtRequest authenticationRequest) throws Exception;
	
}
