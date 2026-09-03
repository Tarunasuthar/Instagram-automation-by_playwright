pipeline {
    agent any
    tools {
        nodejs 'Node20'
    }
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Install Playwright browsers') {
            steps {
                sh 'npx playwright install'
            }
        }
        stage('Run tests') {
            steps {
                sh 'npx playwright test'
            }
        }
        stage('Run in parallel') {
    parallel {
        stage('Batch A') {
            steps { sh 'npx playwright test tests/batchA' }
        }
        stage('Batch B') {
            steps { sh 'npx playwright test tests/batchB' }
        }
    }
}
    }
    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
    }
}
