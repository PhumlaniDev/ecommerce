pipeline {
    agent {
        any {
            args '-v $HOME/.m2:/root/.m2' // Bind mount for Maven cache
        }
    }

    tools {
        maven "Maven 3.9.6"
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
                        sh 'mvn clean package -Dmaven.repo.local=/root/.m2/repository'
                    }
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    withMaven(maven: 'Maven 3.9.6') {
                        sh 'mvn test -Dmaven.repo.local=/root/.m2/repository'
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
