FROM java:8-jdk-alpine
EXPOSE 10000
WORKDIR /app
COPY target/registration-service.jar registration-service.jar
ENTRYPOINT ["java","-jar","registration-service.jar"]