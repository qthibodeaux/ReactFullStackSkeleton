# ReactFullStackSkeleton

After starting and stopping a few React Full Stack apps, I decided to create a skeleton template to help the process start by faster by including the essentials.

## Table of Contents
*[General Info](#general-info)
*[Technologies](#technologies)
*[Setup](#setup)

##General Info
This is a full stack application that consist of a basic frontend and backend. The frontend is powered by React. I find React really intuitive to use and plays well to the strengths of DOM manipulation and managing component state. The backend is powered by Express. I find really powerful and customizable. Combined with additional middlewares voltron for a powerful and helpful backend.

##Technologies
#Frontend
**React**
https://create-react-app.dev/
**Axiosjs**
https://github.com/axios/axios

#Backend
**Expressjs**
http://expressjs.com/
**Knexjs**
https://knexjs.org/
**Postgresql**
https://www.postgresql.org/
**body-parser**
https://www.npmjs.com/package/body-parser

##Setup
For an indepth guides to each technology, please visit sites listed above.
After a cloning of the repository, enter terminal, cd into each frontend and backend and npm install.
**Terminal Backend start up**
- npm install
- npx knex migrate:up
- npx knex seed:run
- node index.js

*The above action installs the necessary dependencies and generates tables for the a generic backend and seed data.*

**Terminal Frontend start up**
-- npm install

*The above action installs the necessary dependencies.*
*It is important to start the backend first.*
