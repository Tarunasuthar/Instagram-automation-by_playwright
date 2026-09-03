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
       stage('Run tests in parallel') {
            parallel {
                stage('Login test') {
                    steps {
                        sh 'npx playwright test tests/Login_insta.spec.js'
                    }
                }
                stage('Main test') {
                    steps {
                        sh 'npx playwright test tests/Main.spec.js'
                    }
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
