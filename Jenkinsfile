pipeline {
    agent {
        node {
            label 'nodejs && agent1'
        }
    }
    stages {
        stage ("hello") {
            steps {
                echo("hello pipeline")
                echo("done y all")
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