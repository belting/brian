'use strict';

import bodyParser from 'body-parser';
import compression from 'compression';
import config from './config';
import express from 'express';
//import favicon from 'serve-favicon';
import routes from './routes';

let app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(express.static(`${config.root}/public`));
//app.use(favicon(`${ROOT}/public/favicon.ico`));

routes(app);

let server = app.listen(3000, () => {
  let address = server.address();
  console.log(`App listening at http://${address.host}:${address.port}`);
});

export default app;
