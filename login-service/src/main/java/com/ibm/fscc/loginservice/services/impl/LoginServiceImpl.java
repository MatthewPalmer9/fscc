package com.ibm.fscc.loginservice.services.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.ibm.fscc.loginservice.config.JwtTokenUtil;
import com.ibm.fscc.loginservice.data.JwtRequest;
import com.ibm.fscc.loginservice.data.JwtResponse;
import com.ibm.fscc.loginservice.data.LoginEntity;
import com.ibm.fscc.loginservice.repository.LoginRepository;
import com.ibm.fscc.loginservice.services.LoginService;

@Service
public class LoginServiceImpl implements LoginService, UserDetailsService {
	
	@Autowired
	private LoginRepository loginRepository;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	
	@Autowired
	AuthenticationManager authenticationManager;


	@Override
	public List<LoginEntity> getUsers() {
		// TODO Auto-generated method stub
		return loginRepository.findAll();
	}

	// LOGIN HANDLER
	@Override
	public Object loginUser(LoginEntity payload) {
		
		// Checks if email exists
		boolean emailDoesNotExist = loginRepository.findByEmail(payload.getEmail()) == null;
		if(emailDoesNotExist) {
			return "Email is invalid. User nonexistent. Please try again.";
		}
		
		// Checks if the password given by the user matches the encrypted password. If so, log them in.
		LoginEntity user = loginRepository.findByEmail(payload.getEmail());
		boolean userPassMatchesEncryptedPass = bCryptPasswordEncoder.matches(payload.getPassword(), user.getPassword());
		if(userPassMatchesEncryptedPass) {
			user.setLoggedIn(true);
			loginRepository.save(user);
		} else {
			return "Password invalid. Please try again.";
		}
		return user;
	}

	// LOGOUT HANDLER 
	@Override
	public Object logoutUser(LoginEntity payload) {
		// TODO Auto-generated method stub
		LoginEntity user = loginRepository.findByEmail(payload.getEmail());
		if(user.isLoggedIn() == true) {
			user.setLoggedIn(false);
			loginRepository.save(user);
		}
		return user;
	}


	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		LoginEntity user = loginRepository.findByEmail(email);
		if(user.getEmail().equals(email)) {
			return new User(user.getEmail(), user.getPassword(), new ArrayList<>());
		} else {
			throw new UsernameNotFoundException("User not found with email: " + email);
		}
	}


	@Override
	public ResponseEntity<JwtResponse> requestToken(JwtRequest authenticationRequest) throws Exception {
		// TODO Auto-generated method stub
		authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
		
		final UserDetails authUser = loadUserByUsername(authenticationRequest.getUsername());
		final String token = jwtTokenUtil.generateToken(authUser);
		
		return ResponseEntity.ok(new JwtResponse(token));
	}
	
	private void authenticate(String username, String password) throws Exception {
		Objects.requireNonNull(username);
		Objects.requireNonNull(password);
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
		
}
