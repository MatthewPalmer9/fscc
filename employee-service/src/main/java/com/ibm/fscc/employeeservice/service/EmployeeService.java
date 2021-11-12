package com.ibm.fscc.employeeservice.service;

import org.springframework.stereotype.Service;

import com.ibm.fscc.employeeservice.data.EmployeeEntity;

@Service
public interface EmployeeService {
	
	public Object getEmployee(long id, String JWT_TOKEN);
	public Object getEmployees(String JWT_TOKEN);
	public Object createEmployee(EmployeeEntity payload, String JWT_TOKEN);
	public Object updateEmployee(EmployeeEntity employee, String JWT_TOKEN);
	public Object deleteEmployee(EmployeeEntity payload, String JWT_TOKEN);
	
}
