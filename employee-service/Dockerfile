FROM java:8-jdk-alpine
EXPOSE 8080
WORKDIR /app
COPY target/employee-service.jar employee-service.jar
ENTRYPOINT ["java","-jar","employee-service.jar"]