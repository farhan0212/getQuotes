pipeline {
    agent {
        label 'nodejs'
    }
    stages {
        stage ("hello build") {
            steps {
                echo("start loop")
               script {
                  def data = [
                    [name: "Alice", age: 30],
                    [name: "Bob", age: 25],
                    [name: "Charlie", age: 35]
                  ]
                  writeJSON(file: 'data.json', json: data, pretty: 4)
                }
            }
        }
    }
}