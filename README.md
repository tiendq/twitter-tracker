# Multi-process Node.js application example

The application consists of 3 processes:

  - [`twitter-stream-worker`](#twitter-stream-worker)
  - [`social-preprocessor-worker`](#social-preprocessor-worker)
  - [`web`](#web)

## Processes

Use the `PROCESS_TYPE` environment variable to select the process to be run.

```shell
$ yarn start:web
$ yarn start:twitter-worker
$ yarn start:preprocessor-worker
```

### Twitter stream worker

The process is listening on Twitter for keywords and sends the tweets to a ZeroMQ queue. Create your Twitter app [here](https://developer.twitter.com/en/apps) to get necessary keys & secrets.

#### Environment variables

  - `NODE_ENV` (`'development' | 'production'`): when `development`, it uses dotenv, to read the local `.env` file, that's the only difference
  - `LOGGER_LEVEL` (`'error' | 'warn' | 'info' | 'verbose' | 'debug' | 'silly'`), default: `info`
  - `LOGGER_ENABLED` (`'true' | 'false'`), default: `true`
  - `TWITTER_CONSUMER_KEY`
  - `TWITTER_CONSUMER_SECRET`
  - `TWITTER_ACCESS_TOKEN_KEY`
  - `TWITTER_ACCESS_TOKEN_SECRET`
  - `TWITTER_TRACK`: comma separated keywords to track, eg. `javascript,nodejs,rest,microservices`
  - `ZEROMQ_URI`

### Social preprocessor worker

The process is listening on the ZeroMQ queue and saves the tweets to Redis and removes old ones.

#### Environment variables

  - `NODE_ENV` (`'development' | 'production'`): when `development`, it uses dotenv, to read the local `.env` file, that's the only difference
  - `LOGGER_LEVEL` (`'error' | 'warn' | 'info' | 'verbose' | 'debug' | 'silly'`), default: `info`
  - `LOGGER_ENABLED` (`'true' | 'false'`), default: `true`
  - `ZEROMQ_URI`
  - `REDIS_URI`
  - `REDIS_DATA_RETENTION_IN_MS`, default: `86400000` (1 day)

### Web

The process is serving an HTTP API to return the tweets.

  - `GET /api/v1/tweets?limit&offset`

#### Environment variables

  - `NODE_ENV` (`'development' | 'production'`): when `development`, it uses dotenv, to read the local `.env` file, that's the only difference
  - `LOGGER_LEVEL` (`'error' | 'warn' | 'info' | 'verbose' | 'debug' | 'silly'`), default: `info`
  - `LOGGER_ENABLED` (`'true' | 'false'`), default: `true`
  - `REDIS_URI`
  - `PORT`
