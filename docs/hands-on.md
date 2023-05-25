#Running the code

##Prerequisites
- [NodeJS](https://nodejs.org/en/download/)
- [Angular CLI](https://angular.io/cli)
- [MySQL](https://dev.mysql.com/downloads/installer/)
- [Java 8](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)
- [Maven](https://maven.apache.org/download.cgi)
- [nx](https://nx.dev/angular/getting-started/installation)

## IDE

- [IntelliJ IDEA](https://www.jetbrains.com/idea/download/#section=windows)
- [WebStorm](https://www.jetbrains.com/webstorm/download/#section=windows)

## Understanding the workspace

The code is dived into two parts:
- Backend: Spring Boot
- Frontend: Angular

## Running the Code

### Backend

- Open the `backend` folder in `IntelliJ IDEA`
- Choose Java 8 as the SDK in the project structure
- Run `mvn clean install` in the terminal
- Add your MySQL credentials in `application.properties`
```
spring.datasource.url= jdbc:mysql://localhost:3306/[DB NAME]?useUnicode=yes&characterEncoding=UTF-8
spring.datasource.username=[USERNAME]
spring.datasource.password=[YOUR PASSWORD HERE]
spring.jpa.hibernate.ddl-auto=update
```
- Right click on the `SampleAppApplication` class and click on `Run`
- The backend will start on `http://localhost:8080`

> You may use [Postman](https://www.postman.com/downloads/) to test the endpoints.

### Frontend

- Open the `frontend` folder in `WebStorm`
- Run `npm install` in the terminal
- Run `nx serve sample-app` in the terminal
- Open `http://localhost:4200` in the browser

