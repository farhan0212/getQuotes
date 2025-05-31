pipeline {
    agent {
        label 'nodejs'
    }
    stages {
        stage ("hello build") {
            steps {
                echo("start loop")
               script {
                    for (int i = 0; i < 10; i++) {
                        echo("hello world ${i}")
                }
            }
        }
    }
    }
}