package com.ibm.fscc.employeeservice.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.client.RestTemplate;

@Configuration
@EnableWebSecurity 
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	DataSource dataSource;

	private static final String EMP_ROUTE = "/employee/*";


	// ENABLES USE OF BCryptPasswordEncoder THROUGHOUT APPLICATION
	@Autowired
	public void configAuthentication(AuthenticationManagerBuilder auth) throws Exception {
		auth.jdbcAuthentication()
		.dataSource(dataSource);
	}
	
	// PERMITS RESTful API REQUESTS TO ROUTES 
	@Override
	public void configure(HttpSecurity http) throws Exception {
		http.csrf().disable().cors().and().authorizeRequests()
	    .antMatchers("/").permitAll()
	    .antMatchers(HttpMethod.POST, EMP_ROUTE).permitAll()
	    .antMatchers(HttpMethod.PATCH, EMP_ROUTE ).permitAll()
	    .antMatchers(HttpMethod.DELETE, EMP_ROUTE ).permitAll()
	    .antMatchers(HttpMethod.GET, EMP_ROUTE).permitAll()
	    .anyRequest().authenticated();
	}
}