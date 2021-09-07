pipeline {
    agent any

    stages {
        stage("installing dependencies") {
            steps {
                nodejs("nodejs") {
                    sh 'npm install'
                }
            }
        }

        stage("Unit Testing") {
            steps {
                nodejs("nodejs") {
                    sh 'npm test'
                }
            }
        }
    }
}