# Node.js API with Docker and MongoDB

This project is a basic API built using Node.js, Express, and MongoDB, configured to run in Docker containers. The API provides basic CRUD operations and is designed to be a starting point for building more complex applications.

## Features

- Connect to MongoDB
- Basic CRUD operations
- Health check route
- Dockerized for easy deployment

## Project Structure

```
.
├── api
│ ├── src
│ │ ├── lib
│ │ │ ├── config.js
│ │ │ ├── initializers
│ │ │ │ ├── index.js
│ │ │ │ ├── mongo.js
│ │ │ │ └── setupRoutes.js
│ │ │ └── server.js
│ │ ├── models
│ │ │ └── UserSchema.js
│ │ ├── routes
│ │ │ ├── default.js
│ │ │ ├── index.js
│ │ │ └── userRouter.js
│ │ ├── services
│ │ │ └── users
│ │ │ └── UserService.js
│ │ └── index.js
│ └── Dockerfile
├── data
├── .env.development
└── docker-compose.yaml
```

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- Docker
- Docker Compose

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/alicanbasak/node-docker-mongo.git
   cd node-docker-mongo
   ```

2. Create a `.env.development` file in the root directory with the following content:
   ```env
   PORT=3000
   MONGO_PROTOCOL=mongodb://
   MONGO_URL=your-db:27017
   MONGO_USERNAME=your-username
   MONGO_PASSWORD=your-password
   MONGO_DATABASE=your-db
   ```

### Running the Application with Docker

1. Start the containers:

   ```sh
   docker-compose up --build
   ```

2. The API server will be running on `http://localhost:3000`

### Running the Application without Docker

1. Install dependencies:

   ```sh
   cd api
   npm install
   ```

2. Start the server:

   ```sh
   npm start
   ```

3. The server will be running on `http://localhost:3000`

## API Endpoints

### User Routes

- **GET /api/users/:id**: Get user details by ID
- **POST /api/users**: Create a new user
- **PUT /api/users/:id**: Update user information by ID
- **DELETE /api/users/:id**: Delete a user by ID

### Default Routes

- **GET /ping**: Health check route
- **ALL /**: Catch all 404 route

## Docker Configuration

### docker-compose.yaml

```yaml
version: "3.8"
services:
  mongo:
    container_name: my-app-db
    image: mongo:latest
    restart: unless-stopped
    env_file: .env.development
    ports:
      - "27017:27017"
    volumes:
      - ./data:/data/db
    networks:
      - my-app-network

  api:
    container_name: api
    build: ./api
    restart: always
    ports:
      - "3000:3000"
    volumes:
      - ./api:/user/src/app
    networks:
      - my-app-network
    depends_on:
      - mongo

networks:
  my-app-network:
    driver: bridge
```

## Middleware

### Pre-save Middleware

Automatically sets `created` and `updated` timestamps before saving a document.

### Pre-update Middleware

Automatically sets the `updated` timestamp before updating a document.

## Contribution

Feel free to submit issues and enhancement requests.
