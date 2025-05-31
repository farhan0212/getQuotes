pipeline {
    agent none
    stages {
        stage("prepared") {
            agent {
                label 'nodejs'
            }
            steps {
                echo("start job : ${env.JOB_NAME}")
                echo("start build : ${env.BUILD_ID}")
                echo("start build number : ${env.BUILD_NUMBER}")
            }
        }
        stage ("hello build") {
            agent {
                label 'nodejs'
            }
            steps {
                echo("start loop")
                script {
                    for (int i = 0; i < 5; i++) {
                        echo("Hello, World! ${i}")
                    }
                }
            }
        }
    }
}