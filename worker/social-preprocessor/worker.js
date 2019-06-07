const joi = require('joi');
const logger = require('winston');
const debug = require('debug')('zeromq');
const zmq = require('zeromq');
const config = require('../../config');

let socket = zmq.socket('pull');
socket.connect(config.zeromq.uri);

socket.on('message', (message) => {
  debug(JSON.parse(message.toString()));
});
