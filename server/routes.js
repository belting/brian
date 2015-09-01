'use strict';

import api from './api';
import config from './config';

export default function(app) {
  app.use('/api', api);

  app.get('/*', (req, res) => {
    res.sendFile('index.html', {
      root: `${config.root}/public`
    });
  });
}
