# Use the Zulu JDK 17 as the base image
FROM azul/zulu-openjdk:17 AS builder

# Switch to root user to install packages
USER root

# Install dependencies
RUN apt-get update && apt-get install -y wget gnupg software-properties-common

# Install necessary tools and Maven
ARG MAVEN_VERSION=3.9.6
RUN wget https://apache.osuosl.org/maven/maven-3/${MAVEN_VERSION}/binaries/apache-maven-${MAVEN_VERSION}-bin.tar.gz && \
    tar xzvf apache-maven-${MAVEN_VERSION}-bin.tar.gz -C /opt && \
    ln -s /opt/apache-maven-${MAVEN_VERSION} /opt/maven && \
    ln -s /opt/maven/bin/mvn /usr/bin/mvn && \
    rm apache-maven-${MAVEN_VERSION}-bin.tar.gz



# Set up JAVA_HOME and MAVEN_HOME
ENV JAVA_HOME /usr/lib/jvm/zulu17
ENV MAVEN_HOME /opt/maven
ENV PATH $JAVA_HOME/bin:$MAVEN_HOME/bin:$PATH

# Copy the settings.xml to use a local repository
COPY settings.xml /root/.m2/settings.xml

# Pre-cache dependencies
COPY pom.xml /tmp/
RUN mvn -B -f /tmp/pom.xml dependency:resolve

# Add a volume for Maven repository to persist dependencies between builds
VOLUME /root/.m2/repository

# Use a minimal image for the final build stage
FROM azul/zulu-openjdk:17
COPY --from=builder /root/.m2 /root/.m2
COPY --from=builder /opt/maven /opt/maven

# Set up JAVA_HOME and MAVEN_HOME in the final stage
ENV JAVA_HOME /usr/lib/jvm/zulu17
ENV MAVEN_HOME /opt/maven
ENV PATH $JAVA_HOME/bin:$MAVEN_HOME/bin:$PATH

# Switch back to Jenkins user
USER jenkins

# Set up workspace directory
WORKDIR /workspace

