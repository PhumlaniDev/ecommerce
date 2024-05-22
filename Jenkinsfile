pipeline {
    agent {
        any {
            args '-v $HOME/.m2:/root/.m2' // Bind mount for Maven cache
        }
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/PhumlaniDev/ecommerce.git'
                git branch: 'develop', credentialsId: ${GITHUB_CREDENTIALS}, url: 'https://github.com/PhumlaniDev/ecommerce.git'
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
