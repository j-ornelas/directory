### TypeScript Server/React Web App


This is an employee directory app. It consists of a Node.js backend and a React/Redux front end, both using TypeScript.


## Running the project

#### Requirements
 - Make sure ports 3000 & 3033 are available
 - Node & Docker

In root project directory...

`$ npm run init`

`$ npm start`

The web application will be live at http://localhost:3000

#### Notes

If you delete all the employees and want to re-seed the database, go to: http://localhost:3033/employees/seed

This application is build with React / Typescript on the front end, and features a Docker-ized Node.js/MongoDB backend. The homepage of the app features a paginated list of employees, clicking on an employee give you the ability see more information and to delete the employee.
