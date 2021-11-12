package com.ibm.fscc.loginservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ibm.fscc.loginservice.data.LoginEntity;

@Repository // This tells Spring that this is the interface to use for our database management functions.

// This links the interface to our database table. 
// We tell it to look at our Login table, and we tell it that the value of our id field is Long.
public interface LoginRepository extends JpaRepository<LoginEntity, Long> { 
	
	@Query("FROM users WHERE email = ?1")
	LoginEntity findByEmail(String email);
	
	@Query("FROM users WHERE email = ?1")
	LoginEntity findStringByEmail(String email);

}
