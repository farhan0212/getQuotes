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
    //         stage ("parameters") {
    //         agent {
    //             label 'nodejs'
    //         }
    //         steps {
    //             echo("Greeting: ${params.GREETING}")
    //             echo("Language: ${params.LANGUAGE}")
    //             echo("Feature Enabled: ${params.ENABLE_FEATURE}")
    //             echo("Comments: ${params.COMMENTS}")
    //             echo("Secret: ${params.SECRET}")
    //         }
    //     }
    // }
}
}