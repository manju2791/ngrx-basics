pipeline {
  agent any
 
  stages {
    
    stage ('Install') {
      steps {
        echo 'bundle install...'
      }
    }
    
    stage ('Build') {
      steps {
        echo 'bundle exec rake build'
      }
    }
 
  }
  post {
    always {
      echo "Send notifications for result: ${currentBuild.result}"
    }
  }
}
