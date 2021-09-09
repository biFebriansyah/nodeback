def builderImage
def imageName = "bukanebi/backend:devs"

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
                nodejs("node14") {
                    sh 'npm test'
                }
            }
        }

        stage('Build Image') {
            steps {
                script {
                    builderImage = docker.build("${imageName}")
                }
            }
        }

        stage('Test Image') {
            steps {
                script {
                    builderImage.inside {
                        sh "echo pass"
                    }
                }
            }
        }
    }
}
