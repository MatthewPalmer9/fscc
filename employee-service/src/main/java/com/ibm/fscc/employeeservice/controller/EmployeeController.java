package com.ibm.fscc.employeeservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.ibm.fscc.employeeservice.data.EmployeeEntity;
import com.ibm.fscc.employeeservice.service.EmployeeService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping(path = "/employee")
public class EmployeeController {
	
	@Autowired
	private Environment env;
	
	@Autowired
	private EmployeeService employeeService;
	
	@GetMapping(path = "/status/check")
	public @ResponseBody String status() {
		return "Working on port " + env.getProperty("server.port") + "!";
	}
	
	@GetMapping(path="/all/token={jwt}")
	public @ResponseBody Object getAllEmployees(@PathVariable("jwt") String JWT_TOKEN) {
		return employeeService.getEmployees(JWT_TOKEN);
	}
	
	@GetMapping(path = "/{id}/token={jwt}")
	public @ResponseBody Object getEmployee(@PathVariable("id") Long id, @PathVariable("jwt") String JWT_TOKEN) {
		return employeeService.getEmployee(id, JWT_TOKEN);
	}
 
	@PostMapping(path= "/create/token={jwt}")
	public @ResponseBody Object createEmployee(@RequestBody EmployeeEntity payload, @PathVariable("jwt") String JWT_TOKEN) {
		return employeeService.createEmployee(payload, JWT_TOKEN);
	}
	
	@PatchMapping(path="/update/token={jwt}")
	public @ResponseBody Object updateEmployee(@RequestBody EmployeeEntity payload, @PathVariable("jwt") String JWT_TOKEN) {
		return employeeService.updateEmployee(payload, JWT_TOKEN);
	}
	
	@DeleteMapping(path="/delete/token={jwt}")
	public @ResponseBody Object deleteEmployee(@RequestBody EmployeeEntity payload, @PathVariable("jwt") String JWT_TOKEN) {
		return employeeService.deleteEmployee(payload, JWT_TOKEN);
	}
}
