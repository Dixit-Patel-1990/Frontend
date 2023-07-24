pipeline {
    agent any
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
    }
}
