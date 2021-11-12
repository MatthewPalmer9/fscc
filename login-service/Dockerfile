FROM java:8-jdk-alpine
EXPOSE 8081
WORKDIR /app
COPY target/login-service.jar login-service.jar
ENTRYPOINT ["java","-jar","login-service.jar"]