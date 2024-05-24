# First stage: build the application using Maven
FROM maven:3.9.6-eclipse-temurin-17 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the pom.xml file and download the dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the rest of the application source code and build the application
COPY src ./src
RUN mvn clean package -DskipTests

# Second stage: create the final image to run the application
FROM azul/zulu-openjdk-alpine:17

# Set the working directory inside the container
WORKDIR /app

# Copy the built JAR file from the first stage
COPY --from=build /app/target/Ecommerce-0.0.1-SNAPSHOT.jar app.jar

# Make port 8080 available to the world outside this container
EXPOSE 7000

# Run the JAR file
ENTRYPOINT ["java", "-jar", "app.jar"]
