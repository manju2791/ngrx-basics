pipeline {
  agent any
  tools { nodejs "node"}
  stages {
    
    stage ('Git') {
      steps {
        echo 'clone repo..'
        git 'https://github.com/manju4m91/ngrx-basics.git'
      }
    }
    
    stage ('Install dependencies') {
      steps {
        echo 'install dependencies..'
        sh 'npm install'
      }
    }
 
     stage ('Build project') {
      steps {
        echo 'build project'
        sh 'npm run build:all'
      }
    }
    
    stage ('Run test') {
      steps {
        echo 'run test..'
        sh 'npm run test'
      }
    }
    
  }
  post {
    always {
      echo "Send notifications for result: ${currentBuild.result}"
    }
  }
}
