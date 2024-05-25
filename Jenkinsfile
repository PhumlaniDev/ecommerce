pipeline {
    agent {
        any {
            args '-v $HOME/.m2:/root/.m2' // Bind mount for Maven cache
        }
    }

    tools {
        // Assuming you have configured Maven and JDK in Jenkins
        maven 'Maven 3.9.6'
        jdk 'Zulu JDK 17'
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

    post {
        always {
            cleanWs()
        }
    }
}
