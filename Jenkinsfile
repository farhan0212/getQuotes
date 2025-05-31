pipeline {
    agent {
        node {
            label 'nodejs && agent1'
        }
    }
    stages {
        stage ("hello build") {
            steps {
                echo("start build 1")
                sh("npm run build")
                echo("finish build")
            }
        }
        stage ("Test") {
            steps {
                echo("hello Test 1")
                sleep(5)
                echo("hello Test 2")
                echo("hello Test 3")

            }
        }
        stage ("Deploy") {
            steps {
                echo("hello Deploy 1")
                sleep(5)
                echo("hello Deploy 2")
                echo("hello Deploy 3")

            }
        }
    }
    post{
        always {
            echo("This will always run")
        }
        success {
            echo("This will run only if the pipeline is successful")
        }
        failure {
            echo("This will run only if the pipeline fails")
        }
        unstable {
            echo("This will run if the pipeline is marked as unstable")
        }
    }
}