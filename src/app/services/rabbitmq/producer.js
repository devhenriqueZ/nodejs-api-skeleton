import createConnection from '../../../config/rabbitMQConnection.js';

const QUEUE_NAME = 'queue2';

async function sendMessage(message) {
    const connection = await createConnection();
    const channel = await connection.createChannel();

    await channel.assertQueue(QUEUE_NAME, { durable: false });
    channel.sendToQueue(QUEUE_NAME, Buffer.from(message));

    console.log(`Message sent: ${message}`);

    setTimeout(() => {
        connection.close();
    }, 500);
}

function generateRandomMessage() {
    const mensagens = [
        "Processing payment request.",
        "Order status update.",
        "Customer notification sent successfully.",
        "Initiating data pipeline.",
        "Integrity check completed."
    ];
    return mensagens[Math.floor(Math.random() * mensagens.length)];
}

export { sendMessage, generateRandomMessage };