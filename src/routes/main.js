'use strict';

import mainModel from '../models/main.json';

export default function(req, res) {
  res.render('index', mainModel);
}
