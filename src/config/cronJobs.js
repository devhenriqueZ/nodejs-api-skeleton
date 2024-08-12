import cron from 'node-cron';
import { generateRandomMessage, sendMessage } from '../../src/app/services/rabbitmq/producer.js';

const Intervals = {
    FIVE_SECONDS: '*/5 * * * * *',
    TEN_SECONDS: '*/10 * * * * *',
    ONE_MINUTE: '*/1 * * * *',
    ONE_HOUR: '0 * * * *',
};

const tasks = {
    tenSeconds: () => {
        console.log('Running task every 10 seconds.');
    },
    sendRandomMessage: () => {
        const mensagem = generateRandomMessage();
        sendMessage(mensagem);
        res.send(`Message sent:${mensagem}`);
    }
};

function initializeSchedules() {
    cron.schedule(Intervals.ONE_MINUTE, tasks.tenSeconds);
    cron.schedule(Intervals.FIVE_SECONDS, tasks.sendRandomMessage);
}

export default initializeSchedules;