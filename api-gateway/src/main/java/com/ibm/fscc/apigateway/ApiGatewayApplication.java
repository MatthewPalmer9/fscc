package com.ibm.fscc.apigateway;

import javax.servlet.http.HttpServletRequest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import com.netflix.zuul.exception.ZuulException;

@EnableZuulProxy // So the application knows to act as the API Gateway
@EnableEurekaClient
@SpringBootApplication
@CrossOrigin(origins="*")
public class ApiGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiGatewayApplication.class, args);
	}
	
	@Bean 
	public ZuulFilter zuulFilter() {
		return new ZuulFilter() {

			@Override
			public boolean shouldFilter() {
				// TODO Auto-generated method stub
				return true;
			}

			@Override
			public Object run() throws ZuulException {
				RequestContext ctx = RequestContext.getCurrentContext();
				HttpServletRequest request = ctx.getRequest();
				System.out.println("Request Method : "+request.getMethod()+" Request URL : "+request.getRequestURL().toString());
				return null;
			}

			@Override
			public String filterType() {
				// TODO Auto-generated method stub
				return "pre";
			}

			@Override
			public int filterOrder() {
				// TODO Auto-generated method stub
				return 1;
			}
			
		};
	}
}
