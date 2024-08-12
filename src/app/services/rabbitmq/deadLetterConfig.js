export async function setupDeadLetterExchange(channel, exchangeName) {
    await channel.assertExchange(exchangeName, 'direct', { durable: true });
}

export async function setupDeadLetterQueue(channel, queueName, exchangeName) {
    const deadLetterQueue = `${queueName}_dead_letter`;
    await channel.assertQueue(deadLetterQueue, { durable: true });
    await channel.bindQueue(deadLetterQueue, exchangeName, queueName);
}

export async function ensureQueueExists(channel, queueName, deadLetterExchange) {
    try {
        await channel.checkQueue(queueName);
    } catch (error) {
        await channel.assertQueue(queueName, {
            durable: true,
            arguments: {
                'x-dead-letter-exchange': deadLetterExchange,
                'x-dead-letter-routing-key': queueName
            }
        });
    }
}