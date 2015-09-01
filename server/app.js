'use strict';

import express from 'express';
import routes from './routes';

let app = express();

routes(app);

let server = app.listen(3000, () => {
  let address = server.address();
  console.log(`App listening at http://${address.host}:${address.port}`);
});

export default app;
