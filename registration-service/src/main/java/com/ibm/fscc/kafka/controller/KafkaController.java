package com.ibm.fscc.kafka.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.fscc.kafka.model.EmployeeEntity;
import com.ibm.fscc.kafka.service.ProducerService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping(path="/api")
public class KafkaController {
	
	@Autowired
	private ProducerService producerService;

    @Autowired
    private Environment env;

    @GetMapping(path = "/status/check")
    public String status() {
        return "Working on port " + env.getProperty("server.port") + "!";
    }
    
    @PostMapping(path="/produce")
    public @ResponseBody Object produceEmployee(@RequestBody EmployeeEntity employee) throws Throwable {
    	return producerService.send(employee);
    }

}
