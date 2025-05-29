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
}