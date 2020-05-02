// Import Librarys
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const nocache = require('nocache');
const morgan = require('morgan');
const app = express();
const http = require('http');
const server = http.createServer(app);
const routes = require('./routes/index');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/lion', {
  useNewUrlParser: true,
  server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
});
app.use(cors({ origin: '*', optionsSuccessStatus: 200 }));
app.use(nocache());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log(`We're connected!`);
});
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false, limit: '10mb' }));

server.listen(3000, () => {
  console.log('Listening to port 3000');
});

app.use('/', routes);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});
