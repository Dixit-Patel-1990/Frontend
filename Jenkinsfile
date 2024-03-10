pipeline {
    agent any

     environment {
        PATH = "/opt/homebrew/bin:$PATH"
        AWS_EB_CREDENTIALS_ID = 'AWS_INFO'
        AWS_EB_REGION = 'us-west-1'
        AWS_EB_APPLICATION_NAME = 'simple-web'
        AWS_EB_ENVIRONMENT_NAME = 'Simple-web-env'
        AWS_EB_S3_BUCKET = 'elasticbeanstalk-us-west-1-328079970834'
        AWS_EB_S3_KEY = 'elastic-bean-stalk-container'
    }

    stages {
        stage('Install Python') {
            steps {
                script {
                    sh '/opt/homebrew/bin/brew install python'
                }
            }
        }

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
                 sh "docker build -t dixitpatel1008/docker-web-app:${BUILD_NUMBER} -f Dockerfile.dev ."
            }
        }
        stage("Run test cases") {
            steps {
                 sh "docker run -e CI=true dixitpatel1008/docker-web-app:${BUILD_NUMBER} npm run test"
            }
        }
        stage("Push Image to docker hub") {
            steps {
                 sh "docker push dixitpatel1008/docker-web-app:${BUILD_NUMBER}"
            }
        }

        stage('Deploy to Elastic Beanstalk') {
            steps {
                script {
                    withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', accessKeyVariable: 'AWS_ACCESS_KEY_ID', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY', credentialsId: env.AWS_EB_CREDENTIALS_ID]]) {

                        // Install AWS Elastic Beanstalk CLI
                        sh "brew install awscli"
                        sh "brew install awsebcli"

                        // sh "eb init -r us-west-1 -a simple-web -e Simple-web-env"
                        sh 'eb init -a simple-web -e Simple-web-env'
                        sh "eb create Simple-web-env --region us-west-1 --source s3://elasticbeanstalk-us-west-1-328079970834/elastic-bean-stalk-container"
                        
                        // def ebDeploy = [
                        //     $class: 'AWSEBDeployment',
                        //     accessKey: env.AWS_ACCESS_KEY_ID,
                        //     secretKey: env.AWS_SECRET_ACCESS_KEY,
                        //     region: 'us-west-1',
                        //     applicationName: 'simple-web',
                        //     environmentName: 'Simple-web-env',
                        //     sourceBundle: [
                        //         s3Bucket: 'elasticbeanstalk-us-west-1-328079970834',
                        //         s3Key: 'elastic-bean-stalk-container'
                        //     ]
                        // ]

                        // // Call the deploy() method on the ebDeploy object
                        // ebDeploy.deploy()
                    }
                }
            }
        }
    }       
}
     
