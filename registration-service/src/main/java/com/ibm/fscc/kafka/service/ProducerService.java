package com.ibm.fscc.kafka.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ibm.fscc.kafka.model.EmployeeEntity;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class ProducerService {

	@Autowired 
	ObjectMapper objectMapper;
	
	@Autowired
	private KafkaTemplate<String, EmployeeEntity> kafkaTemplate;
	
	
	public Object send(EmployeeEntity employee) throws JsonProcessingException {
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		employee.setStatus("PENDING");
		employee.setStatusDate(simpleDateFormat.format(new Date()));
		
		kafkaTemplate.send("registration", employee);
		return employee;
	}
  
}
