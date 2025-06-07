pipeline {
    agent none

    environment {
        AUTHOR = "farhan"
        EMAIL = "farhan@gmail.com"
        WEB = "farhanrmdn.my.id"
    }

    options {
        disableConcurrentBuilds()
        timeout(time: 10, unit: 'SECONDS')
    }


    stages {
        stage ("prepared") {
            agent {
                label 'nodejs'
            }
            steps {
                echo("author : ${env.AUTHOR}")
                echo("email : ${env.EMAIL}")
                echo("web : ${env.WEB}")
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