pipeline {
    agent none

    environment {
        AUTHOR = "farhan"
        EMAIL = "farhan@gmail.com"
        WEB = "farhanrmdn.my.id"
    }

    parameters{
        string(name: 'GREETING', defaultValue: 'Hello', description: 'Greeting message')
        choice(name: 'LANGUAGE', choices: ['English', 'Indonesian', 'Japanese'], description: 'Select a language')
        booleanParam(name: 'ENABLE_FEATURE', defaultValue: true, description: 'Enable feature flag')
        text(name: 'COMMENTS', defaultValue: 'No comments', description: 'Add your comments here')
        password(name: 'SECRET', defaultValue: '', description: 'Enter your secret password')
    }

    options {
        disableConcurrentBuilds()
        timeout(time: 5, unit: 'MINUTES')
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
                script {
                    def name = "${env.AUTHOR}"
                    echo("Hello ${name}")
                }
            }
        }
            stage ("parameters") {
            agent {
                label 'nodejs'
            }
            steps {
                echo("Greeting: ${params.GREETING}")
                echo("Language: ${params.LANGUAGE}")
                echo("Feature Enabled: ${params.ENABLE_FEATURE}")
                echo("Comments: ${params.COMMENTS}")
                echo("Secret: ${params.SECRET}")
            }
        }
    }
}