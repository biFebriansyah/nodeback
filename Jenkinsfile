pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'mkdir build'
                sh 'touch ./build/test.txt'
                sh 'echo "password" >> ./build/test.txt'
            }
        }
        
        stage('Testing') {
            steps {
                sh 'grep "password" ./build/test.txt'
            }
        }

        stage('Build') {
            steps {
                sh 'echo "hellow"'
            }
        }
    }
}