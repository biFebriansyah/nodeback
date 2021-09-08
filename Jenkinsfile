def builderImage
def CommitHash
def dockerhub = "bukanebi/backends"

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

        stage("Build Image") {
            steps {
                script{
                    builderImage = docker.build("${dockerhub}:devs")          
                }
            }
        }

        stage("Test Images") {
            steps {
                script {
                    builderImage.inside {
                        sh 'echo passed'
                    }
                }
            }
        }

        stage("Push Image") {
            steps {
                script {
                    builderImage.push()
                }
            }
        }

        stage("Deployments") {
            steps {
                sh "docker-compose up -d"
            }
        }
    }
}