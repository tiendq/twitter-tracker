const logger = require('winston');
const config = require('../../config');
const twitter = require('../../models/twitter');

let stream = twitter.stream('statuses/filter', { track: config.twitter.track });

stream.on('data', (tweet) => {
  let message = {
    createdAt: tweet.created_at,
    id: tweet.id,
    text: tweet.text,
    screenName: tweet.user.screen_name
  }

  console.log(message);
});

stream.on('error', (error) => {
  logger.error('Twitter stream error', error);
  throw error;
});
