import MessageValidator from '../../helpers/validations/MessageValidator.js';

export const QUEUE_CONFIG = [
    { name: 'random_messages', validator: null },
    { name: 'queue2', validator: MessageValidator.validateMessageFormat },
    { name: 'queue3', validator: MessageValidator.validateMessageFormat },
];

export const DEAD_LETTER_EXCHANGE = 'dead_letter_exchange';