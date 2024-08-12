const HealthCheckStatus = {
    HEALTH_OK: 'Health - OK',
    DATABASE_CONNECTED: 'Connected',
    DATABASE_DISCONNECTED: 'Disconnected',
    INTERNAL_SERVER_ERROR: 'Internal Server Error'
};

const HealthCheckMessage = {
    DATABASE_CONNECTED_MESSAGE: 'MongoDB connection is established.',
    DATABASE_DISCONNECTED_MESSAGE: 'MongoDB connection is not established.'
};

export { HealthCheckStatus, HealthCheckMessage };