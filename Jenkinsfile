pipeline {
    agent any

    stages {
        stage('Installing package') {
            steps {
                nodejs("node14") {
                    sh 'npm install'
                }
            }
        }

        stage('Runn Test') {
            steps {
                sh "running test"
            }
        }
    }
}
