# spring-rest-angular-template
Spring multi-tier web application with AngularJS frontend template that is runnable in any IDE via embedded jetty, runnable in any OS using embedded tomcat
runner and deployable to any server as a single .war file!
## Prerequisites
This package is Windows compatible. Integration on Unix systems is possible, but not guaranteed.
In order to run application you need couple of things.
### Maven
Get the latest version from https://maven.apache.org/download.cgi
Installation guide is at https://maven.apache.org/install.html
After that you should be able to run
    mvn -version
In command console.
### NPM
Get the latest version and install from https://nodejs.org/
After successful installation you should be able to run
    npm --version
### Bower & Gulp
Download and install via npm:
    npm install -g bower
    npm install -g gulp
Check if their paths are set successfully with
    bower -version
    gulp -version
### Git
In order to download bower components, git command should be accessible.
Download and install git bash for windows from https://git-for-windows.github.io/
After installation check if git command is accessible
    git --version
## Running
### Via embedded tomcat runner
Package is prepared to be automatically launched from command line. It simply compiles the application, and deploys it to tomcat webapp runner.
When all above commands are accessible, you should be able to simply run the web server with
    launch
Executed on main directory of a package. After a successful deployment (might last several minutes)
    INFO: Starting ProtocolHandler ["http-nio-9713"]
Should appear. After that you should be able to run webapp at http://localhost:9713/
If the port 9713 seems to be in use, please change it in file tomcat-run.bat to any accessible.
### Via IDE
Run
    mvn clean install
And import the project in your Java IDE of choice. Import the project and all its dependencies.
You can simply deploy the app to embedded jetty, by runing class pl.templates.spring.runner.EmbeddedJetty main method.

