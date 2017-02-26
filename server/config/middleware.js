var morgan = require('morgan');
var bodyParser = require('body-Parser')

module.exports = function (app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
};
