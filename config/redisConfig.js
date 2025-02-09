const redis = require('redis');
const logger = require('../utlis/logger')
require('dotenv').config();
const redisClient = redis.createClient({
  url:   process.env.REDIS_URL
});

redisClient.on('error', (err) => logger.error('Redis error:', err));
redisClient.on('connect', () => logger.info('Connected to Redis'));

redisClient.connect();

module.exports = redisClient;
