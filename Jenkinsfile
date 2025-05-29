pipeline {
    agent {
        node {
            label 'nodejs && agent1'
        }
    }
    stages {
        stage("hello") {
            steps {
                echo("hello pipeline")
            }
            steps {
                echo("done y all")
            }
        }
    }
}