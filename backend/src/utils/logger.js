class Logger {
    logInfo(message) {
        console.log(Logger.generateLogString(message));
    }

    logWarn(message) {
        console.log(Logger.generateLogString(message));
    }

    logError(message) {
    console.error(
        Logger.generateLogString(message || 'An unknown error occurred')
);
}

static generateLogString(message) {
    return `[Server] ${message}`;
}
}

const logger = new Logger();

export { logger };