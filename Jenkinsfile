pipeline {
  agent any
  tools { nodejs "Node-14.7.0"}
  stages {
    
    stage ('Git') {
      steps {
        echo 'clone repo..'
        git 'https://github.com/manju4m91/ngrx-basics.git'
      }
    }
    
    stage ('Install dependencies') {
      when {
        changeset "package.json"
      }
      steps {
        echo 'install dependencies..'
        sh 'npm install'
      }
    }
 
     stage ('Build project') {
        when {
          anyOf {
            changeset "apps/**"
            changeset "libs/**"
            changeset "package.json"
          }
        }
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
