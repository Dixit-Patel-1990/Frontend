pipeline {
    agent any

    environment {
        // Set your AWS credentials and region
        // AWS_ACCESS_KEY_ID = credentials('AWS_ACCESS_KEY_ID')
        // AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_ACCESS_KEY')
        AWS_REGION = 'us-west-1'  // Replace with your AWS region
        EB_ENV_NAME = 'Docker-web-app-env-1'  // Replace with your Elastic Beanstalk environment name
        APPLICATION_NAME = 'docker-web-app'  // Replace with your Elastic Beanstalk application name
    }

    stages {
        stage("Checkout") {
            steps {
                  git(
                  url: 'https://github.com/Dixit-Patel-1990/Frontend.git',
                  branch: "main"
                )
            }
        }
        stage("Create Build and Tag Image") {
            steps {
                 sh "docker build -t dixitpatel1008/frontend -f Dockerfile.dev ."
            }
        }
        stage("Run test cases") {
            steps {
                 sh "docker run -e CI=true dixitpatel1008/frontend npm run test"
            }
        }
        stage("Push Image to docker hub") {
            steps {
                 sh "docker push dixitpatel1008/frontend"
            }
        }

        stage('Deploy to Elastic Beanstalk') {
            steps {
                // Use withCredentials to access AWS credentials securely
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    accessKeyVariable: 'AWS_ACCESS_KEY_ID',
                    credentialsId: 'AWS_USER',
                    secretKeyVariable: 'AWS_SECRET_ACCESS_KEY',
                ]]) {
                    // AWS credentials are now available in this block

                    elasticBeanstalk(
                        credentialsId: AWS_USER,
                        region: AWS_REGION,
                        applicationName: APPLICATION_NAME,
                        environmentName: EB_ENV_NAME,
                        bucketType: 's3',
                        bucketName: 'elasticbeanstalk-us-west-1-328079970834'
                    )      
                }
            }
        }
    }
        
}

