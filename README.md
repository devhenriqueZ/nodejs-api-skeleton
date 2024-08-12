# Node.js Express MongoDB RabbitMQ CRUD API Skeleton
![GitHub stars](https://img.shields.io/github/stars/devhenriqueZ/nodejs-api-skeleton)
![GitHub forks](https://img.shields.io/github/forks/devhenriqueZ/nodejs-api-skeleton)

This project serves as a foundational template for future Node.js projects, incorporating features I commonly use across nearly all of my Node.js microservices. It includes a CRUD API for managing books and authors, complete with Swagger documentation, Health Check routes, Docker integration, and RabbitMQ for message queuing.

## Features

- **Node.js** with **Express**
- **MongoDB** with **Mongoose**
- **RabbitMQ** for message queuing
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

    Replace the placeholder values in the `.env` file with your actual MongoDB Atlas connection string, RabbitMQ configuration, and other necessary configurations.

    ```env
    PORT=3000
    MONGO_DB_CONNECTION_STRING=your-mongodb-connection-string
    RABBITMQ_URL=amqp://guest:guest@rabbitmq:5672
    ```

3. **Build and run the Docker containers:**

    ```bash
    docker-compose up --build
    ```

    This command will build the Docker images and start the containers for the Node.js application, MongoDB, and RabbitMQ.

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

- **RabbitMQ:**

    The application uses RabbitMQ for message queuing. You can access the RabbitMQ management interface at `http://localhost:15672` (default credentials: guest/guest).

## RabbitMQ Integration

This skeleton includes RabbitMQ for handling asynchronous tasks and message queuing. Here's a brief overview of how it's integrated:

1. **Connection:** The application connects to RabbitMQ using the URL specified in the `.env` file.

2. **Queues:** Define your queues in the application code. For example:

    ```javascript
    channel.assertQueue('my-queue', { durable: true });
    ```

3. **Publishing Messages:** You can publish messages to a queue like this:

    ```javascript
    channel.sendToQueue('my-queue', Buffer.from('Hello, RabbitMQ!'));
    ```

4. **Consuming Messages:** Set up consumers to process messages from the queues:

    ```javascript
    channel.consume('my-queue', (msg) => {
      console.log('Received:', msg.content.toString());
      channel.ack(msg);
    });
    ```

For more detailed information on using RabbitMQ in your application, refer to the [RabbitMQ documentation](https://www.rabbitmq.com/documentation.html).