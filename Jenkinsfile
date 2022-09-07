pipeline {
    agent any
    environment {
        BRANCH = "${CHANGE_BRANCH ?: GIT_BRANCH}"
    }
    stages {
        stage('Deploy') {
            // when {
            //   expression { env.BRANCH == "master" }
            // }
            steps {
                echo "$env.BRANCH"
                sh '''
                  npm i
                  npm run build
                  sudo cp -r build/* /var/www/html/
                '''
            }
        }
    }
}