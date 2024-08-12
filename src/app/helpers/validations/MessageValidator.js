export default class MessageValidator {
    /**
     * Validates the format of the message received
     * @param {object} message - The message to validate
     * @returns {Promise<boolean>} - A promise that resolves to true if the message is valid
     */
    static async validateMessageFormat(messageContent) {
        try {
            const message = JSON.parse(messageContent); // Parse JSON content
            const body = message.body;

            if (!MessageValidator.hasRequiredKeys(body, ['data'])) {
                return false; // Reject directly
            }

            const data = body.data;

            if (!MessageValidator.hasRequiredKeys(data, ['id', 'status', 'order_id', 'account_id'])) {
                return false; // Reject directly
            }

            return true; // Valid
        } catch (error) {
            return false; // Parsing or other errors
        }
    }

    /**
     * Checks if an object has all the required keys
     * @param {object} obj - The object to check
     * @param {array<string>} requiredKeys - The required keys
     * @returns {boolean} - True if the object has all the required keys, false otherwise
     */
    static hasRequiredKeys(obj, requiredKeys) {
        return requiredKeys.every((key) => obj.hasOwnProperty(key));
    }
}