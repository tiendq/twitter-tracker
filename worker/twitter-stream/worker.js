const logger = require('winston');
const debug = require('debug')('twitter');
const zmq = require('zeromq');
const config = require('../../config');
const twitter = require('../../models/twitter');

let socket = zmq.socket('push');
socket.bindSync(config.zeromq.uri);

let stream = twitter.stream('statuses/filter', { track: config.twitter.track });

stream.on('data', (tweet) => {
  let message = {
    id: tweet.id,
    screenName: tweet.user.screen_name,
    text: tweet.text,
    createdAt: tweet.created_at
  }

  debug(message);
  socket.send(JSON.stringify(message));
});

stream.on('error', (error) => {
  logger.error('Twitter stream error', error);
  throw error;
});
