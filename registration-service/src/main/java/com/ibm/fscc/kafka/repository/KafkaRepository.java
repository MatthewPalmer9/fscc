package com.ibm.fscc.kafka.repository;

import com.ibm.fscc.kafka.model.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface KafkaRepository extends JpaRepository<EmployeeEntity, Long> {
	@Query("FROM employees WHERE email = ?1")
	EmployeeEntity findByEmail(String email);
}
