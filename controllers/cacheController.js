const redisClient = require('../config/redisConfig');
const { keyValueSchema, keySchema } = require('../utlis/validation');
const logger = require('../utlis/logger')
let currentSize = 0;
const maxSize = 10;

const storeCache = async (req, res) => {
  try {
    const { key, value } = keyValueSchema.parse(req.body);
    logger.info('hiting to store route')
    if (currentSize >= maxSize) {
      return res.status(400).send('Cache size limit reached');
    }
    await redisClient.set(key, value);
    currentSize++;
    res.status(201).send('Cache stored successfully');
  } catch (error) {
    logger.error('error found in store route')
    res.status(400).send(error.message);
  }
};

const getCache = async (req, res) => {
  try {
    logger.info('hitting to get cache route')
    const { key } = keySchema.parse(req.params);
    const value = await redisClient.get(key);
    if (value === null) {
      res.status(404).send('Key not found');
    } else {
      res.status(200).send(value);
    }
  } catch (error) {
    logger.error('error occured in get cache route')
    res.status(400).send(error.message);
  }
};

const deleteCache = async (req, res) => {
  try {
    logger.info('hiting to delete cache routes')
    const { key } = keySchema.parse(req.params);
    const result = await redisClient.del(key);
    if (result) {
      currentSize--;
      res.status(200).send('Cache deleted successfully');
    } else {
      res.status(404).send('Key not found');
    }
  } catch (error) {
    logger.error('occured in deletd routes')
    res.status(400).send(error.message);
  }
};

module.exports = {
  storeCache,
  getCache,
  deleteCache,
};
