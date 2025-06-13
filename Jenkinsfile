pipeline {
    agent {
        label 'docker-nodejs'
    }

    // environment {
    //     SSH_CREDENTIALS_ID = '26dc69fa-f0a0-4c62-8f3d-2d76a25701b4'
    //     SSH_HOST = '159.223.95.88'
    //     SSH_USERNAME = 'github'
    //     DOCKERHUB_CREDENTIALS = 'docker-hub-credentials'
    //     IMAGE_NAME = 'portovite/test'
    // }

    stages {
        stage('install and build'){
            // agent {
            //     docker {
            //         image 'node:22-alpine'
            //         reuseNode true
            //     }
            // }
                steps{
                    sh'''
                    npm install
                    npm run build
                    '''
                }
        }
        
        // stage('build docker image') {
        //     steps{
        //         sh "docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} ."
        //     }
        // }

        // stage('Login to DockerHub') {
        //     steps {
        //         withCredentials([usernamePassword(credentialsId: "${DOCKERHUB_CREDENTIALS}", usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
        //             sh "echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin"
        //         }
        //     }
        // }

        // stage('Remote ssh') {
        //     steps {
        //         sshagent(credentials: [SSH_CREDENTIALS_ID]) {
        //             sh """
        //                ssh -o StrictHostKeyChecking=no ${SSH_USERNAME}@${SSH_HOST} '
        //                 echo "Running commands on remote server"
        //                 ls -la
        //                 whoami
        //                 '
        //             """
        //         }
        //     }
        // }
    }
}