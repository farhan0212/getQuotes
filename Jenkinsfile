pipeline {
    agent none
    stages {
        stage ("hello build") {
            agent{
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