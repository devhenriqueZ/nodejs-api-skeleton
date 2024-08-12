import amqp from 'amqplib';

const rabbitMQUrl = process.env.RABBITMQ_URL;

async function createConnection() {
    try {
        const connection = await amqp.connect(rabbitMQUrl);
        console.log('Connected to RabbitMQ');
        return connection;
    } catch (error) {
        console.error('Error connecting to RabbitMQ:', error);
        throw error;
    }
}

export default createConnection;