pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.39.0-focal' 
            args '--ipc=host'
        }
    }

    environment {
        ALLURE_RESULTS = "reports/allure-results"
        ALLURE_REPORT = "reports/allure-report"
    }

    stages {
        
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Playwright Tests with Cucumber') {
            steps {
                sh 'npx cucumber-js'
            }
        }

        stage('Generate Allure Report') {
            steps {
                sh 'npx allure generate --clean'
            }
        }

        stage('Publish Allure Report') {
            steps {
                allure([
                    results: [[path: 'reports/allure-results']],
                    reportBuildPolicy: 'ALWAYS'
                ])
            }
        }
    }

    post {
        success {
            echo "Tests Playwright + Cucumber réussis avec succès ! 🎉"
        }
        failure {
            echo "Des tests ont échoué ❌"
        }
    }
}
