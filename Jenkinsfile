def builderImage
def dockerhub = "bukanebi/backends:devs"

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
                    builderImage = docker.build("${dockerhub}")          
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
                script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'deploy',
                                verbose: false,
                                transfers: [
                                    sshTransfer(
                                        execCommand: "docker pull ${dockerhub}; docker kill backend; docker run -d --rm --name backend -p 9000:9000 ${dockerhub}",
                                        execTimeout: 120000,
                                    )
                                ]
                            )
                        ]
                    )

                }
            }
        }
        // stage("Deployments") {
        //     steps {
        //         sh "docker-compose up -d" 
        //     }
        // }
    }
}