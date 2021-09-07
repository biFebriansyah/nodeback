pipeline {
    agent any

    stages {
        stage("Intall depdencies") {
            steps {
                nodejs("nodejs") {
                    sh 'npm install'
                }
            }
        }

        stage("Testing") {
            steps {
                nodejs("nodejs") {
                    sh 'npm test'
                }
            }
        }
    }
}