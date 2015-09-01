'use strict';

import api from './api';

export default function(app) {
  app.use('/api', api);

  app.get('/*', (req, res) => {
    res.render('index', require('./content.json'));
  });
}
