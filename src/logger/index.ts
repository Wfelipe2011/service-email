import pino from 'pino';

export const LoggerPino = pino({
  level: 'debug',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,

    },
  }
});
