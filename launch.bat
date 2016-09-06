call mvn clean install
REM change port below as you require!

java -jar spring-template-webapp/target/dependency/webapp-runner.jar --port 9713 spring-template-webapp/target/*.war
start http://localhost:9713/