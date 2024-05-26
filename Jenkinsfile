pipeline {
    agent {
        any {
            label 'docker-agent'
        }
    }

    tools {
        // Assuming you have configured Maven and JDK in Jenkins
        maven 'Maven 3.9.6'
        jdk 'Zulu JDK 17'
        tool 'SonarQubeScanner'
    }

    environment {
        // Set the Maven local repository to a directory within Jenkins home
        MAVEN_OPTS = '-Dmaven.repo.local=/var/jenkins_home/.m2/repository'
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Use 'withCredentials' to access GitHub credentials
                    withCredentials([usernamePassword(credentialsId: 'GITHUB_CREDENTIALS', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                        // Checkout the code from GitHub
                        git branch: 'develop', url: 'https://github.com/PhumlaniDev/ecommerce.git', credentialsId: 'GITHUB_CREDENTIALS'
                    }
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    withMaven(maven: 'Maven 3.9.6') {
                        sh 'mvn clean package'
                    }
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    withMaven(maven: 'Maven 3.9.6') {
                        sh 'mvn test'
                    }
                }
            }
        }
    }

    stage('Code Analysis') {
        steps {
            script {
                sh 'mvn sonar:sonar'
            }
        }
    }

    stage("Quality Gate") {
        steps {
            timeout(time: 1, unit: 'HOURS') {
                // Parameter indicates whether to set pipeline to UNSTABLE if Quality Gate fails
                // true = set pipeline to UNSTABLE, false = don't
                waitForQualityGate abortPipeline: false, credentialsId: 'SONARQUBE_TOKEN'
            }
        }
    }

    stage('Build Docker Image') {
        steps {
            script {
                sh 'docker build -d phumlanidev/ecommerce:$BUILD_ID'
            }
        }
    }

    stage('Push to Docker Hub') {
        steps {
            script {
                withCredentials([usernamePassword(credentialsId: 'DOCKER_HUB', passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')]) {
                    sh 'docker login -u ${USERNAME} -p ${PASSWORD}'
                }
                sh 'docker push phumlanidev/ecommerce:$BUILD_ID'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
