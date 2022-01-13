package com.ibm.fscc.loginservice.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.fscc.loginservice.data.JwtRequest;
import com.ibm.fscc.loginservice.data.LoginEntity;
import com.ibm.fscc.loginservice.services.LoginService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping(path="/user")
public class LoginController {

	@Autowired
	private Environment env;
	
	@Autowired
	AuthenticationManager authenticationManager;
	
	@Autowired
	private BCryptPasswordEncoder encoder;
	
	@Autowired
	private LoginService loginService;
	
	// #### JWT AUTH ROUTE ####
	@RequestMapping(value="/authenticate", method=RequestMethod.POST)
	public ResponseEntity<?> generateAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
		return loginService.requestToken(authenticationRequest);
	}
	
	// #### ROUTES ####
	@GetMapping(path="/status/check")
	public @ResponseBody String status() {
		return "Working on port " + env.getProperty("server.port");
	}
	
	@GetMapping(path="/authcheck")
	public @ResponseBody Map<String, String> auth() {
		HashMap<String, String> map = new HashMap<>();
		map.put("status", "Authorized");
		
		return map;
	}
	
	@GetMapping(path="/bcrypt/check")
	public @ResponseBody String encode() {
		return encoder.encode("developerPassword");
	}
	
	@GetMapping(path="/all")
	public @ResponseBody Iterable<LoginEntity> allUsers() {
		return loginService.getUsers();
	}
	
	@PostMapping(path="/login")
	public Object login(@RequestBody LoginEntity payload) {
		return loginService.loginUser(payload);
	}
	
	@PostMapping(path="/logout")
	public Object logout(@RequestBody LoginEntity payload) {
		return loginService.logoutUser(payload);
	}
}
