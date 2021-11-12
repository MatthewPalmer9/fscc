FROM java:8-jdk-alpine
EXPOSE 8761
WORKDIR /app
COPY target/discovery-service.jar discovery-service.jar
ENTRYPOINT ["java","-jar","discovery-service.jar"]