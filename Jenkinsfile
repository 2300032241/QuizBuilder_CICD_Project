pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    credentialsId: 'github-credentials',
                    url: 'https://github.com/2300032241/QuizBuilder_CICD_Project.git'
            }
        }

        stage('Build Backend') {
            steps {
                sh '''
                cd backend
                mvn clean install
                '''
            }
        }

        stage('Build Frontend') {
            steps {
                sh '''
                cd frontend/quiz-frontend
                npm install
                npm run build
                '''
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Docker Run') {
            steps {
                sh 'docker compose up -d'
            }
        }
    }
}
