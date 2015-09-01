'use strict';

import config from './config';

export default function(app) {
  app.get('/', (req, res) => {
    res.sendFile('index.html', {
      root: `${config.root}/public`
    });
  });
}
