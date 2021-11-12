package com.ibm.fscc.kafka.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ibm.fscc.kafka.model.EmployeeEntity;
import com.ibm.fscc.kafka.repository.KafkaRepository;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class ConsumerService {

	private static final Logger log = LoggerFactory.getLogger(ConsumerService.class);
	ObjectMapper objectMapper = new ObjectMapper();
	
	@Autowired
	KafkaRepository kafkaRepository;
	
	private SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm");
	
    @KafkaListener(topics="registration", groupId="registration")
    public void consume(String record) throws JsonProcessingException {
		EmployeeEntity employeeEvent = objectMapper.readValue(record, EmployeeEntity.class);
		employeeEvent.setStatus("APPROVED");
		employeeEvent.setStatusDate(simpleDateFormat.format(new Date()));
		
		kafkaRepository.save(employeeEvent);
    }
}
