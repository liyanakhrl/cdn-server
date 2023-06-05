# CDN Server README

This repository contains a web application built using Angular, NestJS, and MongoDB. The application provides various APIs for user management, authentication, freelancers, roles, and skills. The API documentation is available through Swagger UI.

## API Documentation

The following APIs are available in this application:

```plaintext
POST /api/user/register
Register a new user

GET /api/user/{email}
Get a user by email

POST /api/user/{userId}/roles/{roleId}
Assign a role to a user

POST /api/auth/login
Login and obtain a JWT web token

POST /api/freelancer
Create a new freelancer

GET /api/freelancer
Get all freelancers

GET /api/freelancer/{id}
Get a freelancer by ID

PUT /api/freelancer/{id}
Update a freelancer by ID

DELETE /api/freelancer/{id}
Delete a freelancer by ID

POST /api/freelancer/{freelanceId}/skills/{skillsetId}
Update a freelancer's skillset

 POST /api/roles
Create a new role

GET /api/roles
Get all roles

GET /api/roles/{id}
Get a role by ID

PUT /api/roles/{id}
Update a role by ID

DELETE /api/roles/{id}
Delete a role by ID

POST /api/skills
Create a new skill

GET /api/skills
Get all skills

GET /api/skills/{id}
Get a skill by ID

PUT /api/skills/{id}
Update a skill by ID

DELETE /api/skills/{id}
Delete a skill by ID
```

## Authentication
This application utilizes JWT (JSON Web Token) for authentication. When logging in, a JWT web token is obtained, which can be used to authenticate and authorize subsequent requests to the API.

Please note that you will need to have a valid JWT token in the request headers for authenticated routes.

## Installation
To set up and run the web application locally, please follow these steps:

Clone this repository to your local machine.
Install the necessary dependencies by running the following command:

## Running the app

```bash
# Install all dependencies
$ npm install


# Run server
$ npm run start
```
Access the application through your browser at http://localhost:3000.


 
