package com.ibm.fscc.employeeservice.employeerepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ibm.fscc.employeeservice.data.EmployeeEntity;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long>{
	@Query("FROM employees WHERE email = ?1")
	EmployeeEntity findByEmail(String email);
}
