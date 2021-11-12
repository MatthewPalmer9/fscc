//package com.ibm.fscc.kafka.config;
//
//import java.util.Date;
//
//import org.apache.commons.lang.StringUtils;
//import org.apache.kafka.common.serialization.Serdes;
//import org.apache.kafka.streams.StreamsBuilder;
//import org.apache.kafka.streams.kstream.Consumed;
//import org.apache.kafka.streams.kstream.KStream;
//import org.apache.kafka.streams.kstream.Printed;
//import org.apache.kafka.streams.kstream.Produced;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.configurationprocessor.json.JSONException;
//import org.springframework.boot.configurationprocessor.json.JSONObject;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.kafka.annotation.EnableKafkaStreams;
//import org.springframework.kafka.support.serializer.JsonSerde;
//
//import com.fasterxml.jackson.core.JsonProcessingException;
//import com.fasterxml.jackson.databind.JsonMappingException;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.ibm.fscc.kafka.model.EmployeeEntity;
//import com.ibm.fscc.kafka.repository.KafkaRepository;
//
//@Configuration
//public class RegistrationJsonStream {
//	
//	
//	private static final Logger log = LoggerFactory.getLogger(RegistrationJsonStream.class);
//	
//	@Autowired
//	private KafkaRepository kafkaRepository;
//	
//	@Autowired
//	private ObjectMapper objectMapper;
//
//	@Bean
//	public KStream<String, EmployeeEntity> kstreamRegistrationJson(StreamsBuilder builder) throws NoSuchFieldException, SecurityException {
//		var stringSerde = Serdes.String();
//		var jsonSerde = new JsonSerde<>(EmployeeEntity.class);
//		KStream<String, EmployeeEntity> sourceStream = builder.stream("registration", Consumed.with(stringSerde, jsonSerde));
//		KStream<String, EmployeeEntity> approvedStream = sourceStream.mapValues(value -> {
//			try {
//				return approveEmployee(value);
//			} catch (JSONException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//			System.out.println(value);
//			return value;
//		}); 
//		
//		System.out.println("APPROVED: " + approvedStream);
//		approvedStream.print(Printed.<String, EmployeeEntity>toSysOut().withLabel("NEW OBJ: "));
//		
//		approvedStream.to("registration.approved", Produced.with(stringSerde, jsonSerde));
//	
//		return sourceStream;
//	}
//	
//	private EmployeeEntity approveEmployee(EmployeeEntity value) throws JSONException {
//		value.setStatus("APPROVED");
//		value.setStatusDate(new Date());
//		return value;
//	}
//}
