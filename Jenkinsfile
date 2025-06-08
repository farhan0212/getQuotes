pipeline {
    agent any

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

        stage ("preparation") {
       
        stages{
            stage ("prepare install"){
                steps {
                    echo("Preparing to install dependencies...")
                }
            }
        }
        }
    
        stage ("hello build") {
          
            steps {
                script {
                    def name = "${env.AUTHOR}"
                    echo("Hello ${name}")
                }
            }
        }
        stage ("deploy") {
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
     
            steps {
                script {
                    echo("Deploying application...")
                }
            }
        }
}
}