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
                message 'Do you want to proceed with the deployment?'
                ok 'Yes, proceed'
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