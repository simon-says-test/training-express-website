const winston = require('winston');
const { app } = require('./src/app');

const port = 3001;
app.listen(port, async () => {
  winston.info(`Example app listening at http://localhost:${port}`);
});
