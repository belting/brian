'use strict';

import mainModel from '../models/main.json';
import React from 'react/addons';
import {
  Navigation
}
from '../components/nav';

export default function(req, res) {
  let navigationHtml = React.renderToString(
    React.createFactory(Navigation)({
      items: mainModel.nav
    })
  );

  res.render('index', {
    html: {
      nav: navigationHtml
    },
    model: mainModel
  });
}
