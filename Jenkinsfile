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
    }
}