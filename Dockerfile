FROM openjdk:8-jdk-alpine
MAINTAINER Sreten
COPY target/dians_lab_test-0.0.1-SNAPSHOT.jar dians-microservice-1.0.0.jar
EXPOSE 8081
EXPOSE 5432
ENTRYPOINT ["java", "-jar", "/dians-microservice-1.0.0.jar"]

