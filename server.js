const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
const cacheRoutes = require('./routes/cacheRoutes');
const errorHandler = require('./middleware/errorHandler')
const logger = require('./utlis/logger')
const app = express()
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(compression())
app.use('/api', cacheRoutes);

app.use((req, res, next) => {
    res.status(404).json({
      message: 'Route not found',
    });
  });
app.use(errorHandler)
const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  logger.info('connection to server on port 3000')
});

