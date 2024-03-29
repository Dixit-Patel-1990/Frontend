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

        // VERSION="${BUILD_NUMBER}"
        // ZIP="docker-web-app.${BUILD_NUMBER}.zip"

        VERSION="v1"
        ZIP="docker-web-app.v1.zip"
    }

    stages {
        // stage('Install Python') {
        //     steps {
        //         script {
        //             sh '/opt/homebrew/bin/brew install python'
        //         }
        //     }
        // }

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
                 sh "docker build -t dixitpatel1008/docker-web-app:latest -f Dockerfile.dev ."
                //   sh "docker build -t dixitpatel1008/docker-web-app:${BUILD_NUMBER} -f Dockerfile.dev ."
            }
        }
        stage("Run test cases") {
            steps {
                 sh "docker run -e CI=true dixitpatel1008/docker-web-app:latest npm run test"
            }
        }
        stage("Push Image to docker hub") {
            steps {
                 sh "docker push dixitpatel1008/docker-web-app:latest"
            }
        }

        stage('Deploy to Elastic Beanstalk') {
            steps {
                script {
                    withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', accessKeyVariable: 'AWS_ACCESS_KEY_ID', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY', credentialsId: env.AWS_EB_CREDENTIALS_ID]]) {

                        // Install AWS Elastic Beanstalk CLI
                        // sh "brew install awscli"
                        // sh "brew install awsebcli"
                        sh '/opt/homebrew/bin/aws configure set aws_secret_access_key ${AWS_ACCESS_KEY_ID}'
                        sh '/opt/homebrew/bin/aws configure set aws_secret_access_key ${AWS_SECRET_ACCESS_KEY}'
                        sh '/opt/homebrew/bin/aws configure set region us-west-1'
                        sh 'zip -r $ZIP Dockerrun.aws.json'
                        // sh 'zip -r $ZIP docker-compose.yml'
                        sh '/opt/homebrew/bin/aws s3 cp $ZIP s3://$AWS_EB_S3_BUCKET/$ZIP'
                        sh '/opt/homebrew/bin/aws elasticbeanstalk create-application-version --application-name $AWS_EB_APPLICATION_NAME --version-label $BUILD_NUMBER --source-bundle S3Bucket=$AWS_EB_S3_BUCKET,S3Key=$ZIP'
                        sh '/opt/homebrew/bin/aws elasticbeanstalk update-environment --environment-name $AWS_EB_ENVIRONMENT_NAME --version-label $BUILD_NUMBER'
                        

                        //zip -r docker-web-app.63.zip Dockerfile
                        //aws s3 cp docker-web-app.63.zip s3://elasticbeanstalk-us-west-1-328079970834/docker-web-app.63.zip
                        //aws elasticbeanstalk create-application-version --application-name simple-web --version-label 63 --source-bundle S3Bucket=elasticbeanstalk-us-west-1-328079970834,S3Key=docker-web-app.63.zip
                        //aws elasticbeanstalk update-environment --environment-name Simple-web-env --version-label 63
                    }
                }
            }
        }
    }       
}
     
