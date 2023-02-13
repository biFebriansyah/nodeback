def builderImage
def imageName = "bukanebi/backend:devs"

pipeline {
    agent any

    parameters {
        string(name: "nama", defaultValue: "bukanebi/backend", description: "for image name")
        boolenaParam(name: "run testing", defaultValue: "true", description: "for testing")
    }

    stages {
        stage('Installing package') {
            steps {
                nodejs("node14") {
                    sh 'npm install'
                }
            }
        }

        stage('Runn Test') {

            when {
                params.RUNTEST
            }
            
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

        stage('Push Image') {
            steps {
                script {
                    builderImage.push()
                }
            }
        }

        stage('Deployment') {
            steps {
                script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'develop',
                                verbose: false,
                                transfers: [
                                    sshTransfer(
                                        execCommand: "docker pull ${imageName}; docker kill backend; docker run -d --rm --name backend -p 9000:9000 ${imageName}",
                                        execTimeout: 120000,
                                    )
                                ]
                            )
                        ]
                    )

                }
            }
        }
    }
}
