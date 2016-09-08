
call mvn clean install
start tomcat-run
cd spring-template-webapp/src/main/client
call npm install
call gulp clean
start gulp serve
