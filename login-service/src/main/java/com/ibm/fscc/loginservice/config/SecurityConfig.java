package com.ibm.fscc.loginservice.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private JwtRequestFilter jwtRequestFilter;
	
	private static final String USER_ROUTE = "/user";

	// SETS PasswordEncoder TO BCryptPasswordEncoder
	@Bean
	public PasswordEncoder encoder() {
		return new BCryptPasswordEncoder();
	}

	// ENABLES USE OF BCryptPasswordEncoder THROUGHOUT APPLICATION
	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(encoder());
	}
	
	@Bean
	@Override
	public UserDetailsService userDetailsService() {
		return super.userDetailsService();
	}
	
	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}
	
	// PERMITS RESTful API REQUESTS TO ROUTES 
	@Override
	public void configure(HttpSecurity http) throws Exception {
		http.csrf().disable().cors().and().authorizeRequests()
			.antMatchers("/").permitAll()
			.antMatchers(HttpMethod.POST, USER_ROUTE + "/login").permitAll()
			.antMatchers(HttpMethod.POST, USER_ROUTE + "/authenticate").permitAll()
		    .anyRequest().authenticated().and()
		    .exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint).and().sessionManagement()
		    .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		
		// Add a filter to validate the tokens with every request
		http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
		
	}
}