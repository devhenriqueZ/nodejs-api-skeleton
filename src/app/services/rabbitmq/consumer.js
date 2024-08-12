import amqp from 'amqplib';
import { QUEUE_CONFIG, DEAD_LETTER_EXCHANGE } from './queueConfig.js';
import { setupDeadLetterExchange, setupDeadLetterQueue, ensureQueueExists } from './deadLetterConfig.js';

async function setupQueues(channel) {
    await setupDeadLetterExchange(channel, DEAD_LETTER_EXCHANGE);

    for (const { name } of QUEUE_CONFIG) {
        await setupDeadLetterQueue(channel, name, DEAD_LETTER_EXCHANGE);
        await ensureQueueExists(channel, name, DEAD_LETTER_EXCHANGE);
        console.log(`Waiting for messages in the queue ${name}`);
    }
}

async function processMessage(channel, queueName, validator, msg) {
    if (msg === null) return;

    const messageContent = msg.content.toString();
    let isValid = true;

    if (validator) {
        try {
            isValid = await validator(messageContent);
        } catch (error) {
            console.log(`Validation error for message from ${queueName}: ${messageContent}`);
            isValid = false;
        }
    }

    if (isValid) {
        console.log(`Message received from ${queueName}: ${messageContent}`);
        channel.ack(msg);
    } else {
        console.log(`Message rejected from ${queueName}: ${messageContent}`);
        channel.reject(msg, false);
    }
}

async function setupConsumers(channel) {
    for (const { name, validator } of QUEUE_CONFIG) {
        channel.consume(name, (msg) => processMessage(channel, name, validator, msg), { noAck: false });
    }
}

function setupErrorHandling(connection, channel) {
    channel.on('error', (err) => {
        console.error('Channel error', err);
    });

    connection.on('error', (err) => {
        console.error('Connection error', err);
    });

    process.on('SIGINT', () => {
        connection.close().then(() => {
            console.log('RabbitMQ connection closed');
            process.exit(0);
        });
    });
}

export async function startConsumers() {
    try {
        const connection = await amqp.connect(process.env.RABBITMQ_URL);
        const channel = await connection.createChannel();

        await setupQueues(channel);
        await setupConsumers(channel);
        setupErrorHandling(connection, channel);

    } catch (error) {
        console.error('Failed to start consumers:', error);
    }
}