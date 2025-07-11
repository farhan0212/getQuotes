pipeline {
    agent any

    parameters{
        choice (name: 'ENVIRONMENT', choices: ['development', 'staging', 'production'], description: 'Select the environment to deploy')
    }

    environment {
        SSH_CREDENTIALS_ID = 'ssh-server'
        SSH_HOST = '159.223.95.88'
        SSH_USERNAME = 'github'
        DOCKERHUB_CREDENTIALS = 'Docker'
        IMAGE_NAME = 'farhan0212/get-quotes'
    }

    stages {
        stage('install and build'){
            agent {
                docker {
                    image 'node:22-alpine'
                    reuseNode true
                }
            }
                steps{
                    sh'''
                    npm ci
                    npm run build
                    '''
                }
        }
        
        stage('build docker image') {
            steps{
                sh "docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} ."
            }
        }

        stage('Login to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: "${DOCKERHUB_CREDENTIALS}", usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh "echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin"
                    sh "docker push ${IMAGE_NAME}:${BUILD_NUMBER}"
                }
            }
        }

        stage('Remote ssh') {
            steps {
                sshagent(credentials: [SSH_CREDENTIALS_ID]) {
                    sh """
                       ssh -o StrictHostKeyChecking=no ${SSH_USERNAME}@${SSH_HOST} '
                        echo "Running commands on remote server"
                        ls -la
                        whoami
                        '
                    """
                }
            }
        }
    }
    post {
    always {
        cleanWs()
    }
    success {
        echo 'Pipeline berhasil!'
    }
    failure {
        echo 'Pipeline gagal!'

    }
}
}