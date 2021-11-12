FROM java:8-jdk-alpine
EXPOSE 9000
WORKDIR /app
COPY target/zuul-api.jar zuul-api.jar
ENTRYPOINT ["java","-jar","zuul-api.jar"]