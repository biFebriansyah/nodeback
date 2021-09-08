def builderImage
def CommitHash
def dockerhub = "bukanebi/backends"
def image_name = "${dockerhub}:${env.BRANCH_NAME}"

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
                    builderImage = docker.build("${dockerhub}:${env.BRANCH_NAME}")          
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
    }
}