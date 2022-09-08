pipeline {
    agent any
    environment {
        BRANCH = "${CHANGE_BRANCH ?: GIT_BRANCH}"
    }
    stages {
        stage('Deploy') {
            when {
              expression { env.BRANCH == "origin/master" }
            }
            steps {
                sh '''
                  sudo npm i
                  sudo npm run build
                  echo "DONE"
                  sudo cp -r build/* /var/www/html/
                  echo "DONE2"
                '''
            }
        }
    }
}