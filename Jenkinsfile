pipeline {
    agent none

    environment {
        AUTHOR = "farhan"
        EMAIL = "farhan@gmail.com"
        WEB = "farhanrmdn.my.id"
    }

 


    options {
        disableConcurrentBuilds()
        timeout(time: 5, unit: 'MINUTES')
    }


    stages {
    
        stage ("prepared") {
            input{
            message 'Do you want to proceed?'
            ok 'Yes, proceed'
            submitter "farhan"
            parameters{
                choice(name: 'GREETING', choices: ['Hello', 'Hi', 'Greetings'], description: 'Select a greeting')
            }
            }
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
        stage("deploy"){
            input{
                message: 'Do you want to proceed with the deployment?'
                ok: 'Yes, proceed'
                parameters{
                    booleanParam(name: 'DEPLOY', defaultValue: true, description: 'Deploy the application?')
                }
            }
            when{
                expression {
                    return params.DEPLOY
                }
            }
            agent {
                label 'nodejs'
            }
            steps {
                script {
                    echo("Deploying application...")
                }
            }
        }
}
}