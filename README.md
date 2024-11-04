# AUTH APP

## Overview

A Node.js application for user authentication and authorization using JWT.

## Tech Stack

- Node.js
- Express.js
- JWT for token.
- MongoDB with Mongoose
- Postman for API documentation

## Features

- User Registration: Allows new users to register with hashed passwords.
- User Login: Authenticates users and issues a JWT token.
- Protected Routes: Secures routes by verifying JWT tokens.

## Rules to create new users

- User should have unique username and email.
- User email should be in a valid email format.
- User password should be minimum 8 characters.

## API Endpoints

- `POST /api/v1/users/register` - Register a user
- `POST /api/v1/users/login` - Login to your account and get a token
- `GET /api/v1/users/profile` - Get user information by passing the token

For more information refer Postman documentation (inside data folder and select DEV environment)
