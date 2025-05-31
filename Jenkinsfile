pipeline {
    agent any
    stages {
        stage ("hello build") {
            steps {
                echo("start install")
                sh("npm install")
                echo("finish install")
                echo("start build")
                sh("npm run build")
                echo("finish build")
            }
        }
 
        }
    }
