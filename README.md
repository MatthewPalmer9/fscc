# Full Stack Coding Challenge
Welcome to the IBM BR CIC Java Full Stack Coding Challenge.  The coding challenge is designed to build the skills of apprentices and entry level associates seeking a path as a Java Full Stack developer with a cloud native approach.  The challenge leverages the technologies highly in demand by our clients.  These technologies are not limited too but include Java, Spring Boot, Spring Cloud, Docker, Docker Compose, Kubernetes, Angular and React.  There are eight components (containers) that should be running simultaneously:  

- Two UIs (Angular and React) running in parallel 
- Four Spring Boot Applications
- Two Databases (SQL or NoSQL).  

The ultimate goal is the Journey to the Cloud which is accomplished by deploying the challenge on a cloud platform of the associate's choice:  AWS, Azure, IBM Cloud, Google Cloud, or Red Hat OpenShift.



# Before You Get Started
1. Install [JDK 1.8](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html) or later.  &nbsp;JDK 1.8 is recommended for the challenge.
2. Install [Node JS](https://nodejs.org/en/download/)
3. Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
4. Preferred IDEs.  However, feel free to use the IDE of your liking.
    * Install [Spring Tool Suite (STS)](https://spring.io/tools) for Java.
    * Install [Visual Studio Code](https://code.visualstudio.com/download)
5. Create a [Docker Hub Account](https://hub.docker.com/) 
6. Create an [IBM Cloud Account](https://cloud.ibm.com) 
7. Create an [IBM GitHub Account](https://github.ibm.com/) 
8. If you are not familiar with Git commands, feel free to find an online training tutorial or enroll in the [Udemy Course - Git for Geeks](https://ibm-learning.udemy.com/course/git-for-geeks/).
9. **Fork** the Git repository to make a copy in your repository.


# Projects in this Repository

|Projects                 |Description                                          |
|-------------------------|-----------------------------------------------------|
|angular-ui               |`Angular UI Project`                                 |
|api-gateway              |`Spring Boot Zuul API Gateway Service`               |
|discovery-service        |`Spring Boot Eureka Discovery Service`               |
|employee-db-docker-image |`Contains Dockerfile for building MySQL Employee DB` |
|employee-service         |`Spring Boot Employee Service`                       |
|login-db-docker-image    |`Contains Dockerfile for building MySQL Login DB`    |
|login-service            |`Spring Boot Login Service`                          |
|registration-service     |`Spring Boot Employee Registration `                 |
|react-ui                 |`React UI`                                           |


# Deliverables
The coding challenge should be completed in 4 to 6 weeks.  Code snippets are included in the projects to speed along your progress.  However, you must implement the missing code.

## Week 1 - Docker Containterization and Spring Cloud 
> #### Udemy Courses
> - [Docker for the Absolute Beginners – Hands On – DevOps](https://ibm-learning.udemy.com/course/learn-docker/) - 3.5 hours
> - [Microservices with Spring Cloud](https://ibm-learning.udemy.com/course/microservices-with-spring-cloud/) - 4.5 hours

> #### Tasks
> - Create MySQL Docker Images (Login and Employee Databases).
> - Complete Login Service and Containerize.
> - Complete Employee Service and Containerize.
> - Run images using Docker Compose.
> - Test with Postman and MySQL WorkBench.

## Week 2 & 3 - Spring Cloud Continued
> #### Udemy Courses
> - [Microservices with Spring Cloud](https://ibm-learning.udemy.com/course/microservices-with-spring-cloud/) (continued)

> #### Tasks
> - Implement Eureka Discovery and Zuul API Gateway Services.
> - Validate Eureka Discover Service identified:  Login, Employee, and API Gateway Services.
> - Implement Security:  oAuth, JWT, etc.
> - Run using Docker Compose.
> - Test Services via Zuul API Gateway.
> - `Start Kafka Training`

## Week 4 - Apache Kafka
> #### Udemy Courses
> - [Kafka & Kafka Stream With Java Spring Boot - Hands-on Coding](https://ibm-learning.udemy.com/course/apache-kafka-with-java-spring-boot-theory-hands-on-coding/) - 16 hours
    
> #### Tasks
> - Implement Kafka Server using Docker Compose.
> - Implement Zookeeper using Docker Compose.
> - Implement APHQ/KafkaHQ using Docker Compose `(optional)`.
> - Implement Kafka DB (NoSQL) using Docker Compose.
> - Implement Kafka Service using Docker Compose.
> - Run Kafka module using Docker Compose.
> - Test Kafka Services and AKHQ/KafkaHQ `(optional)`.
> - Run using Docker Compose.
> - Test with Postman.

## Week 5 - Journey to the Cloud I
> - [Kubernetes for the Absolute Beginner – Hands-on](https://ibm-learning.udemy.com/course/learn-kubernetes/) - 5.5 hours

> #### Tasks
> - Deploy backend on Minikube using Kubernetes.
> - Deploy the application on a Cloud platform using Kubernetes.
> - Cloud Platforms:  IBM Cloud, AWS, Azure, GCP, or Red Hat Open Shift
> - Test Services via Zuul API Gateway using Postman.


## Backend Demonstration
> - Services must be running on a Cloud platform implemented using Kubernetes.
> - Be prepared to discuss each service component.


## Weeks 6 &amp; 7 - Angular &amp; Reach
> #### Udemy Courses
> - [Full Stack:  Angular and Spring Boot](https://ibm-learning.udemy.com/course/full-stack-application-development-with-spring-boot-and-angular/) - 12.5 hours
> - [Go Java Full Stack with Spring Boot and React](https://ibm-learning.udemy.com/course/full-stack-application-with-spring-boot-and-react/) - 11.5 hours
    
> #### Tasks
> - Implement and Containerize Angular UI. 
> - Ensure screen requirements are implemented.
> - Test Angular UI against service components.
> - Repeat above steps for the React UI.
>  - #### `Run using Docker Compose.`

## Week 8 - Journey to the Cloud II
    
> #### Tasks
> - Deploy frontend and backend on Minikube.
> - Deploy the application on a Cloud platform using Kubernetes.
> - Cloud Platforms:  IBM Cloud, AWS, Azure, GCP, or Red Hat Open Shift
> - Test application via frontend.  Angular and React frontends should be running in parallel.


## Complete Application Demonstration
> - Deploy UI and  Backend Services on  Minikube.
> - UI and Service components must be running on a Cloud platform implemented using Kubernetes.
> - Be prepared to discuss each application component.
> - Both UIs must run in parallel
> - Test services via UIs.


# Sequence Diagrams

## Login
> #
> ![Login Sequence Diagram](./fscc_sd1.png)
> #

## Add and Edit Employees
> #
> ![Add and Edit Employee Sequence Diagram](./fscc_sd2.png)
> #
