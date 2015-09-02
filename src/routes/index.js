'use strict';

import mail from './mail';
import main from './main';

export default function(app) {
  app.post('/mail', mail);

  app.get('/*', main);
}
