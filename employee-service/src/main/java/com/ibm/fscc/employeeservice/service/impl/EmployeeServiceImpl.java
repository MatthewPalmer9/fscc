package com.ibm.fscc.employeeservice.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;

import com.ibm.fscc.employeeservice.data.EmployeeEntity;
import com.ibm.fscc.employeeservice.data.Status;
import com.ibm.fscc.employeeservice.employeerepository.EmployeeRepository;
import com.ibm.fscc.employeeservice.service.EmployeeService;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class EmployeeServiceImpl implements EmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Autowired
	private Environment env;
	
	@Autowired 
	WebClient.Builder webClientBuilder;

	@Override
	public Object getEmployee(long id, String JWT_TOKEN) {
		List<Status> response = authenticate(JWT_TOKEN);
		if(response.isEmpty()) { // [] 
			return accessDeniedMessage();
		}
		
		return employeeRepository.findById(id);
	}

	@Override
	public Object getEmployees(String JWT_TOKEN) {
		List<Status> response = authenticate(JWT_TOKEN);
		if(response.isEmpty()) { // [] 
			return accessDeniedMessage();
		}
		
		return employeeRepository.findAll();
	}

	@Override
	public Object createEmployee(EmployeeEntity employee, String JWT_TOKEN) {
		List<Status> response = authenticate(JWT_TOKEN);
		if(response.isEmpty()) { // [] 
			return accessDeniedMessage();
		}
		
		UUID uuid = UUID.randomUUID();
		employee.setUserId(uuid.toString());
		
		return employeeRepository.save(employee);
	}

	@Override
	public Object updateEmployee(EmployeeEntity employee, String JWT_TOKEN) {
		List<Status> response = authenticate(JWT_TOKEN);
		if(response.isEmpty()) { // [] 
			return accessDeniedMessage();
		}
		
		return employeeRepository.save(employee);
	}
	
	@Override
	public Object deleteEmployee(EmployeeEntity payload, String JWT_TOKEN) {
		List<Status> response = authenticate(JWT_TOKEN);
		if(response.isEmpty()) { // []
			return accessDeniedMessage();
		}
		
		HashMap<String, String> map = new HashMap<>();
		map.put("success", "Employee successfully deleted.");
		
		employeeRepository.delete(payload);
		return map;
	}
	
	// AUTHENTICATION CHECKER
	public List<Status> authenticate(String JWT_TOKEN) {
		List<Status> response = webClientBuilder.build()
				.get().uri("http://" + env.getProperty("eureka.instance.hostname") +":8081/user/authcheck")
				.header("Authorization", "Bearer " + JWT_TOKEN)
				.retrieve()
				.bodyToFlux(Status.class)
				.onErrorResume(WebClientResponseException.class, 
						err -> err.getRawStatusCode() == 401 ? Flux.empty() : Mono.error(err))
				.collectList().block();
		
		return response;
	}
	
	public HashMap<String, String> accessDeniedMessage() {
		HashMap<String, String> map = new HashMap<>();
		map.put("error", "Bad access token. You are not authroized to view this API.");
		return map;
	}
	
}
