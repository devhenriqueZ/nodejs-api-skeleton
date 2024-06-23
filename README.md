# Node.js Express MongoDB CRUD API Skeleton
![GitHub stars](https://img.shields.io/github/stars/devhenriqueZ/nodejs-api-skeleton)
![GitHub forks](https://img.shields.io/github/forks/devhenriqueZ/nodejs-api-skeleton)

This project is a skeleton for building future Node.js projects. It features a CRUD API for managing books and authors, complete with Swagger documentation and Docker integration.

## Features

- **Node.js** with **Express**
- **MongoDB** with **Mongoose**
- **Swagger** for API documentation
- **Docker** for containerization

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/get-npm) installed.
- [Docker Engine](https://docs.docker.com/engine/install/) or [Docker Desktop](https://www.docker.com/products/docker-desktop) installed.
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account and connection string.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/devhenriqueZ/nodejs-api-skeleton.git
    cd nodejs-api-skeleton
    ```

2. **Create a `.env` file:**

    Copy the contents of `.env.example` to a new file named `.env` in the root of the project:

    ```bash
    cp .env.example .env
    ```

    Replace the placeholder values in the `.env` file with your actual MongoDB Atlas connection string and other necessary configurations.

    ```env
    PORT=3000
    MONGO_DB_CONNECTION_STRING=your-mongodb-connection-string
    ```

3. **Build and run the Docker container:**

    ```bash
    docker-compose up --build
    ```

    This command will build the Docker image and start the container.

### MongoDB Atlas Setup

1. **Create an account** on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. **Create a new cluster** and get your **connection string**.
3. **Replace** the placeholder in the `.env` file with your actual MongoDB connection string:

    ```env
    MONGO_DB_CONNECTION_STRING=your-mongodb-connection-string
    ```

### Running the Application

1. **Start the application:**

    ```bash
    docker-compose up
    ```

    The API should now be running on `http://localhost:3000`.

2. **Access Swagger documentation:**

    Open your browser and navigate to `http://localhost:3000/docs` to view the Swagger documentation for the API.

## Usage

- **CRUD Operations:**

    Use the API endpoints to create, read, update, and delete books and authors. The Swagger UI provides a convenient interface to test these endpoints.

### Future Implementations Checklist

#### 1. Pagination for GET Routes
- [ ] Implement pagination for `GET` routes
  - [ ] Add pagination parameters (`page`, `limit`) to the route handlers
  - [ ] Modify database queries to handle pagination
  - [ ] Update API documentation to include pagination details

#### 2. Unit Testing
- [ ] Add unit tests for controllers
  - [ ] Test all controller methods
  - [ ] Ensure edge cases are covered
- [ ] Add unit tests for routes
  - [ ] Test all routes and their responses
  - [ ] Validate request parameters and response structure
- [ ] Add unit tests for services
  - [ ] Test all service methods
  - [ ] Mock dependencies and ensure correct service behavior
- [ ] Add unit tests for repositories
  - [ ] Test all repository methods
  - [ ] Ensure correct interaction with the database

#### 3. Messaging System with RabbitMQ
- [ ] Set up RabbitMQ as a messaging broker
  - [ ] Configure RabbitMQ server
  - [ ] Update environment variables with RabbitMQ connection details
- [ ] Implement producer functionality
  - [ ] Add methods to send messages to RabbitMQ
  - [ ] Integrate message sending in relevant parts of the API
- [ ] Implement consumer functionality
  - [ ] Add methods to consume messages from RabbitMQ
  - [ ] Implement handlers to process received messages
- [ ] Ensure the API can act as both producer and consumer
  - [ ] Designate endpoints or services where the API produces messages

#### 4. Caching System with Redis
- [ ] Set up Redis for caching
  - [ ] Configure Redis server
  - [ ] Update environment variables with Redis connection details
- [ ] Implement caching in the API
  - [ ] Add methods to cache request data
  - [ ] Integrate caching with RabbitMQ job processing

#### 5. Bull Monitor and Grafana
- [ ] Set up Bull Monitor for queue monitoring
  - [ ] Install and configure Bull Monitor
  - [ ] Integrate Bull Monitor with the application
- [ ] Set up Grafana for application monitoring
  - [ ] Install and configure Grafana
  - [ ] Create dashboards to monitor key metrics