import axios from 'axios';

class HttpClient {
    /**
     * @param {string} baseURL - Base URL for requests
     */
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    /**
     * @param {string} method - HTTP method (get, post, put, delete, etc.)
     * @param {string} endpoint - Endpoint for the request
     * @param {object} [data] - Data to send with the request
     * @param {object} [headers] - Additional headers for the request
     */
    async makeRequest(method, endpoint, data = null, headers = {}) {
        const config = {
            method,
            url: `${this.baseURL}${endpoint}`,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            data,
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (err) {
            throw err;
        }
    }

    /**
     * @param {string} endpoint - Endpoint for the GET request
     */
    async get(endpoint) {
        return this.makeRequest('get', endpoint);
    }

    /**
     * @param {string} endpoint - Endpoint for the POST request
     * @param {object} data - Data to send with the request
     */
    async post(endpoint, data) {
        return this.makeRequest('post', endpoint, data);
    }

    /**
     * @param {string} endpoint - Endpoint for the PUT request
     * @param {object} data - Data to send with the request
     */
    async put(endpoint, data) {
        return this.makeRequest('put', endpoint, data);
    }

    /**
     * @param {string} endpoint - Endpoint for the DELETE request
     */
    async delete(endpoint) {
        return this.makeRequest('delete', endpoint);
    }
}

export default HttpClient;