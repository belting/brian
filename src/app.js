'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

import bodyParser from 'body-parser';
import compression from 'compression';
import config from './config';
import connectLivereload from 'connect-livereload';
import express from 'express';
import exphbs from 'express-handlebars';
//import favicon from 'serve-favicon';
import morgan from 'morgan';
import routes from './routes';

let app = express();

app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: false,
  helpers: {
    json: context => JSON.stringify(context)
  }
}));
app.set('view engine', '.hbs');
app.set('views', `${config.root}/views`);

app.use(compression());
app.use(bodyParser.json());
app.use(express.static(`${config.root}/public`));
//app.use(favicon(`${ROOT}/public/favicon.ico`));
app.use(morgan('short'))

if (config.isDev) {
  app.use(connectLivereload());
}

routes(app);

let server = app.listen(3000, () => {
  let address = server.address();
  console.log(`App listening at http://${address.host}:${address.port}`);
});

export default app;
