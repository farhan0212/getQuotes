pipeline {
  agent any

  stages {
    stage('Clone Manual') {
      steps {
        git credentialsId: 'github-farhan0212',
            url: 'https://github.com/farhan0212/vite_test_s3.git',
            branch: 'main'
      }
    }

    stage('Build') {
      steps {
        sh 'ls -la'
      }
    }
  }
}
